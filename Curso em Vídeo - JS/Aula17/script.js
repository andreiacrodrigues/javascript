let num = window.document.getElementById ("fnum")
let lista = window.document.getElementById("flista")
let res = window.document.getElementById ("res")
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inLista(num.value, valores)) { //!não está em lista
        valores.push(Number(num.value))
        let item = document.createElement ("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert(`Valor inválido ou já encontrado na lista!`)
    }
    num.value =" "
    num.focus()
}


function finalizar(){
    if (valores.length == 0) {
        window.alert ("Adicione os valores para finalizar!")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[0]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        res.innerHTML = ` `
        res.innerHTML += `<p> Ao todo, temos ${tot} números guardados. </p>`
        res.innerHTML += `<p> O maior valor escrito foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor escrito foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos o valores, temos o total de ${soma}. </p>`
        res.innerHTML += `<p> A média é igual a ${media}. </p>`
    }
}
 