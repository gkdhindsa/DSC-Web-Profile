$(document).on('ready', function () {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  document.querySelector(".content-section").innerHTML=document.querySelector('.about').innerHTML;


});


function updateTab(arg){
  console.log(arg.id);
  document.querySelector(".content-section").innerHTML=document.querySelector('.'+arg.id).innerHTML;
}

function updatePhoto(arg){
  document.querySelector('#slide-main').src=arg.src;
}
var slides=document.querySelectorAll("#slide");

slides.forEach(slide => {
  slide.addEventListener('click', function(){
    updatePhoto(slide)
  });
    
});

var tabs=document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
    tab.addEventListener('click', function(){
      updateTab(tab)
    });
});