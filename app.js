let num = 421 // num
let firstName = 'Vladilen' //string
const isProgrammer = true //boolean

/*объявляем необходимуе переменные и константы */

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const substrBtn = document.getElementById('minus')
const addBtn = document.getElementById('plus')
let action = ''
let sum = 0

substrBtn.onclick = function(){
    action = '-'
}

addBtn.onclick = function(){
    action = '+'
}

function printResult(result) {
    if (result < 0){
        resultElement.style.color = 'red'
        } else {
            resultElement.style.color = 'green'
        }
    resultElement.textContent = result
    console.log(result)     
}

function computeNumsWithAction(input1, input2, actionSymbol){
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    if (actionSymbol == '+'){
        return num1 + num2
    } 
    
    if (actionSymbol == '-'){
        return num1 - num2
    }
}


submitBtn.onclick = function() {
    
    const result = computeNumsWithAction(input1, input2, action)
    printResult(result)
}

let n1 = 42
let n2 = '43'
console.log(n1 == n2)