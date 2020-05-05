var horaDisplay = document.getElementById("hora"),
	 minDisplay = document.getElementById("min"),
	 secDisplay = document.getElementById("sec"),
	 fechaDisplay = document.getElementById("Fecha");
	

function agujas() {
var tiempo = new Date();	
var horas = tiempo.getHours(), 
	minutos = tiempo.getMinutes(),
	segundos = tiempo.getSeconds(),
	dia = tiempo.getDate(),
	meses = tiempo.getMonth(),
	año = tiempo.getFullYear(); 
	
		
if (horas < 10 ) {
horas = "0" + horas;
}
if (minutos < 10) {
minutos = "0" + minutos;
}
if (segundos < 10) {
	segundos = "0" + segundos;}
if (dia<10) {
	dia="0"+dia;}


if (meses<10) {
	meses = "0"+meses;}
	
horaDisplay.innerHTML = horas; 
minDisplay.innerHTML = minutos;
secDisplay.innerHTML = segundos;
fechaDisplay.innerHTML = dia + "/" + meses + "/" + año; 


}


setInterval(agujas, 1000);

