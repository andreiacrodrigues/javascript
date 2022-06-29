function check (){
    var numb = Number.parseInt (window.document.getElementById("value1").value)
 

    var info = window.document.getElementById("information")
    info.innerHTML += `<p> Calculando ${numb}! </p>` 

    
     var fact = 1
     for (var c = numb; c > 1; c--) {
         info.innerHTML += `${c} x  `
         fact *= c    // fact = fact * c
     }

     info.innerHTML += `1 = ${fact}`

   
}

 