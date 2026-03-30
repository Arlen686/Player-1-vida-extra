// hamburger toggle functionality
var toggle = document.querySelector('.menu-toggle');
var nav = document.getElementById('nav');
if(toggle){
  toggle.onclick = function(){
    if(nav.className==='') nav.className='active';
    else nav.className='';
  };
}
