//change nav style on scroll//
window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);

})

// gallery swiper effect//
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        599:{
            slidesPerView:2,
            spaceBetween: 40,
        },
        1023:{
            slidesPerView:3,
            spaceBetween:60
        }
    }
  });

  const nav = document.querySelector('.nav_links');
  const navOpen = document.querySelector('#nav-open');
  const navClose = document.querySelector('#nav-close');

  

  window.addEventListener('resize', () => {
    // Check the screen width and update the navigation toggle button visibility
    if (document.body.clientWidth > 1024) {
      nav.style.display = 'flex';
      navOpen.style.display = 'none';
      navClose.style.display = 'none';
    }
    else {
      nav.style.display = 'none';
      navOpen.style.display = 'inline-block';
      navClose.style.display = 'none';
    }
    navOpen.addEventListener('click', openNav);
    navClose.addEventListener('click', closeNav);
  });
   
  function openNav(){
    nav.style.display = 'flex';
    navClose.style.display ='inline-block';
    navOpen.style.display = 'none';
  };
  
  
  
  function closeNav(){
    nav.style.display = 'none';
    navOpen.style.display = 'inline-block';
    navClose.style.display = 'none';
  };

  
 
  ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 1500,
    delay:150
   });
   ScrollReveal().reveal('.left, .right, .footer-head', { delay: 200 });
   ScrollReveal().reveal('.about-right , .header-frame' , { delay: 200, origin:'right' });
   ScrollReveal().reveal('.about-left, .about-title , .gallery-head, .partner-head', { delay: 200, origin:'left' });

  

  
    
 