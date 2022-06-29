function clicar () {
    var n = Number (window.prompt("Digite um número:"))
    var res = window.document.getElementById("resultado")
    res.innerHTML = `O número a ser analisado aqui será o <b> ${n} </b>`

    var abs = Number(n)
    var int = Number.parseInt(n)
    var int1 = Number.parseInt(n+1)
    var r2 = Math.sqrt(n)
    var r3 = Math.cbrt(n) 
    var el2 = n**2
    var el3 = n**3


    var extra = window.document.getElementById("extraordinario")
    extra.innerHTML = `O seu valor absoluto é ${abs} `
    extra.innerHTML += `<p> A sua parte inteira é ${int} </p> `
    extra.innerHTML += `<p> O seu valor inteiro é ${int1} </p> `
    extra.innerHTML += `<p> A sua raíz quadrada é ${Math.sqrt(n)} </p> `
    extra.innerHTML += `<p> A sua raíz cúbica é ${Math.cbrt(n)} </p>` 
    extra.innerHTML += `<p> O valor de ${n}² é ${n**2} </p> `
    extra.innerHTML += `<p> O valor de ${n}³ é ${n**3} </p> `
}