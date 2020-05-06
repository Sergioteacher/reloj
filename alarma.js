/*  Heroic Reception de Kevin MacLeod está autorizado la licencia Creative Commons Attribution (https://creativecommons.org/licenses/by/4.0/)
Fuente: http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100206
Artista: http://incompetech.com/ */


var btn = document.getElementById("button"),
	done = document.getElementById("done"),
	settings = document.getElementById("setear");

function verAlarma () {
settings.className = "seve";
}

function ocultarBoton () {
btn.className = "tenue";}

function listo() {
settings.className = "noseve";
btn.className = "button";}



btn.addEventListener("click", verAlarma);
btn.addEventListener("mouseup", ocultarBoton);
done.addEventListener("click", listo);


function alarma() {
var tiempo = new Date();	
var horas = tiempo.getHours(), 
	minutos = tiempo.getMinutes(),
	segundos = tiempo.getSeconds(),
	horaInput = document.getElementById("horaAlarma").value,
	minInput = document.getElementById("minutoAlarma").value,
	sonido = document.getElementById("audio");
	
if (minInput < 10 && minInput.length == 1) {
	minInput =  "0"+minInput;
	}
if (horaInput < 10 && horaInput.length ==1) {
	horaInput = "0"+horaInput;
}

if (horas < 10 ) {
horas = "0" + horas;
}
if (minutos < 10) {
minutos = "0" + minutos;
}
if (segundos < 10 ) {
segundos = parseInt("0" + segundos);
}


if (horas == horaInput && minutos == minInput && segundos == 00 ) {
	sonido.play();
	window.alert("HORA!");
}

document.onkeydown = sonido.pause();


}

setInterval(alarma, 1000);	