
let num1 = '';
let operatorSelected = false;
let operator = '';
let num2 = '';
let functionCompleted = false;
const numbers = document.querySelectorAll('.number, .operator')
const display = document.querySelector('.disp')
const negator = document.querySelector('.negative')
const percentor = document.querySelector('.percent')
const decimal = document.querySelector('.decimal')
const equals = document.querySelector('.equals')

display.textContent = 0;



const clear = document.querySelector('.clear')

clear.addEventListener('click',clearCalc)
negator.addEventListener('click',negative)
decimal.addEventListener('decimal',decimalAdd)
equals.addEventListener('click',() => {
    calc(operator,num1,num2)
    display.textContent = num1
})

percentor.addEventListener('click',percentage)

const logger = function(e) {

    if (operatorSelected == false) {
        if (e.target.classList.contains('number') && functionCompleted === false)
        {
            num1 += e.target.textContent

        }
        else if (e.target.classList.contains('operator'))
        {
            operator = e.target.textContent
            operatorSelected = true;
            e.target.classList.toggle('selected')
        } else {
            num1 = ''
            num1 += e.target.textContent
            functionCompleted = false
        }
    } else if (operatorSelected == true) {
        if (e.target.classList.contains('number'))
        {
            num2 += e.target.textContent
        }
        else if (e.target.classList.contains('operator'))
        {
            const remove = document.querySelector('.selected')
            remove.classList.toggle('selected')
            calc(operator,num1,num2)
            operator = e.target.textContent
            operatorSelected = true
            e.target.classList.toggle('selected')
        } else
        {
           calc(operator,num1,num2)

        }




}
if (num2 === '' && num1 === '')
{
    display.textContent = 0
} else if (num2 === '')
{
    display.textContent = num1
} else
{
    display.textContent = num2
}

}




function calc(operation,a,b) {

    if (b === '')
    {
        return
    }

    if (operation === 'X') {
        num1 = multiply(a,b)
        num2 = ''
        operator = ''
        operatorSelected = false
    } else if (operation === '/')
    {
        num1 = divide(a,b)
        num2 = ''
        operator = ''
        operatorSelected = false
    } else if (operation === '+')
    {
        num1 = sum(a,b)
        num2 = ''
        operator = ''
        operatorSelected = false

    } else if (operation === '-')
    {
        num1 = subtract(a,b)
        num2 = ''
        operator = ''
        operatorSelected = false
    }
    const remove = document.querySelector('.selected')
    remove.classList.toggle('selected')
    functionCompleted = true;
}



const operatorSelection = function(e)
{
    if (e.target.classList.contains('operator'))
    {
        operatorSelected = true
    }
}

function clearCalc() {
    num1 = '';
    operatorSelected = false;
    operator = '';
    num2 = '';
    display.textContent = 0


}


function percentage() {
    if (operatorSelected)
    {
        num2 = num2 /= -100
        display.textContent = num2
    } else {
        num1 /= 100
        display.textContent = num1
    }
}

function negative() {
    if (operatorSelected)
    {
        num2 = num2 *= -1
        display.textContent = num2
    } else {
        num1 *= -1
        display.textContent = num1
    }


}

function decimalAdd() {
    if (operatorSelected) {
    num2 += '.'
    display.textContent = num2
     } else
     {
        num1 += '.'
        display.textContent = num1
     }
}

numbers.forEach( num => num.addEventListener('click', logger))








// ========= MATH FUNCTIONS ==========

function sum(num1,num2) {
    return Number(num1) + Number(num2)
}

function multiply(num1,num2) {
    return Number(num1)*Number(num2)
}

function subtract(num1,num2) {
    return Number(num1) - Number(num2);
}

function divide(num1,num2) {
    return Number(num1) / Number(num2)
}
