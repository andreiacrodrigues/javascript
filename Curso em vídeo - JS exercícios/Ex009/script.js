var contador = 0
var res = window.document.getElementById ("resultado")

function clicar () {
    contador = contador + 1
    res.innerHTML = `O contador está com <mark> ${contador} </mark> cliques`
}

function zerar () {
    contador = 0
    res.innerHTML = null
}