function updateTab(arg) {
	document.querySelectorAll(".content-section > div").forEach(ele => {
		ele.classList.remove("show")
	})
	document.querySelector(`.${arg}`).classList.add("show")
	
}

let tabs = document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
	tab.addEventListener('click', function () {
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("selected")
		}
		tab.classList.add("selected")
		updateTab(tab.id)
	});
});

function updatePhoto(arg) {
	console.log('fine')
	document.querySelector("#slide-main").setAttribute("src", `${arg.getAttribute("src")}`);
}

let slides = document.querySelectorAll('.xyz');

slides.forEach(slide => {
	slide.addEventListener('click', function () {
		console.log(slide.src)
		updatePhoto(slide)
	})
})

 $('.carousel[data-type="multi"] .item').each(function () {
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

