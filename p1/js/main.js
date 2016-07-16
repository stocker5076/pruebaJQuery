	var suma = 0;
	do{
		ingreso = prompt("Ingresa un numero");
		if (isNaN(ingreso)){
			alert (ingreso + " no es un numero");
		}
		else{
			suma= suma + parseInt(ingreso);
		}
	}
	while(ingreso!="fin");

	console.log("La suma total es: "+ suma);

