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

    $('.share-button').on('click',function(){
        $('.sns').toggleClass('on');
    });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGVubmFfMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBzdCA9IDA7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICBpZiggc3QgPCBzY3JvbGxUb3Ape1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5nbmJCdG4sIC5nbmJXcmFwJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iQnRuLCAuZ25iV3JhcCcpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNoYXJlLWJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuc25zJykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pOyJdfQ==
