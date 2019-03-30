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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGVubmFfMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgc3QgPSAwO1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAgJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYoIHN0IDwgc2Nyb2xsVG9wKXtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZ25iQnRuLCAuZ25iV3JhcCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYkJ0biwgLmduYldyYXAnKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7Il19
