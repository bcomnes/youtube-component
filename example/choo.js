var html = require('choo/html')
var choo = require('choo')
var YoutubeComponent = require('../')

var video1 = new YoutubeComponent()
var video2 = new YoutubeComponent()
var video3 = new YoutubeComponent()
var video4 = new YoutubeComponent()

var app = choo()
app.route('/', mainView)
if (typeof window !== 'undefined') app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      <div id="app">
        <h1>Embed some vids</h1>
        <div>
          ${video1.render('https://www.youtube.com/watch?v=jnGtXnpZYDY&t=910s')}
        </div>
        <div>
          ${video2.render('https://www.youtube.com/watch?v=iK6t9mJCykw')}
        </div>
        <div>
          ${video3.render('https://vimeo.com/200671029')}
        </div>
        <div>
          ${video4.render('http://www.dailymotion.com/video/x2ipgus')}
        </div>
      </div>
    </body>`
}
