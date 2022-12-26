const display = document.querySelector("#result-display")
const previousOperation = document.querySelector("#previous-display")
const keys = document.querySelector("#pad")
let firstnum,
    lastnum,
    operator = false,
    symbol = ""

keys.addEventListener("click", (e)=>{ // Teclado virtual
    const key = e.target.innerText
    
    if(Number(key) >= 0 || key === "."){
        insertNumber(key)
        previousOperation.innerHTML += key
    }

    if(key === "*" || key === "/" || key === "+" || key === "-"){
        previousOperation.innerHTML += key
        display.textContent = 0
        symbol = key
        operator = true
    }

    if(key === "="){
        calculate()
    }
    
    if(key === "CE"){
        clear()
    }
})

document.addEventListener("keydown", (event)=>{ // Teclado físico
    const length = display.textContent.length;
    if(Number(event.key) >= 0 || event.key === "."){
        insertNumber(event.key)
        previousOperation.innerHTML += event.key
    }

    if(event.key === "*" || event.key === "/" || event.key === "+" || event.key === "-"){
        previousOperation.innerHTML += event.key
        display.textContent = 0
        symbol = event.key
        operator = true
    }

    if(event.key === "Enter"){
        calculate()
    }

  if (event.key === "Backspace" && display.textContent !== "0" && length > 0) {
    if (length === 1) {
      display.textContent = "0";
    } else {
      display.textContent = display.textContent.slice(0, length - 1);
    }
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
    previousOperation.innerHTML = ""
    display.textContent = "0"
    console.log(`firstnum: ${firstnum}`)
    console.log(`lastnum: ${lastnum}`)
}

function calculate(){
    display.textContent = 0
    let result
    switch (symbol){
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