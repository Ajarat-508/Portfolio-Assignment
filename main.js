$('a').click(function (e) {
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top -100
  }, 1000);
});

let hamburger = document.getElementById("hamburger");
let mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", function() {
  mobileNav.classList.toggle("hidden");
});

