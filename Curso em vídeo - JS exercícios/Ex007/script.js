var a = window.document.getElementById("botão")
a.addEventListener("click", clicar)

function clicar () {
    var name = window.prompt("Qual é o nome do aluno?")
    var note1 = Number (window.prompt (`Qual foi a primeira nota de ${name}?`))
    var note2 = Number (window.prompt (`Para além de ${note1}, qual foi a outra nota de ${name}?`))
    var med = (note1 + note2) / 2

    var res = window.document.getElementById("resultado")
    res.innerHTML = `<p> Calculando a média final de <mark> ${name} </mark>. </p>`
    res.innerHTML += `<p> As notas obtidas foram <mark> ${note1} e ${note2}</mark>. </p> `
    res.innerHTML += `<p> A média final será <mark> ${med} </mark>. </p>`
}
 