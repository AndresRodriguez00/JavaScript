//Tipo de dato primitimo - Inmutable

let primeraVariable = 5
primeraVariable = primeraVariable + 15
console.log(primeraVariable)

let esVerdadero = true
console.log(esVerdadero)

//Tipo de dato complejo - Mutable

let usuarioPrimeraVariable = {nombre : "Andres Rdriguez" , edad : "15"}
usuarioPrimeraVariable.edad = 29
console.log(usuarioPrimeraVariable)

let frutasColombiana = ["chulupa", "pera", "uvas", "banano"]
frutasColombiana [2] = "fresas"
console.log(frutasColombiana)

function cambiarNombre (cualquiercosa){
    cualquiercosa.nombre = "Andres"
}
function cambiarEdad (cualquiercosa){
    cualquiercosa.edad = "100"
}

let personaReal = { nombre : "personaje1", edad : "55 años"}

cambiarNombre(personaReal)
cambiarEdad(personaReal)

console.log(personaReal)

const suma = '5' + 15
console.log(suma)