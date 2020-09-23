const hello = require( "./hello");
describe('My hello', () => {
    test('works', () => {
      expect(hello.hello('World')).toEqual('Hello World')
    })
  })