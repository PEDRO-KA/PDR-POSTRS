
let btnMenu = document.getElementById('btn-menu')
let menuMobile = document.getElementById('mobile-menu')
let menuOverlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () =>{
    menuMobile.classList.add('menu-lateral')
})

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.remove('menu-lateral')
})

menuOverlay.addEventListener('click', () =>{
    menuMobile.classList.remove('menu-lateral')
})