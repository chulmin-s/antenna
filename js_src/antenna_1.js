$(function(){
    $(window).scroll(function(){

        var st = 0;
        var scrollTop =  $(this).scrollTop();

        if( st < scrollTop){
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });

    $('.gnbBtn, .gnbWrap').on('click',function(){

        $('.gnbBtn, .gnbWrap').toggleClass('on');
    });

});