
window.addEventListener('load', function(){
    //Переход по ссылкам меню 
    
});


jQuery(function($) {
    "use strict"

    function blink(time, interval){
    var timer = window.setInterval(function(){
        $('.content .content-figure').css("opacity", "0");
        window.setTimeout(function(){
            $("img").css("opacity", "1");
        }, 100);
    }, interval);
    window.setTimeout(function(){clearInterval(timer);}, time);
}

   blink(900000, 1200); 



   $('.header .header-block .header-block-hover').hover(function(){
   		$('.header .header-block .header-block-map').slideDown(400);
   });

   $('.header .header-block .header-block-map').mouseleave(function(){
   		$(this).slideUp(400);
   });

   function showTip(){
      $('.content .content-tip').toggle(400);
   }

    $('.content .content-card').click(function(){
      showTip();
   });

    $('.content .content-figure').click(function(){
      showTip();
   });

    $('.content .content-tip').click(function(){
       $(this).hide(400);
    })


    function showPop(){
      $('.popup').show(400);
    }

    function hidePop(){
      $('.popup').hide(400);
    }

    $('.header .header-block .header-block-online').click(function(){
         showPop();
    });
     $('.content .content-text button').click(function(){
         showPop();
    });

     $('.popup .popup-content button').click(function(){
        hidePop();
        $('.popup-done').show(400);
     });


      $('.popup .popup-cancel').click(function(){
          hidePop();
      });

      $('.popup-done .popup-done-cancel').click(function(){
          $('.popup-done').hide(400);        
      });

       $('.menu .menu-small').click(function(){
        console.log('1');
          $('.menu nav').toggle(400);        
      });


   $(document).on("scroll", function(){
   		let eff = $("html, body").scrollTop();
   		$('.heart1').css('left', eff+'px');
   		$('.heart2').css('top', (eff/2)+'px');
   	});

});