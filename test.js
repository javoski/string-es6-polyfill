require("./string-es6-polyfill.js")
var test = require("tape")

test('includes', function(t){
  t.plan(4)
  t.equal('foobar'.includes('foo'), true)
  t.equal('foobar'.includes('fool'), false)
  t.equal('foobar'.includes(''), true)
  t.error('foobar'.includes(12))
})

test('starts with', function(t){
  t.plan(4)
  t.equal('foobar'.startsWith('foo'), true)
  t.equal('foobar'.startsWith('bar'), false)
  t.equal('foobar'.startsWith(''), true)
  t.error('foobar'.startsWith(12))
})

test('ends with', function(t){
  t.plan(4)
  t.equal('foobar'.endsWith('bar'), true)
  t.equal('foobar'.endsWith('foo'), false)
  t.equal('foobar'.endsWith(''), true)
  t.error('foobar'.endsWith(12))
})

test('repeat', function(t){
  t.plan(3)
  t.equal('x'.repeat(3), 'xxx')
  t.equal('foo'.repeat(4), 'foofoofoofoo')
  t.equal(''.repeat(2), '')
})

test('pad start', function(t){
  t.plan(3)
  t.equal('x'.padStart(5, 'abc'), 'abcax')
  t.equal('foobar'.padStart(4, '0'), 'foobar')
  t.equal('d'.padStart(10), '         d')
})

test('pad end', function(t){
  t.plan(3)
  t.equal('x'.padEnd(5, 'abc'), 'xabca')
  t.equal('foobar'.padEnd(4, '0'), 'foobar')
  t.equal('d'.padEnd(10), 'd         ')
})

