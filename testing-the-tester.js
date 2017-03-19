var gameBoard = []
var turn = 0
var gameStatus = null
var WinningCom = function (gameBoard) {
  this.topRow = gameBoard[0] + gameBoard[1] + gameBoard[2]
  this.midRow = gameBoard[3] + gameBoard[4] + gameBoard[5]
  this.botRow = gameBoard[6] + gameBoard[7] + gameBoard[8]
  this.leftCol = gameBoard[0] + gameBoard[3] + gameBoard[6]
  this.midCol = gameBoard[1] + gameBoard[4] + gameBoard[7]
  this.rightCol = gameBoard[2] + gameBoard[5] + gameBoard[8]
  this.diagL2R = gameBoard[0] + gameBoard[4] + gameBoard[8]
  this.diagR2L = gameBoard[2] + gameBoard[4] + gameBoard[6]
}

function restart () {
  gameBoard = [ null, null, null,
    null, null, null,
    null, null, null]
  turn = 0
  gameStatus = null
}

function isGameOver () {
  if (gameStatus === null || gameStatus === 'ongoing') {
    return false
  } else if (gameStatus === 'game ended') return true
}

function whoWon () {
  if (gameStatus === null) {
    return 0
  }
  var checkWin = new WinningCom(gameBoard)
  // console.log(checkWin)
  // var winningCom = {
  //   topRow: gameBoard[0] + gameBoard[1] + gameBoard[2],
  //   midRow: gameBoard[3] + gameBoard[4] + gameBoard[5],
  //   botRow: gameBoard[6] + gameBoard[7] + gameBoard[8],
  //   leftCol: gameBoard[0] + gameBoard[3] + gameBoard[6],
  //   midCol: gameBoard[1] + gameBoard[4] + gameBoard[7],
  //   rightCol: gameBoard[2] + gameBoard[5] + gameBoard[8],
  //   diagL2R: gameBoard[0] + gameBoard[4] + gameBoard[8],
  //   diagR2L: gameBoard[2] + gameBoard[4] + gameBoard[6]
  // }
  var winner = null
  // console.log(gameBoard)

  for (var check in checkWin) {
    if (checkWin[check] === 3) {
      gameStatus = 'game ended'
      return 1
    } else if (checkWin[check] === -3) {
      gameStatus = 'game ended'
      return 2
    }
  }
  return 3
}

function playTurn (move) {
  if (isGameOver() === false) {
    if (turn % 2 === 0) {
      if (gameBoard[move] !== null) return false
      turn++
      gameBoard[move] = 1
      return gameStatus = 'ongoing', true
    } else {
      if (gameBoard[move] !== null) return false
      turn++
      gameBoard[move] = -1
      return gameStatus = 'ongoing', true
    }
  }
  return false
}
