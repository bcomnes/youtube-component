# youtube-component Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 1.1.2
* Update bel to nanohtml.
* Catch the embed library. It might crash under certain conditions.
* Upstream a global var fix to embed-video that is causing crashes when bundlers add use-strict. https://github.com/alanshaw/embed-video/pull/15

## 1.1.1
* Use new raw method from bel.
* Add browser transforms for nanoassert and yo-yoify.

## 1.1.0
* **Added**: Use [`nanoassert`](https://github.com/emilbayes/nanoassert) in the browser.

## 1.0.1 - 2017-08-19
* Wrap iframe in div.  iframes are weird.

## 1.0.0 - 2017-08-19
* Initial release.  Smash that 🌟 button!
