/* Hamburger Menu */

var hamburger = document.getElementsByClassName('hamburger')[0]

hamburger.addEventListener('click', () => {
    console.log('hamburger')
});

/* End Hamburger Menu */

/* Scroll Animation */

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', reveal);
  
/* End Scroll Animation */

/* Card Header Hover Animation */

var hoverColor = 'rgb(95, 141, 193)';

var cards = document.querySelectorAll('.card');

cards.forEach(element => {
  element.addEventListener('mouseenter', (e) =>  {
    var cardHeader = e.target.querySelector('.card__header');
    if (cardHeader) {
      cardHeader.style.transition = '0.3s';
      cardHeader.style.color = hoverColor;
    }
  });
});

cards.forEach(element => {
  element.addEventListener('mouseleave', (e) =>  {
    var cardHeader = e.target.querySelector('.card__header');
    if (cardHeader) {
      cardHeader.style.color = 'unset';
    }
  });
});

/* Card Hover Animation End */