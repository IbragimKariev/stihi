$('#tomes').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    items: 9,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        },
        1200:{
            items:6,
        },
        1600:{
            items:7,
        },
        1900:{
            items:9,
        }
    }
})