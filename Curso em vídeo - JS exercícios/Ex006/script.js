function clicar () {
    var num1 = Number(window.prompt("Digite um número:"))
    var num2 = Number(window.prompt("Digite outro número:"))
     var tot = num1 + num2

    var res = window.document.getElementById("resultado")

    res.innerHTML = `A soma entre <mark>${num1}</mark> e <mark>${num2}</mark> é igual a <b> ${tot} </b>!`
}

