prompt('How old are you?')
var answer = prompt('How old are you?')
var age = Number(answer)
var isAdult = age >= 18
if (isAdult) {
    console.log('User is an adult:'+ isAdult)
}
else {
      console.log('User is an adult:'+ false)
}
var isTen = true
if (age === 10) {
    console.log('User is exactly 10 years old:'+ isTen)
}
else {
      console.log('User is exactly 10 years old:'+ false)
}
var isNotCentenarian = true
if (age < 100) {
    console.log('User is NOT a centenarian:'+ isNotCentenarian)
}
else {
      console.log('User is NOT a centenarian:'+ false)
}
