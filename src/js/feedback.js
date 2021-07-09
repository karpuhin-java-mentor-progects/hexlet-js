const overlay = document.querySelector('.overlay');
const order = document.querySelector('.order');
const orderForm = document.querySelector('.order-form');


document.addEventListener('click', function (e){
  if(e.target.className === 'icon icon-phone' || e.target.className === "header-icon icon-phone icon-hidden"){
    overlay.classList.add('overlay-active');
    order.classList.add('active-menu-order');
  }

  if(e.target.className === 'icon icon-close' || e.target.className === 'overlay overlay-active'){
    overlay.classList.remove('overlay-active');
    order.classList.remove('active-menu-order');
  }

  if(e.target.className === 'icon icon-chat' || e.target.className === "header-icon icon-chat icon-hidden"){
    overlay.classList.add('overlay-active');
    orderForm.classList.add('active-menu-order');
  }

  if(e.target.className === 'icon icon-close' || e.target.className === 'overlay overlay-active'){
    overlay.classList.remove('overlay-active');
    orderForm.classList.remove('active-menu-order');
  }

})
