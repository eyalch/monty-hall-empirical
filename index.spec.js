const { playWithoutSwitching, playWithSwitching } = require(".")

const iterations = 100000

test("not switching the door should result in an average of 1/3", () => {
  let winCount = 0

  for (let i = 0; i < iterations; i++) {
    if (playWithoutSwitching()) {
      winCount++
    }
  }

  expect(winCount / iterations).toBeCloseTo(1 / 3)
})

test("switching the door should result in an average of 2/3", () => {
  let winCount = 0

  for (let i = 0; i < iterations; i++) {
    if (playWithSwitching()) {
      winCount++
    }
  }

  expect(winCount / iterations).toBeCloseTo(2 / 3)
})
