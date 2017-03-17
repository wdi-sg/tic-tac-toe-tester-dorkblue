var array = []
var turn = 0

function restart () {
  array = [ null, null, null,
    null, null, null,
    null, null, null]
  return whoWon()
}

function isGameOver () {
  return false
}
function whoWon () {
  if (turn === 0) return 0
  if (turn > 8) {
    turn = 0
    return 3
  } else if (turn > 4 && (turn % 2 !== 0)) {
    turn = 0
    return 1
  } else if (turn > 5 && (turn % 2 === 0)) {
    turn = 0
    return 2
  }
}

// this works
function playTurn (move) {
  console.log(turn)
  if (turn % 2 !== 0) {
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
