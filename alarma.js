var horaReloj = document.getElementById("hora"),
	 minReloj = document.getElementById("min"),
	 horaAlarma = document.getElementById("horaAlarma"),
	 minAlarma = document.getElementById("minAlarma");
	 

function alarma (){
if (horaReloj == horaAlarma.value && minReloj.value == minAlarma) {
alert("Alarmaaaaaaaaaaaaaa!");

}

setInterval(alarma, 1000);