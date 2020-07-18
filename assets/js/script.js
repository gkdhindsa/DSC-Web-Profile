function updateTab(arg){
  document.querySelector(".content-section").innerHTML=document.querySelector('.'+arg.id).innerHTML;
}

function updatePhoto(arg){
  console.log(arg);
  document.querySelector('#slide-main').src=arg.src;
}

var tabs=document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
    tab.addEventListener('click', function(){
      updateTab(tab)
    });
});

$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});



var slides=document.querySelectorAll("#slide");
slides.forEach(slide => {
    slide.addEventListener('click', function(){
      console.log(slide);
      updatePhoto(slide);
    });
});