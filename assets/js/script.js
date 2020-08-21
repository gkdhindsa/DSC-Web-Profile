let icons=document.querySelector('.icon-section');
document.body.addEventListener('scroll',()=>{
	if(document.documentElement.scrollTop> window.innerHeight*0.9 || document.body.scrollTop> window.innerHeight*0.9)
		{
		icons.classList.add('fix-icon-positon')
	}
	else
	{icons.classList.remove('fix-icon-positon')
}
  })
/*   to diplay the selected tab  */
function updateTab(arg) {
	document.querySelectorAll(".content-section > div").forEach(ele => {
		ele.classList.remove("show")
	})
	document.querySelector(`.${arg}`).classList.add("show")
	
	
	
}

/*Event Listener for the tabs selection*/
let tabs = document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
	tab.addEventListener('click', function () {
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("selected")
		}
		tab.classList.add("selected")
		updateTab(tab.id)
		icons.scrollIntoView({behavior: 'smooth' });
	});
});

/* Carousel */
$('.carousel[data-type="multi"] .item').each(function () {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 1; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});

$('.car-img').click(function () {
	$('#slider-main').attr('src', $(this).attr("src"));
});


