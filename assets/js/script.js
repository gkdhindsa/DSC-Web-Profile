

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




/*Uncomment the code below to view it in dark mode*/



let classes=['image-section', 'light-grey', 'content-section', 'trans-text', 'icon-section']

function toggle(){
	classes.forEach( ele => {
		let them = document.querySelectorAll('.'+ ele)
		console.log(ele)
		them.forEach( it => {
			
			it.classList.toggle(ele+"-dark")
			
		})
	})
	
let sm_icons=document.querySelectorAll(".sm-icon, .small-icon");
let s=(sm_icons[0].src)
if(s.substring(s.length-9, s.length)=='-dark.svg')
{
	sm_icons.forEach( icon => {
		let str=icon.src;
		icon.src=str.slice(0, str.length-9)+".svg"
	})
	
}
else{
	sm_icons.forEach( icon => {
		let str=icon.src;
		icon.src=str.slice(0, str.length-4)+"-dark.svg"
	})
}
}

toggle()