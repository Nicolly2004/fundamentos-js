var frutas = ["Melão", "Goiaba", "Morango", "Banana", "Pera", "Melancia","Maça", "Laranja"];

function filtroIniciaM(fruta){
    return fruta[0] == "M"
}

console.log("Começam com M;", frutas.filter(filtroIniciaM))


/**console.log("Começam com M;", frutas.filter(function(value){
    return value[0] == "M"
}));*/

/**outra maneira de fazer */
/**console.log("Fruta com M:", frutas.filter(function(fruta){
 * return fruta[0] == "M"
 * })) */ 


console.log("Frutas que contenham mais de 4 letras:", frutas.filter(function(value){
    return value.length >= 4 ;
}));


console.log("Obter fruta com G", frutas.find(function(value){
    var frutaG = value[0]
    return frutaG == "G";
}));

/**outra maneira de fazer */
/**console.log("Fruta com G:", frutas.find(function(fruta){
 * return fruta[0] == "G"
 * })) */ 


console.log("Ordenar em ordem alfabética:" ,frutas.sort());
  
 