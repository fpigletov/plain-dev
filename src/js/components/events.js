export function events() {
  const events = document.querySelector('.events');

  if (events) {
    let eventsAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.main__events',
        start: 'top 50%',
        end: 'bottom bottom'
      }
    })

    eventsAnimation.from('.events__title .letter', {
      stagger: 0.1,
      duration: 0.2,
      opacity: 0,
    })
      .from('.events__item', { stagger: 0.2, opacity: 0, y: 200, duration: 1 })
      .from('.events__btn', { opacity: 0, y: 100, duration: 1 })
  }
}