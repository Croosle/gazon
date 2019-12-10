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
