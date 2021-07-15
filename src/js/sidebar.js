const sideBar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

document.addEventListener('click', function (e){
  if(e.target.className === 'header-icon icon-menu'){
    // sideBar.classList.add('active-menu');
    overlay.classList.add('overlay-active')
  }

  if(e.target.className === 'icon icon-close' || e.target.className === 'overlay overlay-active'){
    // e.preventDefault()
    sideBar.classList.remove('active-menu');
    overlay.classList.remove('overlay-active')
  }

})
