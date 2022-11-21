const display = document.querySelector("#result-display")
const prev = document.querySelector("#previous-display")
const keys = document.querySelector("#pad")

keys.addEventListener("click", (e)=>{
    const key = e.target
    console.log(key.textContent)

})