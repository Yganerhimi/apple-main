const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () =>{
    selectElement('header').classList.toggle('active');
})


document.addEventListener('DOMContentLoaded', function() {
    var macLink = document.getElementById('mac');
    var iphone13Section = document.querySelector('.hero.iphone-13-pro');
  
    macLink.addEventListener('click', function(event) {
      event.preventDefault();
      iphone13Section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var macLink = document.getElementById('iphone11');
    var iphone13Section = document.querySelector('.hero.iphone-13');
  
    macLink.addEventListener('click', function(event) {
      event.preventDefault();
      iphone13Section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var macLink = document.getElementById('watch');
    var iphone13Section = document.querySelector('.hero.watch');
  
    macLink.addEventListener('click', function(event) {
      event.preventDefault();
      iphone13Section.scrollIntoView({ behavior: 'smooth' });
    });
  });


var revealElements = document.querySelectorAll('.hero');


var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    
    if (entry.isIntersecting) {
      
      entry.target.classList.add('reveal');

    
      observer.unobserve(entry.target);
    }
  });
});

revealElements.forEach(function(element) {
  observer.observe(element);
});



const searchLink = document.querySelector('.nav-link-search');
const popupOverlay = document.getElementById('popup-overlay');

searchLink.addEventListener('click', function(event) {
    event.preventDefault(); 

    
    popupOverlay.style.display = 'block';
});




// smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Toggle mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
const navListMobile = document.querySelector('.nav-list-mobile');
mobileMenu.addEventListener('click', function () {
  navListMobile.classList.toggle('active');
  this.classList.toggle('open');
});

// hover effect
const gridProducts = document.querySelectorAll('.grid-product');
gridProducts.forEach(product => {
  product.addEventListener('mouseenter', function () {
      this.classList.add('hover');
  });
  product.addEventListener('mouseleave', function () {
      this.classList.remove('hover');
  });
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onscroll = function() {
  var button = document.getElementById("goToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
};

////////////////////////////////////////



