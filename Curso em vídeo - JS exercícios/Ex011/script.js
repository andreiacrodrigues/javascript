function clicar() {
    let name = window.prompt("Qual o nome do aluno?")
    let note1 = Number(window.prompt (`Qual foi a primeira nota de ${name}?`))
    let note2 = Number(window.prompt (`Além de ${note1}, qual foi a outra nota de ${name}?`))
    let med = (note1 + note2)/2
    let res = window.document.getElementById("resultado")

    /*
    if (med >= 6){
        res.innerHTML += `<strong style='color:red;'> Meus parabéns!`
    } else {
        res.innerHTML += `<strong style='color:red;'> Estude um pouco mais!`
    }
    */
    
    let msg
    if (med >= 6){
        msg = `Meus parabéns!`
    } else {
        msg = `Estude um pouco mais!`
    }

    res.innerHTML = `Calculando a média final de <mark> ${name} </mark>.`
    res.innerHTML += `<p> As notas obtidas foram <mark> ${note1} e ${note2} </mark>.<p/>`
    res.innerHTML += `<p> A média final será <mark> ${med} </mark>. </p>`
    res.innerHTML += `<p> A mensagem que temos é: <strong style='color:red;'> ${msg} `

 
}