function check(){
    var info = window.document.getElementById ("information")
    info.innerHTML += "<p> Contando regressiva de 10 a 1 </p>"


    for (var count = 10; count >= 1; count --) {
        info.innerHTML += `${count} &#128073`
    }
    
    info.innerHTML += " &#127877"
}
