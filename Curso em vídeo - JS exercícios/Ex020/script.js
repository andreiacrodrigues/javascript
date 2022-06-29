function clicar() {
    var month = window.prompt("Digite o mês em extenso (ex: Setembro)")
    month = month.toLowerCase() 

    var outu = ["setembro", "outubro", "novembro", "dezembro"]
    var inver = ["janeiro", "fevereiro", "março"]
    var verao = ["junho", "julho", "agosto"]
    var prima = ["abril", "maio"]

    var info = document.getElementById ("information")

    if (outu.indexOf(month) != -1) {
        info.innerText = `No mês de ${month}, estamos na estação OUTONO`
    } else if (inver.indexOf(month) != -1){
        info.innerText = `No mês de ${month}, estamos na estação INVERNO`
    } else if (verao.indexOf(month) != -1) {
        info.innerText = `No mês de ${month}, estamos na estação VERÃO`
    } else if (prima.indexOf(month) != -1) {
        info.innerText = `No mês de ${month}, estamos na estação PRIMAVERA`
    } else {
        info.innerText = `No mês de ${month}, estamos na estação INDEFINIDA`
    }
    
}
