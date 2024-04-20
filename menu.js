window.addEventListener("scroll", function (){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
  })
  let bntMenu = document.getElementById('btn-menu')
  let menuMob = document.getElementById('menu-mobile')
  let overlay = document.getElementById('overlay-menu')

bntMenu.addEventListener('click', ()=>{
  menuMob.classList.add('abrir-menu')
})
menuMob.addEventListener('click', ()=>{
  menuMob.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
  menuMob.classList.remove('abrir-menu')
})


