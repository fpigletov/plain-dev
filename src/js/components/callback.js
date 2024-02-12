export function callback() {
  const callback = document.querySelector('.callback');

  if (callback) {
    const callBackBtn = document.querySelector('.callback__btn');

    let callbackAnimationLeft = gsap.to('.callback__marquee--left .callback__text', {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: 'linear'
    }).totalProgress(0.5);

    let callbackAnimationRight = gsap.from('.callback__marquee--right .callback__text', {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: 'linear'
    }).totalProgress(0.7);

    gsap.matchMedia().add('(min-width: 768px)', () => {
      callBackBtn.addEventListener('mouseover', () => {
        gsap.to(callbackAnimationLeft, { timeScale: 3, duration: 1 });
        gsap.to(callbackAnimationRight, { timeScale: 3, duration: 1 });
        // mouseView.classList.add('view-visible');
      });

      callBackBtn.addEventListener('mouseleave', () => {
        gsap.to(callbackAnimationLeft, { timeScale: 1, duration: 1 });
        gsap.to(callbackAnimationRight, { timeScale: 1, duration: 1 });
        // mouseView.classList.remove('view-visible');
      });
    });
  }
}