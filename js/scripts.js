
//functions de distância entre as cidades pela ferrovia
function getABRoute(){
	return 5;
}

function getBCRoute(){
	return 4;
}

function getCDRoute(){
	return 8;
}

function getDCRoute(){
	return 8;
}

function getDERoute(){
	return 6;
}

function getADRoute(){
	return 5;
}

function getCERoute(){
	return 2;
}

function getEBRoute(){
	return 3;
}

function getAERoute(){
	return 7;
}


/**
getRoute é a função que informa ao usuário como chegar ao seu destino
@param 
	start é onde se coloca a origem 
	destiny é onde coloca o destino
	 'precisam ser  elementos do DOM que tenham o atributo value'
	textResponse será o elemento que mostrar a resposta ao usuário, elementos com <p> ou <span>  

*/
function getRoute(start, destiny, textResponse){
	var start  = document.getElementById(start);
	var destiny  = document.getElementById(destiny);
	var response  = document.getElementById(textResponse);
	if(start.value == destiny.value){
		response.innerHTML = "Origem e destino não podem ser iguais";		
	}else
	{
		if(start.value == "A" && destiny.value == "B"){
			response.innerHTML = "Pegue a linha AB a distância do percurso é "+  getABRoute() +"km";
		}
		else if(start.value == "A" && destiny.value == "C"){
			response.innerHTML = "Pegue a linha AB e depois a BC a distância do percurso é " + ( getABRoute() + getBCRoute() )+"km";
		}
		else if(start.value == "A" && destiny.value == "D"){
			response.innerHTML = "Pegue a linha AD a distância do percurso é " + getADRoute() +"km";
		}
		else if(start.value == "A" && destiny.value == "E"){
			response.innerHTML = "Pegue a linha AE a distância do percurso é " +  getAERoute() +"km";
		}		
		else if(start.value == "B" && destiny.value == "C"){
			response.innerHTML = "Pegue a linha BC a distância do percurso é " +  getBCRoute() +"km";
		}
		else if(start.value == "B" && destiny.value == "D"){
			response.innerHTML = "Pegue a linha BC e depois CD a distância do percurso é " + ( getBCRoute() + getCDRoute() ) +"km";
		}
		else if(start.value == "B" && destiny.value == "E"){
			response.innerHTML = "Pegue a linha BC, depois CD e depois DE a distância do percurso é " + ( getBCRoute() + getCDRoute() + getDERoute() ) +"km";
		}
		else if(start.value == "C" && destiny.value == "B"){
			response.innerHTML = "Pegue a linha CD, depois DE e depois EB a distância do percurso é " + (  getCDRoute() + getDERoute() + getEBRoute() ) +"km";
		}
		else if(start.value == "C" && destiny.value == "D"){
			response.innerHTML = "Pegue a linha CD a distância do percurso é " +  getCDRoute() +"km";
		}
		else if(start.value == "C" && destiny.value == "E"){
			response.innerHTML = "Pegue a linha CD e depois DE a distância do percurso é " + ( getDERoute() + getCDRoute() ) +"km";
		}
		else if(start.value == "D" && destiny.value == "B"){
			response.innerHTML = "Pegue a linha DE e depois EB a distância do percurso é " + ( getDERoute() + getEBRoute() ) +"km";
		}
		else if(start.value == "D" && destiny.value == "C"){
			response.innerHTML = "Pegue a linha DC a distância do percurso é " +  getDCRoute()  +"km";
		}		
		else if(start.value == "D" && destiny.value == "E"){
			response.innerHTML = "Pegue a linha DE a distância do percurso é " +  getDERoute()  +"km";
		}
		else if(start.value == "E" && destiny.value == "B"){
			response.innerHTML = "Pegue a linha EB a distância do percurso é " +  getEBRoute()  +"km";
		}
		else if(start.value == "E" && destiny.value == "C"){
			response.innerHTML = "Pegue a linha EB e depois BC a distância do percurso é " + ( getEBRoute() + getBCRoute() )  +"km";
		}
		else if(start.value == "E" && destiny.value == "D"){
			response.innerHTML = "Pegue a linha EB, depois BC e depois CD a distância do percurso é " + ( getEBRoute() + getBCRoute() + getCDRoute() )  +"km";
		}
		else{
			response.innerHTML = "Infelizmente ainda não atuamos nesse percurso";			
		}
	}
}

//Pedidos da Area Output

//1. The distance of the route A-B-C.
function abcRoute(){
	var result = getABRoute() + getBCRoute();
	return result; 
}

//2. The distance of the route A-D.
function adRoute(){
	var result = getADRoute();
	return result;
}

//3. The distance of the route A-D-C.
function adcRoute(){
	var result = getADRoute() + getDCRoute();
	return result;
}

//4. The distance of the route A-E-B-C-D.
function aebcRoute(){
	var result = getAERoute() + getEBRoute() + getBCRoute() + getCDRoute(); 
	return result;
}

//5. The distance of the route A-E-D.
// não há rota de E para D direta,
// mas poderia pegar o caminho EB, depois BC e depois CD como passado no método getRoute

//6 e 7 sem resposta

//8. The length of the shortest route (in terms of distance to travel) from A to C.
function shortestACRoute(){
	var result = getABRoute() + getBCRoute();
	return result; 
}

//9. The length of the shortest route (in terms of distance to travel) from B to B.
//10.The number of different routes from C to C with a distance of less than 30. 
// In the sample data, the trips are: CDC, CEBC, CEBCDC, CDCEBC, CDEBC, CEBCEBC, CEBCEBCEBC.
// Origem e destino não podem ser iguais

