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

    next.css('left', prev.width() * 5.5 + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() * 3.2 + 10)

    
});