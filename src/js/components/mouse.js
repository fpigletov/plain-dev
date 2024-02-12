export function mouse() {
  //Mouse Animation
  const mouse = document.querySelector('.mouse');
  const mouseInner = document.querySelector('.mouse__inner');
  const hoverElements = document.querySelectorAll('a, button');

  if (window.innerWidth >= 768) {
    gsap.set(mouse, {
      xPercent: -50,
      yPercent: -50
    });

    window.addEventListener('mousemove', e => {
      gsap.set(mouse, {
        opacity: 1,
        x: e.clientX,
        y: e.clientY
      });
    });

    hoverElements.forEach((el) => {
      el.addEventListener('mouseover', e => {

        gsap.set(mouse, {
          mixBlendMode: 'difference'
        });

        gsap.to(mouse, {
          duration: 0.5,
          ease: 'power1',
          width: '60px',
          height: '60px',
        });

        gsap.to(mouseInner, {
          duration: 0.5,
          width: '60px',
          height: '60px',
        });
      });

      el.addEventListener('mouseout', e => {

        gsap.set(mouse, {
          mixBlendMode: 'normal'
        });

        gsap.to(mouse, {
          duration: 0.5,
          ease: 'power1',
          width: '40px',
          height: '40px',
        });

        gsap.to(mouseInner, {
          duration: 0.5,
          width: '10px',
          height: '10px',
        });
      });
    });
  }
}