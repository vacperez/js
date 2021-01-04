const diaSemana = new Date().getDay();
//Concatenacion normal
//let valorSrc = "Carita"+diaSemana+".png"
// Utilizando templates litterals
let valorSrc = `Carita${diaSemana}.png`
let mensaje = `Faltan ${6-diaSemana} días para el fin de semana`
// En el html, creamos una etiqueta img para mostrar nuestra carita
//y desde acá le modificamos su atributo src
document.getElementById("caritas").src = valorSrc;
document.getElementById("output").innerHTML = mensaje
