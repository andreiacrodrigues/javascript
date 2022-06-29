function check (){
    var numb = Number.parseInt((document.getElementById("value1")).value)


    var info = window.document.getElementById ("information")

    info.innerHTML += `<p> Contando de 0 até ${numb} </p>`

    for (var count = 0; count <= numb; count ++) {
        info.innerHTML += `${count} &#128073`
    }

    info.innerHTML +=  `&#127877`

}