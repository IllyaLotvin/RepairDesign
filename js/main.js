// document.addEventListener("DOMContentLoaded", function(event) {
//     const modal = document.querySelector('.modal');
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     const closeModal = document.querySelector('.modal__close');
  
//     modalBtn.forEach(element => {
//         element.addEventListener('click', switchModal);
//     }); 
//     modal.addEventListener('click', (e) => {
//         if(e.target === modal) {
//             switchModal();
//         }
//     });
//     closeModal.addEventListener('click', switchModal);
    
    // document.addEventListener('keydown', (e) => {
    //   if (e.code === "Escape") {
    //     switchModal();
    //   }
    // })
// });

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeModal = $('.modal__close');
    const switchModal = () => {
        modal.toggleClass('modal--visible');
    };
    modalBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });
    closeModal.on('click', function(){
        modal.toggleClass('modal--visible');
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
          switchModal();
        }
    })
    // modal.addEventListener('click', (e) => {
    //  if(e.target === modal) {
    //       modal.removeClass('modal--visible');
    //     }
    // });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },  
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 20 + bullets.width() + 10)
    bullets.css('left', prev.width() + 15)
    wow = new WOW({
        mobile:       false,
        live:         true,
        callback:     function(box) {
          console.log('animation started');
        }
    });
    new WOW().init();

    $(window).scroll(function(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.types__card').offset().top;
        var eh = $('.types__card').outerHeight();
        var dh = $(document).height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            console.log('Элемент показан');
        }
    });

    var block_show = false;
 
    function scrollTracking(){
        if (block_show) {
            return false;
        }
     
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.types__card').offset().top;
        var eh = $('.types__card').outerHeight();
        var dh = $(document).height();   
     
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            block_show = true;
            
            // Код анимации
            $('.types__card div:eq(0)').show('fast', function(){
                $(this).next().show('fast', arguments.callee);
            });
        }
    }
     
    $(window).scroll(function(){
        scrollTracking();
    });
        
    $(document).ready(function(){ 
        scrollTracking();
    });

    $('.modal__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            userName: {          
               required: true,
               minlength: 2
            },
            userPhone: "required",
            userEmail: {
               required: true,
               email: true
            }
        },
    
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя должно быть не меньше 2 символов"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите Email",
                email: "Введите в формате: name@domein.com "
            }
        },

        submitHendler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                dataType: "dataType",
                success: function (response) {
                    console.loh("Ajax" + response);
                    $(form)[0].reset();
                    modal.toggleClass('modal--visible');
                },
                error: function (response) {
                    console.error('Ошибка запроса: ' + response);
                }
            });
        }
    });

   $('[type=tel]').mask("+38(000) 00-00-0-00", {placeholder: "+38..."});

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: -33.9, lng: 151.2}
        });
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Yoa are here",
        icon: 'img/marker.png'
        });
        setMarkers(map);
    }

});