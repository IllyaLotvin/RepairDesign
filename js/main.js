document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeModal = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    }); 
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            switchModal();
        }
    });
    closeModal.addEventListener('click', switchModal);
    
    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape") {
        switchModal();
      }
    })
});