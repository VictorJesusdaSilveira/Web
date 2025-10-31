let most = document.querySelector(".mostrador")
let campo_sabor = document.querySelector("#campo_sabor")
let contador = document.querySelector("#botao")

document.addEventListener("keydown" , (e)=> {
    most.innerHTML = "apertou na tecla " + e.key
})

document.addEventListener("click" , () => {
    let bgColor = "rgb(" + Math.random() * 255 + "," + Math.random() + 255 + "," + Math.random() * 255 + ")"
    document.body.style.backgroundColor = bgColor
})

campo_sabor.addEventListener("input" , () => {
    if (campo_sabor.value.toLowerCase() == "chocolate"){
        most.innerText = "Eu adoro chocolate"
    }else {
        most.innerText = "Outro sabor informado: " + campo_sabor.value
    }
})



document.addEventListener("click" , () => {
   contador ++
   
})



let botao = document.querySelector(".button")
let display = document.querySelector(".display")

let regressiva = setInterval(() => {
    1000
})