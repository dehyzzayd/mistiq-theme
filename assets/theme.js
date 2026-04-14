(function(){
  // Variant buttons
  document.querySelectorAll('.pp-opt').forEach(function(b){b.addEventListener('click',function(){var p=this.closest('.pp-opts');if(p)p.querySelectorAll('.pp-opt').forEach(function(x){x.classList.remove('active')});this.classList.add('active');});});
  // Quantity
  document.querySelectorAll('.pp-qty-c').forEach(function(c){var v=c.querySelector('.pp-qty-v'),m=c.querySelector('[data-a="m"]'),p=c.querySelector('[data-a="p"]');if(m)m.addEventListener('click',function(){var n=parseInt(v.textContent);if(n>1)v.textContent=n-1;});if(p)p.addEventListener('click',function(){var n=parseInt(v.textContent);if(n<10)v.textContent=n+1;});});
  // Mobile menu
  var t=document.getElementById('mob-toggle'),m=document.getElementById('mob-menu'),c=document.getElementById('mob-close');
  if(t&&m){t.addEventListener('click',function(){m.classList.add('open');document.body.style.overflow='hidden';});if(c)c.addEventListener('click',function(){m.classList.remove('open');document.body.style.overflow='';});document.addEventListener('keydown',function(e){if(e.key==='Escape'){m.classList.remove('open');document.body.style.overflow='';}});}
  // AJAX add to cart
  document.addEventListener('submit',function(e){var f=e.target;if(!f.matches('form[action="/cart/add"]'))return;e.preventDefault();var b=f.querySelector('[type="submit"]'),o=b.textContent;b.textContent='Added';b.style.opacity='.6';fetch('/cart/add.js',{method:'POST',body:new FormData(f)}).then(function(){setTimeout(function(){b.textContent=o;b.style.opacity='1';},1200);}).catch(function(){b.textContent=o;b.style.opacity='1';});});
})();
