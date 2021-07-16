import Swiper from 'swiper';

// const swiper = new Swiper('.swiper-container', {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


 new Swiper('.swiper-container', {
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let buttonShowTextFirst = document.querySelector('.button-show__first');
let swiperWrapperFirst = document.querySelector('.swiper-wrapper__brands');

let buttonShowTextSecond = document.querySelector('.button-show__second');
let wiperWrapperRepair = document.querySelector('.wiper-wrapper__repair')
let arrow = document.querySelector('.arrow')

document.addEventListener("click", function(e)
{
  if(e.target.classList.contains("button-show__first")){
    swiperWrapperFirst.classList.contains('active') ? buttonShowTextFirst.innerHTML = 'Показать все' :
      buttonShowTextFirst.innerHTML = 'Скрыть';
    swiperWrapperFirst.classList.contains('active') ? arrow.classList.remove('transformArrowImage') :
      arrow.classList.add('transformArrowImage');

    swiperWrapperFirst.classList.toggle('active')
  }
  if(e.target.classList.contains("button-show__second")){
    wiperWrapperRepair.classList.contains('active') ? buttonShowTextSecond.innerHTML = 'Показать все' :
      buttonShowTextSecond.innerHTML = 'Скрыть';
    wiperWrapperRepair.classList.contains('active') ? arrow.classList.remove('transformArrowImage') :
      arrow.classList.add('transformArrowImage');

    wiperWrapperRepair.classList.toggle('active')
  }

});


