export function modal() {
  const header = document.querySelector('.header');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = modal.querySelector('.modal__close');
  const wrapper = document.querySelector('.wrapper');
  const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.paddingRight = scrollWidth;
    header.style.paddingRight = scrollWidth;
    document.body.classList.add('hidden');
  };

  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => {
      document.body.style.paddingRight = '';
      header.style.paddingRight = '';
      document.body.classList.remove('hidden');
    }, 300)

  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-callback') || e.target.closest('.btn-callback')) {
      openModal();
    }
  });

  modalCloseBtn.addEventListener('click', () => {
    if (modal.classList.contains('active')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}