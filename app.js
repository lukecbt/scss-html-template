/* Hamburger Menu */

var hamburger = document.getElementsByClassName("hamburger")[0]

hamburger.addEventListener("click", () => {
    console.log('hamburger')
});

/* End Hamburger Menu */

/* Scroll Animation */

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
/* End Scroll Animation */