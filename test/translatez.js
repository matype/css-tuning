var translatez = require('../lib/translatez')
var fs = require('fs')
var postcss = require('postcss')
var test = require('tape')

var css = fs.readFileSync('test/fixtures/translatez.css', 'utf-8')

test('translateZ', function (t) {
  var actual = postcss().use(translatez()).process(css).css
  var expected = fs.readFileSync('test/fixtures/translatez.out.css', 'utf-8')
  t.same(actual, expected)
  t.end()
})
