export function automation() {
  const automationSection = document.querySelector('.automation');

  if (automationSection) {
    let automationAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    automationAnimation.from('.automation__title .letter', {
      stagger: 0.1,
      duration: 0.2,
      opacity: 0,
    }).from('.automation__item', {
      stagger: 0.2,
      opacity: 0,
      scale: 0,
      duration: 0.7,
    }).from('.automation__animation', {
      duration: 1,
      opacity: 0
    });

    let tl1 = gsap.timeline({
      delay: 5,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    let tl2 = gsap.timeline({
      repeat: -1,
      delay: 13,
      repeatDelay: 1,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    let tl3 = gsap.timeline({
      repeat: -1,
      delay: 19,
      repeatDelay: 1,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    let tl4 = gsap.timeline({
      delay: 8,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    let tl5 = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    let tl6 = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    let tl7 = gsap.timeline({
      repeat: -1,
      delay: 2,
      repeatDelay: 1,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    let tl8 = gsap.timeline({
      repeat: -1,
      delay: 2,
      repeatDelay: 1,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    let tl9 = gsap.timeline({
      repeat: -1,
      delay: 2,
      repeatDelay: 1,
      scrollTrigger: {
        trigger: '.main__automation',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    });

    tl1.to('#open-gate-5', { y: '-18px', ease: "sine.out", duration: 3 })
      .to('#open-gate-5', { opacity: 0 }, '-=1')
      .to('#open-gate-4', { y: '-18px', ease: "sine.out", duration: 3 }, '-=1.25')
      .to('#open-gate-4', { opacity: 0 }, '-=1')
      .to('#open-gate-3', { y: '-18px', ease: "sine.out", duration: 3 }, '-=1.25')
      .to('#open-gate-3', { opacity: 0 }, '-=1')
      .to('#open-gate-2', { y: '-15px', ease: "sine.out", duration: 3 }, '-=1.25')
      .to('#open-gate-2', { opacity: 0 }, '-=1')
      .to('#lane-lamp', { fill: '#24d824' }, '-=1');

    tl2.to('#box-3', { opacity: 1 })
      .from('#box-3', { x: '57px', y: '-32px', ease: "none", duration: 6 }, '-=0.5')
      .to('#box-1', { opacity: 1 }, '-=2.3')
      .fromTo('#box-1', { x: '35px', y: '-19px', ease: "none", duration: 6 }, { x: '-26px', y: '14px', ease: "none", duration: 5 }, '-=2.3')
      .to('#box-3', { opacity: 0 }, '-=2.7')
      .to('#box-2', { opacity: 1 }, '-=2.7')
      .fromTo('#box-2', { x: '10px', y: '-6px', ease: "none", duration: 6 }, { x: '-46px', y: '24px', ease: "none", duration: 5 }, '-=2.7')
      .to('#box-1', { opacity: 0 }, '-=2.3')
      .to('#box-2', { opacity: 0 });

    tl3.to('#box-4', { opacity: 1 })
      .to('#box-5', { opacity: 1 }, '+=2.3')
      .to('#box-6', { opacity: 1 }, '+=1.8')
      .to('#box-7', { opacity: 1 }, '+=7')
      .to('#box-8', { opacity: 1 }, '+=2.3')
      .to('#box-9', { opacity: 1 }, '+=1.8')
      .to('#box-10', { opacity: 1 }, '+=7')
      .to('#box-11', { opacity: 1 }, '+=2.3')
      .to('#box-12', { opacity: 1 }, '+=1.8')
      .to('#box-13', { opacity: 1 }, '+=7')
      .to('#box-14', { opacity: 1 }, '+=2.3')
      .to('#box-15', { opacity: 1 }, '+=1.8')
      .to('#box-16', { opacity: 1 }, '+=7')
      .to('#box-17', { opacity: 1 }, '+=2.3')
      .to('#box-18', { opacity: 1 }, '+=1.8')
      .to('#box-19', { opacity: 1 }, '+=7')
      .to('#box-20', { opacity: 1 }, '+=2.3')
      .to('#box-21', { opacity: 1 }, '+=1.8')
      .to('#box-22', { opacity: 1 }, '+=7')
      .to('#box-23', { opacity: 1 }, '+=2.3')
      .to('#box-24', { opacity: 1 }, '+=1.8')
      .to('#box-25', { opacity: 1 }, '+=7')
      .to('#box-26', { opacity: 1 }, '+=2.3')
      .to('#box-27', { opacity: 1 }, '+=1.8')
      .to('#box-28', { opacity: 1 }, '+=7')
      .to('#box-29', { opacity: 1 }, '+=2.3')
      .to('#box-30', { opacity: 1 }, '+=1.8')
      .to('#box-31', { opacity: 1 }, '+=7')
      .to('#box-32', { opacity: 1 }, '+=2.3')
      .to('#box-33', { opacity: 1 }, '+=1.8')
      .to('#box-34', { opacity: 1 }, '+=7')
      .to('#box-35', { opacity: 1 }, '+=2.3')
      .to('#box-36', { opacity: 1 }, '+=1.8')
      .to('#box-37', { opacity: 1 }, '+=7')
      .to('#box-38', { opacity: 1 }, '+=2.3')
      .to('#box-39', { opacity: 1 }, '+=1.8')
      .to('#box-40', { opacity: 1 }, '+=7')
      .to('#box-41', { opacity: 1 }, '+=2.3')
      .to('#box-42', { opacity: 1 }, '+=1.8')
      .to('#box-43', { opacity: 1 }, '+=7')
      .to('#box-44', { opacity: 1 }, '+=2.3');

    tl4.to('#worker-1', { opacity: 1 })
      .to('#worker-shadow-1', { opacity: 1 }, '-=0.5');

    tl5.fromTo('#worker-1', { x: '10px', y: '15px', ease: "sine.out", duration: 4 }, { x: '-7px', y: '8px', ease: "sine.out", duration: 4 })
      .to('#worker-1', { x: '10px', y: '15px', ease: "sine.out", duration: 4 });

    tl6.fromTo('#worker-shadow-1', { x: '10px', y: '15px', ease: "sine.out", duration: 4 }, { x: '-7px', y: '8px', ease: "sine.out", duration: 4 })
      .to('#worker-shadow-1', { x: '10px', y: '15px', ease: "sine.out", duration: 4 })

    tl7.fromTo('#loader', { x: '-60px', y: '-70px', ease: "sine.out", duration: 6 }, { x: '45px', y: '0', ease: "sine.out", duration: 6 })
      .fromTo('#loader-box-1', { x: '-60px', y: '-70px', ease: "sine.out", duration: 6 }, { x: '45px', y: '0', ease: "sine.out", duration: 6 }, '-=6')
      .fromTo('#loader-box-2', { x: '-60px', y: '-70px', ease: "sine.out", duration: 6 }, { x: '45px', y: '0', ease: "sine.out", duration: 6 }, '-=6')
      .fromTo('#hand-loader', { x: '30px', y: '-15px', ease: "sine.out", duration: 6 }, { x: '-137px', y: '52px', ease: "sine.out", duration: 6 })
      .fromTo('#hand-loader-box', { x: '30px', y: '-15px', ease: "sine.out", duration: 6 }, { x: '-137px', y: '52px', ease: "sine.out", duration: 6 }, '-=6')
      .to('#loader-box-1', { opacity: 0 })
      .to('#loader-box-2', { opacity: 0 }, '+=1')
      .to('#hand-loader-box', { opacity: 0 })
      .to('#hand-loader', { x: '30px', y: '-15px', ease: "sine.out", duration: 5 })
      .to('#loader', { x: '-60px', y: '-70px', ease: "sine.out", duration: 5 }, '-=2')

    tl8.fromTo('#pallet-1', { x: '110px', y: '65px' }, { x: '110px', y: '65px' })
      .fromTo('#pallet-box-1', { x: '110px', y: '65px' }, { x: '110px', y: '65px' })
      .fromTo('#pallet-box-2', { x: '110px', y: '65px' }, { x: '110px', y: '65px' })

    tl9.to('#worker-hand-1', { x: '0.3px', y: '-0.5px', ease: "sine.out", duration: 0.5 })
      .to('#worker-head-1', { rotation: '5deg', ease: "sine.out", duration: 0.5 })
      .to('#worker-hand-2', { rotation: '5deg', ease: "sine.out", duration: 0.5 })
      .to('#worker-hand-3', { rotation: '15deg', ease: "sine.out", duration: 0.5 })
      .to('#worker-head-3', { rotation: '5deg', ease: "sine.out", duration: 0.5 })
      .to('#worker-head-2', { rotation: '-5deg', ease: "sine.out", duration: 0.5 })
  }
}