function clicar() {
    var num = Number(window.prompt("Digite um número:"))
    
    var msg

    if (num % 2 == 0) {
        msg = `PAR`
    } else {
        msg = `ÍMPAR`
    }

    var res = window.document.getElementById("resultado")
    res.innerHTML = `O número ${num} que digitado é <b> ${msg}!</b>`

}


