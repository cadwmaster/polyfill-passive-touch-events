(function () {
	let supportsPassive = false;
	try {
		const opts = Object.defineProperty({}, 'passive', {
			get() { supportsPassive = true; },
		});
		const noop = () => {};
		window.addEventListener('testPassiveEventSupport', noop, opts);
		window.removeEventListener('testPassiveEventSupport', noop, options);
	} catch (e) {}

	if (supportsPassive) {
		let f = EventTarget.prototype.addEventListener;
		EventTarget.prototype.addEventListener = function (type, fn, capture) {
			this.f = f;
			capture = capture || false;
			if (type && type.search(/^touch/) > -1 && !capture.passive) {
				this.f(type, fn, {
					capture: capture,
					passive: true
				});
			} else {
				this.f(type, fn, capture);
			}
		}
	}
}());

