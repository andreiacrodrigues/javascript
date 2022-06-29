var agora = new Date()
var hora = agora.getHours()
//var horas = 1//
console.log(`Agora são exatametne ${hora} horas`)
if (hora >= 8 && hora < 12) {
    console.log("Bom dia!")
} else if (hora > 12) {
    console.log("Boa Tarde")
} else if (hora > 20) {
    console.log("Boa noite")
} else {
    console.log("Boa madrugada")
}
