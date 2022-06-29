var info = document.getElementById("information")
var rand = 0  
var num = 0  


function sortear() {
    var min = 1
    var max = 100
    /*var dif = max - min
    var aleatorio = Math.random()
    var rand = min + Math.trunc(dif * aleatorio)*/
    var rand = Number(Math.floor(Math.random() * (max - min)) + min)
}


function guess() {
    var num = Number(window.prompt("Qual é o seu palpite?"))

    if (num < rand) {
        info.innerHTML += `<p> Você falou ${num}. O meu número é <b> MAIOR </b>! </p>`
    } else if (num > rand) {
        info.innerHTML += `<p> Você falou ${num}. O meu número é <b> MENOR </b>! </p>`
    } else {
        info.innerHTML += `<p> <b>PARABÉNS!<b> Você acertou. Eu tinha sorteado o valor ${num}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}

  
