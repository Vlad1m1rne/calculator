
let a = ''
let b = ''
sign = ''
let finish = false

let screen = document.querySelector('.screen1')
let numbers = ['0','1','2','3','4','5','6','7','8','9','.']
let mat = ['+','-','x','/']

document.querySelector('.buttons').addEventListener('click',function(event){
if(!event.target.classList.contains('b'))return
if(event.target.classList.contains('ac')){screen.textContent = 0
  a = ''
  b = ''
  sign = ''
  finish = false
   console.log(`a: ${a}, sign: ${sign}, b: ${b}`)
}

let key = event.target.textContent

if(numbers.includes(key)) {
  //вводим число а
  if(b == '' && sign == ''){
    a += key
screen.textContent = a
   console.log(`a: ${a}, sign: ${sign}, b: ${b}`)
  }
  //вводим число b
  else if(a != '' && b != '' && finish){
    b = key
    finish = false
  screen.textContent = b
    console.log(`a: ${a}, sign: ${sign}, b: ${b}`)
  }
else {
  b += key
screen.textContent = b
  console.log(`a: ${a}, sign: ${sign}, b: ${b}`)
}

}
//вводим знак
if(mat.includes(key)){
  sign = key
  screen.textContent = key
  console.log(`a: ${a}, sign: ${sign}, b: ${b}`)
  return
}
//нажато равно
if(key == '=')
{
  if(b=='') {
    b=a
    console.log(`a: ${a}, sign: ${sign}, b: ${b}`)
  }
  switch(sign){
  case '+': a = +a + +b
  break
  case '-': a = a - b
  break
  case 'x': a = a * b
  break
  case '/':
if(b =='0'){
  screen.textContent = 'Error'
  a = ''
  b = ''
  sign = ''
  finish = false
   console.log(`a: ${a}, sign: ${sign}, b: ${b}`)
   return
}
  else a = a / b
  break
}
finish = true
screen.textContent = a
}

})

console.log(screen)
