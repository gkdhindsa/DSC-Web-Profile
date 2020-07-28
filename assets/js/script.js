function updateTab(arg){
  document.querySelector(".content-section").innerHTML=document.querySelector('.'+arg.id).innerHTML;
}

let tabs=document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
    tab.addEventListener('click', function(){
      updateTab(tab)
    });
});

function updatePhoto(arg){
	$('#slide-main').src=arg.src;
}

let slides=document.querySelectorAll('#slide');
console.log(slides);


slides.forEach(slide => {
	slide.addEventListener('click', function(){
		alert('clicked');
	})
})


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

