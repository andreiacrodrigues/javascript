/*function check() {
    
    var count = 1
     while (count <= 10) {
         count = count + 1
     }

    var info = window.document.getElementById("information")
    info.innerHTML = `<p> Contando de 1 até 10 </p>`

    var info2 = window.document.getElementById("information2")
    info2.innerHTML = `<p> 1 &#128073 2 &#128073 3 &#128073 4 &#128073 5 &#128073 6 &#128073 7 &#128073 8 &#128073 9 &#128073 10 &#128073 &#127937 </p>`
}*/


function check() {
    var info = window.document.getElementById("information")
    info.innerHTML += `<p> Contando de 1 até 10 </p>`
    


    var count = 1
    while (count <= 10) {
        info.innerHTML += `${count} &#128073;`
        count ++ // count = count + 1
    }

    info.innerHTML += `&#x1F3C1;`
}


