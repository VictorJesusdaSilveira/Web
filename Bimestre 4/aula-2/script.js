let contador = document.querySelector(".contador")
let regressiva = 10

let intervalo = setInterval(()=>{
    contador.innerText = regressiva
    regressiva--

    if (regressiva === 0 ) {
        contador.innerText = "Tempo Esgotado"
        clearInterval(intervalo)
        
    }

}, 1000)
