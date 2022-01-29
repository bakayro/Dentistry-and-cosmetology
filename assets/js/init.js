/*var lazyLoadInstance = new LazyLoad({});*/

new WOW().init();

$(document).ready(function () {

    /* MOBILE MNEU OPEN */
    $('.burger').click(function () {
        $('.mobile-menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1100,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        items: 4,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            680: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false,
                loop: false
            },
            1000: {
                items: 4,
                nav: false
            }
        }
    });

});

$(".header__menu ul li a").click(function () {
    //$('.home').removeClass('active');
    $(this).toggleClass('active');
});

// $(".scroll-up").click(function () {
// 	$('html, body').animate({
// 		scrollTop: 0
// 	}, 800);
// 	return false;
// });


/* ignorowanie zdarzenia HREF po klikniÄciu */
/*
$(".ignore-click").click(function () {
    return false;
})
*/

$(".anchor-link").click(function (e) {
    var data_scroll = $($(this).data("scroll"));
    $("html, body").animate({ scrollTop: data_scroll.offset().top }, "slow", "swing", function () { });
    return false;
});