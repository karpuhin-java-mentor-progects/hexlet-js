const overlay = document.querySelector('.overlay');
const order = document.querySelector('.order');
const orderForm = document.querySelector('.order-form');


document.addEventListener('click', function (e){
  if(e.target.className === 'icon icon-phone' || e.target.className === "header-icon icon-phone icon-hidden"
    || e.target.className === 'header-icon icon-setting' || e.target.className === 'button-order'
  || e.target.className === 'proposal__get'){
    order.classList.add('active-menu');
    overlay.classList.add('overlay-active');
  }

  if(e.target.className === 'icon icon-close' || e.target.className === 'overlay overlay-active'){
    // order.classList.remove('active-menu')
    overlay.classList.remove('overlay-active');
  }

  if(e.target.className === 'icon icon-chat' || e.target.className === "header-icon icon-chat icon-hidden"
    || e.target.className === 'header-icon icon-search'){
    overlay.classList.add('overlay-active');
    orderForm.classList.add('active-menu-order');
  }

  if(e.target.className === 'icon icon-close' || e.target.className === 'overlay overlay-active'){
    overlay.classList.remove('overlay-active');
    orderForm.classList.remove('active-menu-order');
  }

})
