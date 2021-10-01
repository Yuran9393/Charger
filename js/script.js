
// Scroll animation
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
//SLider#1//
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
  //Slider#2//
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

//Button hover
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
  blackBtns.forEach(item =>{
	 		item.addEventListener('mouseover', ()=>{
	 		  item.style.backgroundColor = '#1a6981'
			   item.style.transition =' all 0.5s ease 0s'
	 	  })
		   item.addEventListener('mouseout', ()=>{
			item.style.backgroundColor = '#000'
	   })
	 
  })
//Count//
const time = 5000;
const step = 150;

function outNum(num){
	let count1 = document.querySelector('#count1' );
	let count2 = document.querySelector('#count2' );
	let count3 = document.querySelector('#count3' );
	let count4 = document.querySelector('#count4' );
	let count5 = document.querySelector('#count5' );
	n = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if(n == num){
			clearInterval(interval);
		}
		count1.innerHTML =  n;
		count2.innerHTML = n - 20000
		count3.innerHTML = n - 45000
		count4.innerHTML = n - 70000
		count5.innerHTML = n - 77000

	},
	
	t);
	
}
outNum(150000);

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

	