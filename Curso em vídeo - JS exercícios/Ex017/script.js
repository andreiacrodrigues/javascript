function begin(){
    var min = 1
    var max = 100
    //var dif = max - min
    //var aleatorio = Math.random() //GERA VALOR REAL entre 0 e 1 exclusivo
   // var num = min + Math.trunc(dif * aleatorio)
   // Math.floor (Math.random() * (max-min) + min    ---- Numero aleatorio
   //var num = Math.floor (aleatorio * dif + min)
   var num = Math.floor (Math.random() * (max-min) + min)

    var fin = document.getElementById("final")
    fin.innerHTML += `<p> Acabei de pensa no número <mark> ${num} </mark>!</p>`
}


function clean () {
    var fin = document.getElementById("final")
    fin.innerHTML = null
}


  
