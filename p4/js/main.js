

inicio();


function inicio(){
	var numeroPuntos;
	do{
		ingreso = prompt("Ingresa un numero");
		if (isNaN(ingreso)){
			alert (ingreso + " no es un numero");
		}
		else{
			numeroPuntos= parseInt(ingreso);
		}
	}
	while(isNaN(ingreso));
	imprimecuadro(numeroPuntos);
}



function imprimecuadro(n){
	var linea = creaLinea(n);
	var pared = creaparedes(n);	
	for(var k=0; k<n;k++){
		if(k==0 || k==n-1){
			console.log(linea);
		}
		else{
			console.log(pared);
			pared = pared+" ";
		}
	}


}



function creaLinea(n){
	var linea= "";
	for(var k=0;k<n;k++){
		linea=linea + "*";
	}
	return linea;
}

function creaparedes(n){
	var pared= "";
	for(var k=0;k<n;k++){
		if(k==0 || k== n-1){
			pared=pared + "*";
		}
		else{
			pared = pared +" ";
		}
		
	}
	return pared;

}
