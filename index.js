var translatez = require('./lib/translatez')
var postcss = require('postcss')

module.exports = CssTuning

function CssTuning (css, options) {
  if (!this instanceof CssTuning) {
    return new CssTuning(css, options)
  }

  options = options || {}

  this.css = css
}

CssTuning.prototype.process = function () {
  var output = postcss()
    .use(translatez())
    .process(this.css)
    .css

  return output
}
