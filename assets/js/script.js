function updateTab(arg) {
	document.querySelectorAll(".content-section > div").forEach(ele => {
		ele.classList.remove("show")
	})
	document.querySelector(`.${arg}`).classList.add("show")
}

let tabs = document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
	tab.addEventListener('click', function () {
		document.querySelector(".selected").innerHTML = "";
		let div = tab.cloneNode(true);
		document.querySelector(".selected").appendChild(div);
		document.querySelector(".selected").id = tab.id;
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("hide")
		}
		tab.classList.add("hide")
		document.querySelector(".selected > div").classList.remove("hide")
		updateTab(tab.id)
	});
});

function updatePhoto(arg) {
	console.log('fine')
	document.querySelector("#slide-main").setAttribute("src", `${arg.getAttribute("src")}`);
}

let slides = document.querySelectorAll('.xyz');
console.log(slides)

/*slides[1].addEventListener("click", () => {
	console.log("okay")
})*/

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

