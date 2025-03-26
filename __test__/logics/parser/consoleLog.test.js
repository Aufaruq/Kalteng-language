const consoleLog = require('../../../lib/logics/parser/consoleLog')
const getJsFormat = require('../test-parser-helper')

describe('Test Console log', () => {
  it('Should parse string correctly', () => {
    const test1 = consoleLog(`tampaikan "Hello world"`)
    expect(test1.exp).toBe(`console.log("Hello world");`)
  })

  it('Should parse number correctly', () => {
    const test1 = consoleLog("tampaikan 123")
    expect(test1.exp).toBe(`console.log(123);`)
  })

  it('Should return null if not match', () => {
    const test1 = consoleLog("spil 123")
    const test2 = consoleLog("tampaikanl false")
    expect(test1).toBe(null)
    expect(test2).toBe(null)
  })

  it('Should return correctly flexing', () => {
    const jsFormat = getJsFormat(`
      amunnya foo itu "Hello world"
      tampaikan foo
    `)
    expect(jsFormat).not.toBeNull()
    expect(jsFormat).toContain(`let foo = "Hello world";`)
    expect(jsFormat).toContain(`console.log(foo);`)
  })
})