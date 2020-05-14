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
    modal.addEventListener('click', (e) => {
     if(e.target === modal) {
          modal.removeClass('modal--visible');
        }
    });
});