module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('')

  if (strArr.length % 2 == 1) {
    return false
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    let counter = 0
    let arrLength = strArr.length / 2

    while (counter < arrLength) {
      if (bracketsConfig[i][0] == bracketsConfig[i][1]) {

        let index1 = strArr.indexOf(bracketsConfig[i][0])
        strArr.splice(index1, 1)

        let index2 = strArr.indexOf(bracketsConfig[i][1])
        if (index2 + 1 > index1) {
          strArr.splice(index2, 1)
        } else {
          return false
        }

        if (index1 == -1 && index2 == -1) {
          counter += 999
        }

      } else {
        let index1 = strArr.indexOf(bracketsConfig[i][0])
        let index2 = strArr.indexOf(bracketsConfig[i][1])

        if (index2 > index1) {
          strArr.splice(index1, 1)
          strArr.splice(index2 - 1, 1)
        } else if (index1 < index2) {
          return false
        }
      }
      counter++
    }
  }

  if (strArr.length < 1) {
    return true
  } else {
    return false
  }
}