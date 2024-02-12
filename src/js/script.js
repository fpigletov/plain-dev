'use strict';

import { header } from './components/header';
import { hero } from './components/hero';
import { solutions } from './components/solutions';
import { automation } from './components/automation';
import { benefits } from './components/benefits';
import { events } from './components/events';
import { callback } from './components/callback';
import { footer } from './components/footer';
import { modal } from './components/modal';
import { mouse } from './components/mouse';
import barba from '@barba/core';

window.addEventListener('DOMContentLoaded', () => {
  //Titles
  const heroTitle = document.querySelector('.hero__title');
  const solutionsTitle = document.querySelector('.solutions__title');
  const automationTitle = document.querySelector('.automation__title');
  const benefitsTitle = document.querySelector('.benefits__title');
  const eventsTitle = document.querySelector('.events__title');

  function splitText(el) {
    el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
      return `<span class="word">` +
        m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>") +
        `</span>`;
    });
    return el;
  }

  if (heroTitle) {
    splitText(heroTitle);
  }

  if (solutionsTitle) {
    splitText(solutionsTitle);
  }

  if (automationTitle) {
    splitText(automationTitle);
  }

  if (benefitsTitle) {
    splitText(benefitsTitle);
  }

  if (eventsTitle) {
    splitText(eventsTitle);
  }

  //Header
  header();

  //Hero
  hero();

  //Solutions
  solutions();

  //Automation
  automation();

  //Benefits
  benefits();

  //Events
  events();

  //Callback
  callback();

  //Footer
  footer();

  //Modal
  modal();

  //Mouse
  mouse();

});


