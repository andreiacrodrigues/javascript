function clicar(){
    var num1 = Number (window.prompt("Primeiro valor:"))
    var num2 = Number(window.prompt("Segundo valor:"))

    var option = Number(window.prompt(`Valores informados: ${num1} e ${num2}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir`))

    var info = document.getElementById("information")
   

    if (option == 1) {
        var soma = num1 + num2
        info.innerHTML = `${num1} + ${num2} = <b> ${soma} </b>`
    } else if (option == 2) {
        var sub = num1 - num2
        info.innerHTML = `${num1} - ${num2} = <b> ${sub} </b>`
    } else if (option == 3) {
        var mult = num1 * num2
        info.innerHTML = `${num1} x ${num2} = <b> ${mult} </b>`
    } else if (option == 4) {
        var div = num1 / num2
        info.innerHTML = `${num1} / ${num2} = <b> ${div} </b>`
    } else {
        info.innerHTML = `OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles. `
    }
}
