function check(){
    var info = window.document.getElementById ("information")
    info.innerHTML += "<p> Contando de 1 até 10, marcando os pares </p>"


    /* Começa em 2, vai adicionando +2

    for (var count = 2; count <= 10; count += 2) {
        info.innerHTML += `${count} &#128073 `
    }
    
    */

    

    //Calcula de 1 a 10, mas só mostra os pares

    for (var count = 1; count <= 10; count++){
        if (count % 2 == 0) {
            info.innerHTML += ` ${count} &#128073`
        }
    }
    
    info.innerHTML += " &#127877"

    }