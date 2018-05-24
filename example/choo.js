var html = require('nanohtml')
var choo = require('choo')
var NCCache = require('nanocomponent-cache')
var YoutubeComponent = require('../')

var c = new NCCache()

c.register(YoutubeComponent, {
  args: [
    {
      attr: { width: 480, height: 270 }
    }
  ]
})

var app = choo()
app.route('/', mainView)
if (typeof window !== 'undefined') app.mount('#app')

function mainView (state, emit) {
  return html`
      <div id="app">
        <main class="markdown-body">
          <h1><a href="https://github.com/bcomnes/youtube-component">Embed some vids</a></h1>
          ${c.get('video1').render('https://www.youtube.com/watch?v=jnGtXnpZYDY&t=910s')}
          ${c.get('video2').render('https://www.youtube.com/watch?v=bAojxWZRVKk')}
          ${c.get('video3').render('https://vimeo.com/200671029')}
          ${c.get('video4').render('http://www.dailymotion.com/video/x2ipgus')}
        </main>
      </div>`
}
