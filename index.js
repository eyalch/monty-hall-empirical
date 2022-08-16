const DOOR_COUNT = 3

function setupGame() {
  const doorWithCarIndex = Math.floor(Math.random() * DOOR_COUNT)
  const playerChoice = Math.floor(Math.random() * DOOR_COUNT)

  const doors = Array.from(
    { length: DOOR_COUNT },
    (_, i) => i === doorWithCarIndex
  )

  return { doorWithCarIndex, doors, playerChoice }
}

function playWithoutSwitching() {
  const { doorWithCarIndex, playerChoice } = setupGame()

  return playerChoice === doorWithCarIndex
}

function playWithSwitching() {
  const { doors, playerChoice } = setupGame()

  const emptyDoorIndex = doors.findIndex(
    (value, i) => value === false && i !== playerChoice
  )

  return doors.find((_, i) => i !== emptyDoorIndex && i !== playerChoice)
}

module.exports = { playWithoutSwitching, playWithSwitching }
