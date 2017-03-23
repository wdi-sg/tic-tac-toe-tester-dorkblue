$(document).ready(function () {
  var grid = [null, null, null, null, null, null, null, null, null]
  var player = 1
  var $box = $('.grid > .box ')
  function playTurn (index) {
    if (grid[index] || isGameOver()) {
      console.log('input not allowed!')
      return false
    } else {
      grid[index] = player
      if (player === 1) {
        console.log('is player one!')
        console.log($(this))
        $(this).addClass('playerOne')
        player = 2
        isGameOver()
        return 1
      } else {
        console.log('is player two!')
        console.log($(this))
        $(this).addClass('playerTwo')
        player = 1
        isGameOver()
        return 2
      }
      // return true
    }
  }

  function isGameOver () {
    if (whoWon()) return true
    return false
  }

  function whoWon () {
    console.log(grid)
    if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return show(grid[0])
    if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return show(grid[3])
    if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return show(grid[6])
    if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return show(grid[0])
    if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return show(grid[1])
    if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return show(grid[2])
    if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return show(grid[0])
    if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return show(grid[2])
    if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
      grid[5] && grid[6] && grid[7] && grid[8]) draw()
    return 0
  }

  function show (winner) {
    alert('player ' + winner + ' won!')
  }

  function draw () {
    alert('Nobody won!')
  }

  function restart () {
    grid = [null, null, null, null, null, null, null, null, null]
    player = 1

    $box.each(function () {
      $(this).removeClass().addClass('box')
    })
  }

  function clickbox (box) {
    box.each(function () {
      $(this).on('click', function () {
        var $playBox = $(this).index()
          // console.log('clicked' + $(this).index())

        var play = playTurn($playBox)

        if (play === 1) {
          $(this).addClass('playerOne')
        } else if (play === 2) {
          $(this).addClass('playerTwo')
        }
      })
    })
  }
  var $playButton = $('#playButton')

  $playButton.on('click', restart)

  clickbox($box)
})
