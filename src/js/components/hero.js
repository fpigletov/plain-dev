export function hero() {
  const heroSection = document.querySelector('.hero');

  if (heroSection) {
    let heroAnimation = gsap.timeline();

    heroAnimation.from('.wrapper', {
      opacity: 0,
      duration: 1
    }).from('.header', {
      opacity: 0,
      y: '-100%',
      duration: 0.7
    }).from('.hero__title .letter', {
      stagger: 0.1,
      opacity: 0,
      duration: 0.2
    }).to('.hero__bg img', {
      scale: 1.2,
      duration: 2
    }, '-=2.5').from('.hero__btn', {
      opacity: 0,
      duration: 1
    });
  }
}