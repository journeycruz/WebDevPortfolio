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

$(function () { // a self calling function
    function onScrollInit(items, trigger) { // a custom made function
        items.each(function () { //for every element in items run function
            var osElement = $(this), //set osElement to the current
                osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
                osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

            osElement.css({ //change css of element
                '-webkit-animation-delay': osAnimationDelay, //for safari browsers
                '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
                'animation-delay': osAnimationDelay //normal
            });

            var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

            osTrigger.waypoint(function () { //scroll upwards and downwards
                osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
            }, {
                triggerOnce: true, //only once this animation should happen
                offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
            });
        });
    }

    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};
// bind filter button click
$('.filters-button-group').on('click', 'a.filter', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
        filter: filterValue
    });
});
// change is-checked class on menu
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
       gallery: { enabled: true },
       removalDelay: 100, // Delay in milliseconds before popup is removed
       image: {
          titleSrc: 'title'
          // this tells the script which attribute has your image caption
       }
    });
 });
 