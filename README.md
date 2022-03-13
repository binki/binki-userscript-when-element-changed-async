## Usage

Include this in your userscript using [`@require`](https://wiki.greasespot.net/Metadata_Block#.40require). It is recommended to [use a permalink](https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files) instead of referring to `master`.
```js
// ==UserScript==
// @name example
// @version 1.0
// @require https://github.com/binki/binki-userscript-when-element-changed-async/raw/master/binki-userscript-when-element-changed-async.js
// ==UserScript==

(async () => {
  const soughtElement = await (async () => {
    while (true) {
      const e = document.querySelector('*[role=textbox][spellcheck=true][contenteditable=true].notranslate');
      if (e) return e;
      await whenElementChangedAsync(document.body);
    }
  })();
  console.log(`Found element`, soughtElement);
})();
```

## API

```js
whenElementChangedAsync(target, options);
```

Parameters:

* `target` is the `Element` passed directly to [`MutationObserver.observe()`](https://dom.spec.whatwg.org/#dom-mutationobserver-observe). It must be specified and represents the element to monitor for changes.
* `options` is the [`MutationObserverInit`](https://dom.spec.whatwg.org/#dictdef-mutationobserverinit) passed directly to [`MutationObserver.observe()`](https://dom.spec.whatwg.org/#dom-mutationobserver-observe). If unspecified, a default which specifies `childList`, `attributes`, `characterData` shall be used. However, this is nonperformant and should be avoided when possible.

Returns:

A `Promise` which resolves to an array of [`MutationRecord`](https://dom.spec.whatwg.org/#mutationrecord) once a mutation happens.
