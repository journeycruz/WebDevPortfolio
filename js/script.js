/*Smooth Scrolling to links*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('#mainNav .navbar-toggler').addClass('collapsed');
    $('#navbarResponsive').removeClass('show');

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

/*portfolio navbar collapse*/
$(document).ready(function () {
    $('#navbarProjects .nav-link').on('click', function () {
        $('.navbar-collapse.collapse').removeClass('show');
    });
});

var $grid = $('.grid').isotope({
    filter: '*',
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

/*Top Scroll Button*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});

/*Fadeinup animation on mobile*/
$(document).ready(function () {
    if ($(window).width() < 768) {
        $("div").attr('data-animation', 'fadeInUp');
    }
});

$(function () { 
    function onScrollInit(items, trigger) { 
        items.each(function () { 
            var osElement = $(this), 
                osAnimationClass = osElement.attr('data-animation'), 
                osAnimationDelay = osElement.attr('data-delay'); 

            osElement.css({ //this makes sure all of the screens show up the same on all browsers 
                '-webkit-animation-delay': osAnimationDelay, 
                '-moz-animation-delay': osAnimationDelay, 
                'animation-delay': osAnimationDelay 
            });

            var osTrigger = (trigger) ? trigger : osElement;

            osTrigger.waypoint(function () { 
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {
                triggerOnce: true, 
                offset: '70%' 
            });
        });
    }

    onScrollInit($('.os-animation')); 
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); 
});


var filterFns = {
    
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};
$('.filters-button-group').on('click', 'a.filter', function () {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
        filter: filterValue
    });
});
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a.filter', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

$(document).ready(function () {
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: ".item",
            isOriginLeft: false,
        });
        $container.isotope();
    });
});

$(document).ready(function () {
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 100, 
        image: {
            titleSrc: 'title'
        }
    });
});

/*========== PROJECTS ==========*/
$(document).ready(function () {
    $('#team-slider').owlCarousel({ 
        nav: false,
        dots: true,
        autoplay: true, 
        autoplayHoverPause: true, 
        loop: true, 
        autoplayTimeout: 8000,
        smartSpeed: 1200,
        dotsSpeed: 1000, 
        responsive: { 
            0: {
                items: 1 
            },
            768: {
                items: 2 
            },
            992: {
                items: 3 
            }
        }
    });
});
