// напишите функцию coneVolume(d,h) и используйте ее так,
// так, чтобы функция solve() показывала объем ведра
// либо сообщение "Недопустимые данные".

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	let d1 = Number(document.getElementById("d1").value);//больший диаметр
	let d2 = Number(document.getElementById("d2").value);//меньший диаметр
	let h = Number(document.getElementById("h").value);//высота ведра
	let h1 = d2*h/(d1-d2)+h;//высота большего конуса
	let h2 = d2*h/(d1-d2);//выоста меньшего конуса

	if(d1>d2 && d2>0 && h>0) {
		alert("Объем ведра = " + (coneVolume(d1, h1)-coneVolume(d2, h2)).toFixed(2) + " л.");
	} else alert("Недопустимые данные.");
}

function coneVolume(d, h){
	// вычисление объема полного конуса
	return 1/12*Math.PI*d*d*h/1000;
}
