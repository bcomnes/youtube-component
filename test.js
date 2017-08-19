var test = require('tape')
var window = require('global/window')
var YoutubeComponent = require('./')

function makeID () {
  return 'testid-' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

function createTestElement () {
  var testRoot = document.createElement('div')
  testRoot.id = makeID()
  document.body.appendChild(testRoot)
  return testRoot
}

function renderAndMount (testEl, video) {
  var el = video.render('https://www.youtube.com/watch?v=HEXWRTEbj1I')
  testEl.appendChild(el)
}

test('render a video', function (t) {
  var testRoot = createTestElement()
  var video = new YoutubeComponent()

  t.doesNotThrow(renderAndMount.bind(null, testRoot, video), 'Able to render a video')

  window.setTimeout(function () {
    t.true(video.element.src.includes('youtube.com/embed/HEXWRTEbj1I'), 'A video iframe is added')
    t.end()
  }, 1000)
})
