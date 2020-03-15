$(document).ready(function () {
    var sliderProducts = $('#slider-products'),
        sliderFeatures = $('#features'),
        sliderTrainings = $('#trainings'),
        sliderElastics = $('#elastics'),
        sliderExpanders = $('#expanders'),
        sliderProductsFooter = $('#slider-products-footer'),
        breakpoint = 991,
        flag = 0;

    // Настройки слайдеров

    var sliderProductsSettings = {
            mobileFirst: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: "<button class='slick-prev hide-desktop'><svg class='icon-svg'> <use xlink:href='#arrow-left'></use> </svg></button>",
            nextArrow: "<button class='slick-next slick-arrow_purple hide-desktop'><svg class='icon-svg'> <use xlink:href='#arrow-right'></use> </svg></button>",
        },
        sliderFeaturesSettings = {
            mobileFirst: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            prevArrow: $('#features .slick-prev'),
            nextArrow: $('#features .slick-next'),
            responsive: [{
                breakpoint: breakpoint,
                settings: {
                    dots: true,
                    prevArrow: "<button class='slick-prev'><svg class='icon-svg'> <use xlink:href='#arrow-left'></use> </svg></button>",
                    nextArrow: "<button class='slick-next slick-arrow_purple'><svg class='icon-svg'> <use xlink:href='#arrow-right'></use> </svg></button>"
                }
            }
            ]
        },
        sliderTrainingsSettings = {
            mobileFirst: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            prevArrow: false,
            nextArrow: false,
            adaptiveHeight: true,
        },
        sliderExpandersSettings = {
            mobileFirst: true,
            dots: true,
            appendDots: $('.section-4 .dots'),
            infinite: true,
            slidesToShow: 1,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            prevArrow: false,
            nextArrow: false,
        };


    sliderFeatures.slick(sliderFeaturesSettings);

    if (window.innerWidth <= breakpoint && flag === 0) {
        flag = 1;
        sliderProducts.slick(sliderProductsSettings);
        sliderProductsFooter.slick(sliderProductsSettings);
        sliderTrainings.slick(sliderTrainingsSettings);
        sliderElastics.slick(sliderTrainingsSettings);
        sliderExpanders.slick(sliderExpandersSettings);

    }
    $(window).on('resize', function (event) {
        windowWidth = $(window).width();
        if (event.target.innerWidth <= breakpoint && flag === 0) {
            flag = 1;
            sliderProducts.slick(sliderProductsSettings);
            sliderProductsFooter.slick(sliderProductsSettings);
            sliderTrainings.slick(sliderTrainingsSettings);
            sliderElastics.slick(sliderTrainingsSettings);
            sliderExpanders.slick(sliderExpandersSettings);

        }
        else if (event.target.innerWidth > breakpoint && flag === 1) {
            flag = 0;
            sliderProducts.slick('unslick');
            sliderProductsFooter.slick('unslick');
            sliderTrainings.slick('unslick');
            sliderElastics.slick('unslick');
            sliderExpanders.slick('unslick');
        }
    });


$('.faq').click(function () {
    if (!$(this).hasClass("faq_active")) {
        $('.faq_active').removeClass('faq_active');
        $(this).addClass('faq_active');

        $('.faq__question').removeClass('faq__question_active');
        $(this).find('.faq__question').toggleClass('faq__question_active');

        $('.faq__answer').slideUp();
        $(this).find('.faq__answer').slideDown()

    } else {
        $('.faq.faq_active').removeClass('faq_active');
        $(this).find('.faq__question').removeClass('faq__question_active');
        $(this).find('.faq__answer').slideUp()
    }

});
    
    var $select = $(".select__product").selectize({
        plugins: ['remove_button'],
        placeholder: 'Выберите продукт',
    }
        );
    var selectize = $select[0].selectize;

$('.btn').click(function () {
    var productId = $(this).attr('data-choise');
    if (productId !== undefined) {
        // $(".select__product option").filter('[value=' + productId + ']').prop('selected', true);
        selectize.setValue(productId);
        if (productId == 3) {
            $('.select__size').show();
        } else {
            $('.select__size').hide();
        }
    }
});

$('.size__label').click(function () {
    var sizeId = $(this).attr('data-size');
    $(".select__size option").filter('[value=' + sizeId + ']').prop('selected', true);
    if (!$(this).hasClass("size__label_active")) {
        $('.size__label').removeClass('size__label_active');
        $(this).addClass('size__label_active');

    }
});
    $('.slider-product').hover( function () {
        $('#bg-section').removeClass()
        switch ($(this).index()) {
            case 0:
                $('#bg-section').addClass('bg-left');
                break;
            case 1:
                $('#bg-section').addClass('bg-center')
                break;
            case 2:
                $('#bg-section').addClass('bg-right')
                break;
        }
        
        if (!$(this).hasClass("slider-product_active")) {
            $('.slider-product_active').removeClass('slider-product_active');
            $(this).addClass('slider-product_active');
        }
    });
    
    

});


















