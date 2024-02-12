export function solutions() {
  const solutions = document.querySelector('.solutions');

  if (solutions) {
    function startCount(n, speed, element) {
      const counterElement = document.querySelector(element);
      let currentValue = 0;

      function updateCounter() {
        if (currentValue === n) {
          return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > n) {
          currentValue = n;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * speed) + 50;
        setTimeout(updateCounter, delay);
      }
      updateCounter();
    }

    let solutionsAnimation1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.main__solutions',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    function solutionsAnimation2() {
      startCount(750, 3, '.item-solutions__counter--1 span');
      startCount(850, 3, '.item-solutions__counter--2 span');
      startCount(900, 2, '.item-solutions__counter--3 span');
    }

    solutionsAnimation1.from('.solutions__title .letter', {
      stagger: 0.1,
      duration: 0.2,
      opacity: 0,
    }).from('.solutions__item', {

      opacity: 0,
      stagger: 0.3,
      duration: 1,
      onComplete: () => {
        solutionsAnimation2()
      },
    });
  }
}