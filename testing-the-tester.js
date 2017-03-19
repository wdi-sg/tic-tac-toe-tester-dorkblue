var array = []
var turn = 0
var status = null

function restart () {
  array = [ null, null, null,
    null, null, null,
    null, null, null]
  turn = 0
}

function isGameOver () {
  if (whoWon() > 0) {
    return true
  }
  return false
}

function whoWon () {
  console.log(array)
  if (turn === 0) return 0
  if (turn > 8) {
    return 3
  } else if (turn > 4 && (turn % 2 !== 0)) {
    return 1
  } else if (turn > 5 && (turn % 2 === 0)) {
    return 2
  } else {

  }
}

// this works
function playTurn (move) {
  if (isGameOver() === false) {
    if (turn % 2 === 0) {
      if (array[move] !== null) return false
      turn++
      array[move] = 1
      return true
    } else {
      if (array[move] !== null) return false
      turn++
      array[move] = 2
      return true
    }
  }
}
