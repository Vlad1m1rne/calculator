
let a = ''
let b = ''
sign = ''
let finish = false

let screen = document.querySelector('.screen1')
let z = document.querySelector('.znak1')
let numbers = ['0','1','2','3','4','5','6','7','8','9','.']
let mat = ['+','-','x','/']
let znakA = 1
let znakB = 1

document.querySelector('.buttons').addEventListener('click',function(event){
if(!event.target.classList.contains('b'))return
if(event.target.classList.contains('ac')){
  screen.textContent = 0
  a = ''
  b = ''
  sign = ''
  znakA = 1
  znakB = 1
  z.textContent = ''
  finish = false
   console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
}

let key = event.target.textContent


if(numbers.includes(key) || event.target.matches('.pm')){
  
  //вводим число а

 if(a === '' && b === '' && sign === '') {
  if(event.target.matches('.pm')){
    znakA *= -1
    console.log(znakA)
    if(znakA === 1){
      z.textContent = ''
    }
    if(znakA === -1){
      z.textContent = '-'
      a += '-'
      console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
       }
     }
   }

  if(b === '' && sign === ''){
   if(numbers.includes(key)){ 
    a += key
    screen.textContent = a
    z.textContent = ''
    console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
  }
}
  //вводим число b

  else if(a != '' && b != '' && finish){
     b = key
    finish = false
  screen.textContent = b
      console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
  }
else {
  if(event.target.matches('.pm')){
    znakB *= -1
    console.log(znakB)
    if(znakB === 1){
      z.textContent = ''
    }
    if(znakB === -1){
      z.textContent = '-'
      b += '-'
      console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
       }
     }
if(numbers.includes(key)){
  b += key
screen.textContent = b
z.textContent = ''
  console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
     }
}

}
//вводим знак операции

if(mat.includes(key)){
  sign = key
  screen.textContent = key
  z.textContent = ''
  console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
  return
}
//нажато равно

if(key === '=')
{
  if(b === '') {
    b = a
    console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
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
   console.log(`a: ${a}, sign: ${sign}, b: ${b}, znakA: ${znakA}, znakB: ${znakB}`)
   return
}
  else a = (a) / (b)
  break
}
finish = true
screen.textContent = a
z.textContent = ''
}
}
)

