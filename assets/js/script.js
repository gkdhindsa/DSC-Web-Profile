function updateTab(arg){
  document.querySelector(".content-section").innerHTML=document.querySelector('.'+arg.id).innerHTML;
}

function updatePhoto(arg){
  console.log(arg);
  document.querySelector('#slide-main').src=arg.src;
}
var slides=document.querySelectorAll("#slide");
console.log(slides);
slides.forEach(slide => 
  slide.addEventListener('click', 
  function(){
    console.log('hello');
  })  
);

slides.forEach(slide => {
    slide.addEventListener('click', function(){
      console.log(slide);
    })
});

var tabs=document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
    tab.addEventListener('click', function(){
      updateTab(tab)
    });
});