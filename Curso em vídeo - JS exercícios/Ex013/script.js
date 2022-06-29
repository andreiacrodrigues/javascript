function clicar () {
    var num1 = Number(window.prompt("Digite um número:"))
    var num2 = Number(window.prompt("Digite outro número:"))

    var msg
    if (num1 > num2){
        msg = `o maior valor é ${num1}` 
    } else if (num1 < num2) {
        msg = `o maior valor é ${num2}`
    } else {
        msg = `ambos são IGUAIS` 
    }

    var res = window.document.getElementById("resultado")
    res.innerHTML = `Analisado os valores <mark> ${num1} </mark> e <mark> ${num2}</mark>, <b> ${msg} </b>`

}

/*var res = window.document.getElementById("resultado")
res.innerHTML = `Analisado os valores <mark> ${num1} </mark> e <mark> ${num2}</mark>, <b> ${msg} </b>`*/