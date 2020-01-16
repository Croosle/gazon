import {tns} from 'tiny-slider/src/tiny-slider';

const info_slider = tns({
  container: '#info-slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  gutter: 30,
  autoplayButtonOutput: false,
  nav: false,
  touch: true,
  controlsText: ['', ''],
  controls: false,
  responsive: {
    767: {
      controls: true
    }
  }
});

const price_slider = tns({
  container: '#price-slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  gutter: 30,
  autoplayButtonOutput: false,
  nav: true,
  navPosition: 'bottom',
  controls: false,
  touch: true,
  controlsText: ['', ''],
  responsive: {
    767: {
      controls: true
    }
  }
});

const modalTriggers = document.querySelectorAll('.popup-trigger')
const modalCloseTrigger = document.querySelector('.popup-modal__close')
const bodyBlackout = document.querySelector('.body-blackout')

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const { popupTrigger } = trigger.dataset
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)
    popupModal.classList.add('is--visible')
    bodyBlackout.classList.add('is-blacked-out')
    document.body.style.overflow = "hidden"

    document.querySelector('.is-blacked-out').addEventListener('click', () => {
      popupModal.classList.remove('is--visible')
      bodyBlackout.classList.remove('is-blacked-out')
      document.body.style.overflow = "auto"
    })

    popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
       popupModal.classList.remove('is--visible')
       bodyBlackout.classList.remove('is-blacked-out')
       document.body.style.overflow = "auto"
    })
  })
})

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}
