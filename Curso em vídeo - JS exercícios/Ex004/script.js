function clicar () {
    var name = window.prompt("Qual é o teu nome?") 
    var res = window.document.getElementById("resultado")
    res.innerHTML = (`Olá, <b> ${name} </b>! É um grande prazer conhecer-te! &#128405`)
}




