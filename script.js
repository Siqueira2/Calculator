const display = document.querySelector("#result-display")
const previousOperation = document.querySelector("#previous-display")
const keys = document.querySelector("#pad")
let firstnum,
    lastnum,
    operator = false,
    op = ""

keys.addEventListener("click", (e)=>{

    const key = e.target.innerText
    
    if(Number(key) >= 0 || key === "."){
        insertNumber(key)
    }

    if(key === "*" || key === "/" || key === "+" || key === "-"){
        display.textContent = 0
        op = key
        operator = true
    }

    if(key === "="){
        calculate()
    }
    
    if(key === "CE"){
        clear()
    }
})

function insertNumber(value){
    if(display.textContent === "0"){
        display.innerHTML = value
    } else {
        display.innerHTML += value
    }
    if(operator){
        lastnum = Number(display.textContent)
    } else {
        firstnum = Number(display.textContent)
    }
    console.log(`firstnum: ${firstnum}`)
    console.log(`lastnum: ${lastnum}`)
}

function clear(){
    firstnum = 0
    lastnum = 0
    operator = false
    display.textContent = "0"
    console.log(`firstnum: ${firstnum}`)
    console.log(`lastnum: ${lastnum}`)
}

function calculate(){
    display.textContent = 0
    let result
    switch (op){
        case "*":
            result = firstnum * lastnum //Multiply
            break
        case "/":
            result = firstnum / lastnum //Divide
            break
        case "+":
            result = firstnum + lastnum //Add
            break
        case "-":
            result = firstnum - lastnum //Subtract
            break
    }
    display.textContent = result
    firstnum = result
}