const { execCmd } = require("../../lib/utils/execCmd")
const flexing = require("../../lib/utils/flexing")
const e2eTest = require("./e2e-test")

describe('End To End Test example 1', () => {
  it('Should return as expected value', done => {
    e2eTest({
      target: "example/example1.jaksel",
      contain: "umur pian 21\nElu tua\namun ulunumurnya 31\nulunlebih tua\nudaham ah\n"
    }, done)
  })
})