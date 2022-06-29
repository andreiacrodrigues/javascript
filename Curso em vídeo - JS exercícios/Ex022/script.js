function check(){
    var info = window.document.getElementById ("information")
    info.innerHTML += "<p> Contando de 1 até 10, marcando os pares </p>"


    /*while (count <= 10){
        var count = 1
        info.innerHTML += `<p> ${count} &#128073 </p>`
        count ++ 
    }*/

    for (var count = 1; count <= 10; count++){
        if (count % 2 == 0) {
            info.innerHTML += `<mark> ${count} </mark> &#128073`
        }
        else {
            info.innerHTML += ` ${count} &#128073`
        }

        }
    
    info.innerHTML += " &#127877"

    }