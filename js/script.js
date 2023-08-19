$(document).ready(function () {

    let options = {
        strings: [
            'Sukhrob Qodirov',
            'front end Developer',
        ],
        typeSpeed: 50,
        startDelay: 500,
        loop: true,
        backSpeed: 40,
        backDelay: 500,
    }

    let typed = new Typed('.element', options);

    $('.projects__list').slick({
        centerMode: true,
        centerPadding: '0',
        dots: true,
        infinite: true,
        autoplay: true,
        loop: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        cssEase: 'linear',
        arrows: false,
    });


})