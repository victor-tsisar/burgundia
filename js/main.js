$(function(){
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: true, 
        autoplay: false,
        speed: 300,           
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,                    
                    prevArrow: false,
                    nextArrow: false
                }
            }]
    }); 

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
        $('.menu__list, .menu__btn, .menu').toggleClass('active');
    });
});
