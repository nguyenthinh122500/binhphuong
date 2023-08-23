$(document).ready(function(){
    $("#slide-more").slick({
        autoplay: true,
        arrows:false,
    });
    $(".sliderNewsPage").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        speed: 1000,
        slidesToShow : 1,
        responsive: [
            {
            breakpoint:991,
            settings: {
                dots: false,
            }
          }
        ]
    });
});