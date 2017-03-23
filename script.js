function list (names) {
  var finalStr = names.reduce(function (accu, val, index) {
    if (index === names.length - 1) {
      accu += ' & ' + val.textContent
    } else if (index === names.length - 2) {
      accu += val.textContent
    } else {
      accu += val.textContent + ', '
    }
    return accu
  }, '')
  return finalStr
}



function printAllNames() {
  var allNames = document.querySelectorAll('li')
  // convert to array
  allNames = Array.from(allNames)
  // merge names
  allNames = list (allNames)
  // output
  document.querySelector('h1').textContent = allNames
}


var button = document.querySelector('#mergebutton')
button.addEventListener('click', printAllNames)
