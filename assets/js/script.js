$(document).on('ready', function () {
  document.querySelector(".content-section").innerHTML=document.querySelector('.about').innerHTML;


});


function updateTab(arg){
  document.querySelector(".content-section").innerHTML=document.querySelector('.'+arg.id).innerHTML;
}

function updatePhoto(arg){
  console.log(arg);
  document.querySelector('#slide-main').src=arg.src;
}
var slides=document.querySelectorAll("#slide");
slides.forEach(slide => {
  slide.addEventListener('click', function(){
    console.log(slide);
    updatePhoto(slide)
  });
    
});

var tabs=document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
    tab.addEventListener('click', function(){
      updateTab(tab)
    });
});