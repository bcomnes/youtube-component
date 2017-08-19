var YoutubeComponent = require('../')

var video1 = new YoutubeComponent()
var video2 = new YoutubeComponent()

document.body.appendChild(video1.render('https://www.youtube.com/watch?v=jnGtXnpZYDY&t=910s'))
document.body.appendChild(video2.render('https://www.youtube.com/watch?v=iK6t9mJCykw'))
