/**
 * Create and subscribe a one-off MutationObserver and resolve a Promise once it matches.
 *
 * @param {Element} target The element to observe.
 * @param {MutationObserverInit} options (Optional). The configuration to pass to MutationObserver.observe(). It is recommended to specify this, but if it is omitted, all encompassing settings will be used to detect any changes the subtree in terms of childList, attribute, characterData. This is simple and easy, but likely nonperformant.
 * @returns {Promise} A promise that resolves to a list of `MutationRecord` once the observer observes something. When the Promise resolves, the subscription is automatically terminated.
 */
const whenElementChangedAsync = async (target, options) => new Promise((resolve) => {
  new MutationObserver((mutations, observer) => {
    observer.disconnect();
    resolve(mutations);
  }).observe(target, options || {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
  });
});
