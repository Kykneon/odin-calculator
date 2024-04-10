const opperand1 = ''
const opperator = ''
const opperand2 = ''
const displayBox = document.querySelector('.display')
let currentDisplayValue = displayBox.innerHTML
const num1 = document.querySelector('.one')
const num2 = document.querySelector('.two')
const num3 = document.querySelector('.three')
const num4 = document.querySelector('.four')
const num5 = document.querySelector('.five')
const num6 = document.querySelector('.six')
const num7 = document.querySelector('.seven')
const num8 = document.querySelector('.eight')
const num9 = document.querySelector('.nine')

num1.addEventListener('click', () => {
    displayBox.textContent += '1' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

num2.addEventListener('click', () => {
    displayBox.textContent += '2' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

num3.addEventListener('click', () => {
    displayBox.textContent += '3' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

num4.addEventListener('click', () => {
    displayBox.textContent += '4' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

num5.addEventListener('click', () => {
    displayBox.textContent += '5' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

num6.addEventListener('click', () => {
    displayBox.textContent += '6' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

num7.addEventListener('click', () => {
    displayBox.textContent += '7' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

num8.addEventListener('click', () => {
    displayBox.textContent += '8' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

num9.addEventListener('click', () => {
    displayBox.textContent += '9' 
    currentDisplayValue = displayBox.innerHTML
    console.log(currentDisplayValue)
})

function add(a, b) {
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(opperation, num1, num2) {
    currentValue = opperation(num1, num2);
}

function updateDisplay(value) {
    displayBox.textContent = value
}

