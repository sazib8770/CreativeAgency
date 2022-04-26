
var nav = document.querySelector('nav');

window.addEventListener('scroll',function(){
  if(window.pageYOffset > 100){
    nav.classList.add('navbar_bg', 'shadow');
  }else{
    nav.classList.remove('navbar_bg', 'shadow');
  }
});
// bxslider start
$(document).ready(function () {
  $(".bxslider").bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
  });
});
// VenoBox start
new VenoBox({
  selector: '.my-video-links',
});