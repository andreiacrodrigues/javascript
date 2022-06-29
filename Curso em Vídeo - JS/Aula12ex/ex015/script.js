function verificar () {
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById("textano")
    var res = window.document.getElementById ("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados novamente!")
    } else {
        var fsex = document.getElementsByName ("radsex")
        var idade = ano - Number(fano.value)
        var genero = " "
        var img =document.createElement("img")
        img.setAttribute ("id", "foto") // (é igual   img id ="foto")
        if (fsex [0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute ("src", "foto_babyboy.png")
            } else if (idade < 21) {
            //jovem
            img.setAttribute ("src", "foto_youngboy.png")
            } else if (idade < 50) {
            // adulto 
            img.setAttribute ("src", "foto_adultboy.png")
            } else {
            // idoso
            img.setAttribute ("src", "foto_oldmen.png")
            }
        
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute ("src", "foto_babygirl.png")
                } else if (idade < 21) {
                //jovem
                img.setAttribute ("src", "foto_younggirl.png")
                } else if (idade < 50) {
                // adulto 
                img.setAttribute ("src", "foto_adultgirl.png")
                } else {
                // idoso
                img.setAttribute ("src", "foto_oldwoman.png")
                }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectámos ${genero} de ${idade} anos!`
        res.appendChild (img)
    }   

}