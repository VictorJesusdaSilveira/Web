let lista = ['Morango' , 'Banana']

localStorage.setItem("elementos" , lista)

let pessoa = {
    "nome" : "Vernon",
    "idade" : 16,
    "Profissão" : ["Lutador" , "fisiculturista"]
}

let pessoaStringficada = JSON.stringify(pessoa)

localStorage.setItem("pessoa" , pessoaStringficada)

pessoa = localStorage.getItem("pessoa")

let pessoaObjetificada = JSON.parse(pessoa)

console.log(pessoaObjetificada)

localStorage.clear()