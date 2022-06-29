window.alert ("Seja bem vindo (a) ao meu site!")

function clicar () {
    var num = window.prompt("Digite um número:")
    var double = Number(num) * 2
    var half= Number(num) / 2
    var res = window.document.getElementById("resultado")

    res.innerHTML = `O dobro de ${num} é ${double} e a metade de ${num} é ${half} &#127877; &#129304!`
}