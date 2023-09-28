const btnMobile = document.getElementById('btn-mobile');
const clickMobileAbout = document.getElementById('click-mobile-about');
const clickMobileProjects = document.getElementById('click-mobile-projects');
const clickMobileContacts = document.getElementById('click-mobile-contacts');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar menu');
   }else{
     event.currentTarget.setAttribute('aria-label', 'Abrir menu');
   }
  }
  

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

clickMobileAbout.addEventListener('click', toggleMenu);
clickMobileAbout.addEventListener('touchstart', toggleMenu);

clickMobileProjects.addEventListener('click', toggleMenu);
clickMobileProjects.addEventListener('touchstart', toggleMenu);

clickMobileContacts.addEventListener('click', toggleMenu);
clickMobileContacts.addEventListener('touchstart', toggleMenu);