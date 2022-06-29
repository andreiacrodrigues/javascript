function begin(){
    var num = Number(window.prompt("Em que ano nasceu?"))
    var d = new Date ()
    var year = d.getFullYear()
    var age = (year - num)

    var fin = document.getElementById ("final")
    fin.innerHTML = `Quem nasceu em ${num} vai completar <b> ${age} </b> anos em 2022.`
}






  
