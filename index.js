var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')
var raw = require('nanohtml/raw')
var assert = require('nanoassert')
var embedVideo = require('embed-video')
var URL = require('url').URL

class YoutubeComponent extends Nanocomponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      placeholder: true,
      class: ''
    }, opts)

    this.url = null
  }

  createElement (url) {
    assert(typeof url === 'string', 'YoutubeComponent: youtubeURL must be a string')
    this.url = url
    var embed
    try {
      embed = embedVideo(url, this.opts)
    } catch (e) {
      console.error(e)
    }
    if (embed) {
      return html`<div class='${this.opts.class}'>${raw(embed)}</div>`
    } else {
      const urlObj = new URL(url)
      return (
        this.opts.placeholder
          ? html`<div>Can't embed: ${urlObj.href}</div>`
          : html`<div></div>`)
    }
  }

  update (url) {
    return this.url !== url
  }
}

module.exports = YoutubeComponent
