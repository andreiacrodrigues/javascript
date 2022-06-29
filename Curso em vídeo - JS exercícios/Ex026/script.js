function check (){
    var numb1 = Number.parseInt (window.document.getElementById("value1").value)
    var numb2 = Number.parseInt (window.document.getElementById("value2").value)

    var info = window.document.getElementById("information")
    info.innerHTML += `<p> Contando de ${numb1} até ${numb2}</p>` 

    if (numb1 < numb2) {
        for (var count = numb1; count <= numb2; count ++) {
            info.innerHTML += `${count} &#128073`
        }
    } else {
        for (var count = numb1; count >= numb2; count --) {
            info.innerHTML += `${count} &#128073`
        }
    }
   

    info.innerHTML +=  `&#127877`
}

 