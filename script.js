/*  SHOW MENU  */
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*  REMOVE MENU MOBILE  */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*  SCROLL SECTIONS ACTIVE LINK  */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  })
}
window.addEventListener('scroll', scrollActive)

/*  CHANGE BACKGROUND HEADER  */ 
function scrollHeader(){
  const nav = document.getElementById('header')
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*  SHOW SCROLL TOP  */ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*  DARK LIGHT THEME  */ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

if (selectedTheme) {
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// act/deactivate the theme...
themeButton.addEventListener('click', () => {
  // add/remove the dark/icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*  SCROLL */
const sr = ScrollReveal({
  distance: '30px',
  duration: 1800,
  reset: true,
});

sr.reveal(`.home__data, .home__img, 
         .decoration__data,
         .accessory__content,
         .footer__content`, {
  origin: 'top',
  interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
  origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
  origin: 'right'
})

/* To LIFT DIV Box...*/
document.querySelectorAll('.accessory__content, .decoration__data').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-10px)';
      item.style.boxShadow = '0 3px 12px rgba(136, 60, 67,.95)';
      item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });

  item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
      item.style.boxShadow = 'none';
  });
});