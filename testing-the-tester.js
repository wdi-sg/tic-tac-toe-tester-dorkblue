var gameBoard = []
var turn = 0
// var winner = null

function restart () {
  gameBoard = [ null, null, null,
    null, null, null,
    null, null, null]
  whoWon()
}

function isGameOver () {
  return false
}

function whoWon () {
  var winner = null
  var winningCom = {
    topRow: gameBoard[0] + gameBoard[1] + gameBoard[2],
    midRow: gameBoard[3] + gameBoard[4] + gameBoard[5],
    botRow: gameBoard[6] + gameBoard[7] + gameBoard[8],
    leftCol: gameBoard[0] + gameBoard[3] + gameBoard[6],
    midCol: gameBoard[1] + gameBoard[4] + gameBoard[7],
    rightCol: gameBoard[2] + gameBoard[5] + gameBoard[8],
    diagL2R: gameBoard[0] + gameBoard[4] + gameBoard[8],
    diagR2L: gameBoard[2] + gameBoard[4] + gameBoard[6]
  }

  if (turn !== 0) {
    winner = 'player3'
    for (var test in winningCom) {
      if (winningCom[test] === 3) {
        winner = 'player1'
        break
      } else if (winningCom[test] === -3) {
        winner = 'player2'
        break
      }
    }
  }

  if (winner === 'player1') {
    turn = 0
    return 1
  } else if (winner === 'player2') {
    turn = 0
    return 2
  } else if (winner === 'player3') {
    turn = 0
    return 3
  } else {
    return 0
  }
}

function playTurn (move) {
  if (turn % 2 === 0) {
    if (gameBoard[move] !== null) return false
    turn++
    gameBoard[move] = 1
    return true
  } else {
    if (gameBoard[move] !== null) return false
    turn++
    gameBoard[move] = -1
    return true
  }
}
