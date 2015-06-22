var fs = require('fs')
var postcss = require('postcss')

module.exports = function (options) {
  options = options || {}

  return function (root) {
    root.eachDecl(function (decl) {
      if (decl.prop === 'position' && decl.value === 'fixed') {
        decl.parent.append({
          prop: 'transform',
          value: 'translateZ(0)'
        })
      }
    })
  }
}
