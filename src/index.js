module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('')

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (strArr[i] == bracketsConfig[j][1] && strArr[i-1] == bracketsConfig[j][0]){
        strArr.splice(i - 1, 2)
        i = 0
        break
      }
    }
  }
  
  return strArr < 1 ? true : false
}
