function confirm () {
    var months = new Array (`Jan` , `Fev`, `Mar`,`Abr`, `Mai`, `Jun`, `Jul`,`Ago`, `Set`,`Out`, `Nov`, `Dez`)
    var weeks =  new Array (`Dom` , `Seg`, `Ter`, `Qua`, `Qui`, `Sex`, `Sab`)
    var d = new Date ()
    var day = d.getDate ()
    var month = d.getMonth()  //Jan = 0; Fev= 1
    var year = d.getFullYear()
    var week = d.getDay ()  //Dom = 0; Seg =1
    var hour = d.getHours ()
    var min = d.getMinutes ()
    var sec = d.getSeconds ()



    var fin = document.getElementById("final")
    fin.innerHTML = `Dia: <mark> ${day} </mark>`
    fin.innerHTML += `<p> Mês: <mark> ${months[month]} </mark> </p>`
    fin.innerHTML += `<p> Ano: <mark> ${year} </mark> </p>`
    fin.innerHTML += `<p> Dia da Semana: <mark> ${weeks[week]} </mark> </p>`
    fin.innerHTML += `<p> Hora: <mark> ${hour} </mark> </p>`
    fin.innerHTML += `<p> Minuto: <mark> ${min} </mark> </p>`
    fin.innerHTML += `<p> Segundos: <mark> ${sec} </mark> </p>`

}

   /* switch (month) {
        case 0:
            month.innerHTML="Jan"
            break
        case 1:
            month.innerHTML="Fev"
            break
        case 2:
            month.innerHTML="Mar"
            break
        case 3:
            month.innerHTML="Abr"
            break
        case 4:
            month.innerHTML="Mai"
            break
        case 5:
            month.innerHTML="Jun"
            break
        case 6:
            month.innerHTML="Jul"
            break
        case 7:
            month.innerHTML="Ago"
            break
        case 8:
            month.innerHTML="Set"
            break
        case 9:
            month.innerHTML="Out"
            break
        case 10:
            month.innerHTML="Nov"
            break
        default:
            month.innerHTML="Dez"
            break
    }

    switch (week) {
        case 0:
            week.innerHTML="Dom"
            break
        case 1:
            week.innerHTML="Seg"
            break
        case 2:
            week.innerHTML="Ter"
            break
        case 4:
            week.innerHTML="Qua"
            break
        case 5:
            week.innerHTML="Qui"
            break
        case 6:
            week.innerHTML="Sex"
            break
        default:
            week.innerHTML="Sab"
            break
    }*/







  
