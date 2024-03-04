// navbar

let list = document.getElementById("list");
let bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  list.classList.toggle("active");
  bar.classList.toggle("close");
});

// Slider
$(document).ready(function () {
  $(".land").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    mouseDrag: false,
    smartSpeed: 1200,
    autoplay: true,
    autoplayTimeout: 7000,
  });
});

// Slider Game

$(document).ready(function () {
  $(".game").owlCarousel({
    loop: true,
    items: 3,
    margin: 20,
    nav: true,
    dots: false,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
