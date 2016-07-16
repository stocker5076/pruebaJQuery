function Telefono (numero) {
    this.numero = numero;
    this.marca = "samsung";
    this.color = "rojo";
    this.contador = 0;
}
 

function marcar(numero){
	var tel = new Telefono(numero);	
	console.log("Imprime caracteristicas telefono (numero,marca,color,contador): "+ tel.numero+ "," + tel.marca + ","+ tel.color+","+ tel.contador);

	tel.contador++;
	console.log("Imprime contador de telefono valor: "+tel.contador);
}



console.log("Prueba con numero 5541414714: ");
marcar(5541414714);