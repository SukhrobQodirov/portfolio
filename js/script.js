$(document).ready(function () {

    let options = {
        strings: [
            'Sukhrob Qodirov',
            'front end Developer',
            '18 years old'
        ],
        typeSpeed: 50,
        startDelay: 500,
        loop: true,
        backSpeed: 40,
        backDelay: 500,
    }

    let typed = new Typed('.element', options);

    $('.projects__wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


})