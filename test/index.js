var CssTuning = require('../')
var fs = require('fs')
var postcss = require('postcss')
var test = require('tape')

function input (name) {
  return fs.readFileSync('test/fixtures/' + name + '.css', 'utf-8')
}

function output (name) {
  return fs.readFileSync('test/fixtures/' + name + '.out.css', 'utf-8')
}

function compare (name, description, options) {
  description = description || {}
  options = options || {}

  var cssTuning = new CssTuning(input(name))
  return test(description, function (t) {
    t.same(cssTuning.process(input(name), options), output(name))
    t.end()
  })
}

compare('translatez')
