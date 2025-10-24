document.addEventListener('DOMContentLoaded', function() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function() {
          modal.style.display = 'none';
        });
      });
    });
  
    // Check if there's a modal to open in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const modalToOpen = urlParams.get('modal');
    if (modalToOpen) {
      const modal = document.getElementById(modalToOpen);
      if (modal) {
        modal.style.display = 'block';
      }
    }
  });
  