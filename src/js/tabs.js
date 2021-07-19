let tab = function () {
  let tabNav = document.querySelectorAll('.tabs-nav__item'),
    tabContent = document.querySelectorAll('.tab'),
    tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
  }

};


tab();



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



const readBtn = document.querySelector('.read-btn')
const textHidden = document.querySelector('.text_hidden')
document.addEventListener("click", function(e)
{
  if(e.target.classList.contains("read-btn")){
    console.log('br')

    textHidden.classList.contains('active-read') ? readBtn.innerHTML = 'Читать далее' :
      readBtn.innerHTML = 'Скрыть';


    textHidden.classList.toggle('active-read')
  }

});


