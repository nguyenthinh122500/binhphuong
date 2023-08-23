$(document).ready(function(){

    $('.sliderOrther').slick({
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: true,
      dots: false,
      speed: 1000,
      slidesToShow : 3,
      responsive: [
          {
          breakpoint:767,
          settings: {
              slidesToShow : 2,
          }
        }
      ]
    });
});
