
// АНимация
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
/////////////////////////////////////

//SLider//
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 9,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	freeMode: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},   
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	  },
  });
  ////////////////////////////////////
  var swiper = new Swiper(".mySwiper2", {
	slidesPerView: 5,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	  },
  });

//////////////////////////////////////////////
let headerBtn = document.querySelector('.email_btn');
	headerBtn.addEventListener('mouseover', ()=>{
		headerBtn.style.backgroundColor = '#1a6981'
		headerBtn.style.transition =' all 0.5s ease 0s'
	})
	headerBtn.addEventListener('mouseout', ()=>{
		headerBtn.style.backgroundColor = '#fff'
  })

let submitBtn = document.querySelector('.greenbg');
submitBtn.addEventListener('mouseover', ()=>{
	submitBtn.style.backgroundColor = '#1a6981'
	submitBtn.style.transition =' all 0.5s ease 0s'
  })
  submitBtn.addEventListener('mouseout', ()=>{
	submitBtn.style.backgroundColor = '#3bd071'
}) 

let blackBtns = document.querySelectorAll('.blackbtn')
  console.log(blackBtns)
  blackBtns.forEach(item =>{
	 		item.addEventListener('mouseover', ()=>{
	 		  item.style.backgroundColor = '#1a6981'
			   item.style.transition =' all 0.5s ease 0s'
	 	  })
		   item.addEventListener('mouseout', ()=>{
			item.style.backgroundColor = '#000'
	   })
	 
  })


// 	  btns.forEach(item =>{
// 		item.addEventListener('mouseover', ()=>{
// 		  item.style.backgroundColor = '#1a6981'
// 	  })
//   })



// const count = document.querySelectorAll('.counter');
//   	count.forEach(item => {
// 		  item.textContent = '0'
// 		  for(let i = 0; i < 100; i++){
// 			item.textContent = i
// 		  }
// 	  })

	