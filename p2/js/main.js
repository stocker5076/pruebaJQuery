var arregloSaludos = ["Hola","Que onda!","Que pedo!","Que tranza!","Hello"];
var arregloNumeros = [45,3,75,56,46];


console.log("Probando funcion con Arreglo : "+arregloSaludos);
console.log("Imprimiendo copia de Arreglo : " + copiarArreglo(arregloSaludos));
console.log("Probando funcion con Arreglo : "+arregloNumeros);
console.log("Imprimiendo copia de Arreglo : " + copiarArreglo(arregloNumeros));


function copiarArreglo (arreglo){
	var copiaArreglo =[];
	copiaArreglo = new Array();
	for(var i = 0; i<arreglo.length; i++){
		copiaArreglo.push(arreglo[i]);
	}
	return copiaArreglo;
}
