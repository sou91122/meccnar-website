
// sticky //
    $(window).scroll(function() {
        var sticky = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 80) {
            sticky.addClass('sticky');
            sticky.addClass('animated');
            sticky.addClass('fadeInDown');
            sticky.removeClass('fadeInUp');
        }
        else {
            sticky.removeClass('sticky');
            sticky.removeClass('fadeInDown');
            sticky.addClass('fadeInUp');
            sticky.removeClass('animated');
        }
    });

// Categories //
    $('.owl-carousel1').owlCarousel({
        loop:true,
        autoplay:true,
        margin:30,
        nav:false,
        dots:false, 
        responsive:{
            0:{
                items:1
            },
            660:{
                items:2,
                nav:true
            },
           767:{
                items:2,
                nav:true
            },
            1000:{
                items:6
            }
           
        }
    })



    $('#gallery-slide').owlCarousel({
        loop:true,
        autoplay:true,
        margin:0,
        nav:false,
        dots:false,  
        responsive:{
            0:{
                items:1
            },
            660:{
                items:1
            },
           767:{
                items:1
            },
            1000:{
                items:1
            }
           
        }
    })

    


    $(".nav-item.dropdown").hover(
        function () {
          $(this).addClass("show");
        },
        function () {
          $(this).removeClass("show");
        }
      );