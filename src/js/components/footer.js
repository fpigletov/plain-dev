export function footer() {
  const footer = document.querySelector('.footer');

  if (footer) {
    let footerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer',
        start: 'top +50%'
      }
    });

    footerAnimation.from('.footer__logo', {
      y: '100%',
      ease: 'power3.out',
      duration: 1.5,
    }).from('.footer__center', {
      duration: 1,
      opacity: 0
    }).from('.center-footer__column', {
      stagger: 0.2,
      opacity: 0,
      ease: 'power3.out',
      y: '50%',
      duration: 1,
    }).from('.footer__bottom', {
      duration: 1,
      opacity: 0
    })
  }
}