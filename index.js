var Nanocomponent = require('nanocomponent')
var html = require('bel')
var assert = require('assert')
var embedVideo = require('embed-video')
var parse = require('url').parse

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
    assert.equal(typeof url, 'string', 'YoutubeComponent: youtubeURL must be a string')
    this.url = url
    var embed = embedVideo(url, this.opts)
    var el
    if (embed) {
      if (typeof window !== 'undefined') {
        el = html`<div class='${this.opts.class}'></div>`
        el.innerHTML = embed
        return el
      } else {
        return html`<div class='${this.opts.class}'>${embed}</div>`
      }
    } else {
      return (
              this.opts.placeholder
                ? html`<div>Can't embed: ${parse(url).href}</div>`
                : html`<div></div>`)
    }
  }

  update (url) {
    return this.url !== url
  }
}

module.exports = YoutubeComponent
