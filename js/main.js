$(function () {
    // Menu opener hamburger
    $('.burger').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });


    // // Menu opener hamburger
    // $('.burger, .menu a').click(function () {
    //     $('.menu-collapse').toggleClass('d-none').css('order', '1');
    //     $('.menu').toggleClass('menu-opened');
    // });
    // Илья у Андрея в разборе всё выглядит так, но у меня в работе в 1 строке .menu a - вызывали
    // проблемы, в виде - когда я нажимаю на ссылку на 0.5 секунды появляется бургер открытый
    // и исчезает, если нажать на пресс-центр или отрасли он открывается полноценно в шапке и не 
    // исчезает, я скидывал видео и скрин в группу около 23 часов вечера, подскажи для чего его Андрей прописал, 
    // т.к. я думал для того чтобы у нас скрывался бургер после нажатия на ссылку в нём но он и так это делает
    // в том виде в котором я оставил этот код без комментирования выше

    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // Modal Screen
    $('.modal-phone').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });
    
    //Slider
        $('.slider__wrap').slick({
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></button>'
        });

});
