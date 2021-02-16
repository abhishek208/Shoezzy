const responsive = {
    0: {
        items: 1,
    },
    320: {
        items: 1,
    },
    450:{
        items: 1,
    },
    600: {
        items: 2,
    },
    960: {
        items: 3,
    },
    
    }


$('.owl-carousel').owlCarousel({
loop:true,
autoplay:true,
autoplayTimeout:4000,

responsive: responsive

})
$(document).ready(function () {

    $nav = $('.nav');
    $toggleicons = $('.toggle-icons');

    /** click event on toggle menu */
    $toggleicons.click(function () {
        $nav.toggleClass('collapse');
    }) });