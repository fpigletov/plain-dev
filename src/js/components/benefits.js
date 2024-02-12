export function benefits() {
  const benefits = document.querySelector('.benefits');

  if (benefits) {

    //Animation
    let benefitsAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.main__benefits',
        start: 'top 50%',
        end: 'bottom bottom',
      }
    })

    benefitsAnimation.from('.benefits__title .letter', {
      stagger: 0.1,
      duration: 0.2,
      opacity: 0,
    })
      .from('.actions-benefits__pagination', { opacity: 0, y: '50%', duration: 0.7 })
      .from('.benefits__slider', { opacity: 0, duration: 0.7 })

    //Slider 
    let splide = new Splide('.splide', {
      rewind: true,
      type: 'fade',
      perPage: 1,
      speed: 2000,
      width: '100%',
      autoplay: true,
      arrows: false,
      drag: false,
      interval: 12000,
      pauseOnHover: true,
      pagination: 'mounted',
      paginationDirection: 'ttb',
      breakpoints: {
        480: {
          pagination: false,
          arrows: true,
        }
      },


    });

    //Progress Bar
    const progressBar = document.querySelector('.actions-benefits__bar');
    splide.on('mounted move', function () {
      let end = splide.Components.Controller.getEnd() + 1;
      let rate = Math.min((splide.index + 1) / end, 1);
      progressBar.style.height = String(100 * rate) + '%';
    });

    //Pagination
    splide.on('pagination:mounted', function (data) {
      // You can add your class to the UL element
      data.list.classList.add('splide__pagination--custom');
      // `items` contains all dot items
      data.items.forEach(function (item) {

        item.button.classList.add('actions-benefits__btn');

        if (item.page === 0) {
          item.button.innerHTML = '<span class="actions-benefits__btn-name">E-commerce</span><span class="actions-benefits__btn-descr">speed and quality of order processing</span>';
        } else if (item.page === 1) {
          item.button.innerHTML = '<span class="actions-benefits__btn-name">Production</span><span class="actions-benefits__btn-descr">from planning to product shipment</span>';
        } else if (item.page === 2) {
          item.button.innerHTML = '<span class="actions-benefits__btn-name">Warehouse</span><span class="actions-benefits__btn-descr">warehouse that helps to sell</span>';
        } else if (item.page === 3) {
          item.button.innerHTML = '<span class="actions-benefits__btn-name">Logistic</span><span class="actions-benefits__btn-descr">versatility and customization</span>';
        } else if (item.page === 4) {
          item.button.innerHTML = '<span class="actions-benefits__btn-name">Distribution</span><span class="actions-benefits__btn-descr">optimization as a competitive advantage</span>';
        }
      });
    });
    splide.mount();

    const customPagination = document.querySelector('.actions-benefits__pagination');
    const splidePagination = document.querySelector('.splide__pagination');

    customPagination.append(splidePagination);
  }
}