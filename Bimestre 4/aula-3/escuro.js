let botao = document.querySelector(".alternarTema")
let body = document.querySelector("body")

botao.addEventListener('click' , ()=>{
    body.classList.toggle('tema-escuro')

})

let tema = localStorage.getItem("tema")

if (tema == "tema-escuro") {
    body.classList.add('tema-escuro')
}

let isTemaEscuro = body.classList.contains("tema-escuro")

if (isTemaEscuro) {
    localStorage.setItem("tema" , "tema-escuro")
}else {
    localStorage.setItem("tema" , "")
}