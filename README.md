# Polyfill
Javascript polyfill to overwrite Event Listeners and using latest options on touch events. 

On new browsers when you define an event listener on touch events like:
 * touchstart
 * touchmove
 * touchend

## Passive Event Listeners

Passive event listeners are a new feature in the DOM spec that enable developers to opt-in to better scroll performance by eliminating the need for scrolling to block on touch and wheel event listeners. Developers can annotate touch and wheel listeners with {passive: true} to indicate that they will never invoke preventDefault. This feature shipped in Chrome 51, Firefox 49 and landed in WebKit. [For full official explanation read more here](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md).




