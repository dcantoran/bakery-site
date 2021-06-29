const masterNav = document.querySelector('.master-nav')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
    masterNav.style.display = 'flex';
    masterNav.style.top = '0';
}

function close() {
    masterNav.style.top = '-100%';
}