function check (){
    var numb = Number.parseInt (window.document.getElementById("value1").value)
 

    var info = window.document.getElementById("information")
    info.innerHTML += `<p> Tabuada de ${numb} </p>` 

    
    for (var count = 1; count <= 10; count ++ ) {
            var res = count * numb
            info.innerHTML += `<p>${numb} x ${count} = ${res} </p>`
  
    }
   
}

 