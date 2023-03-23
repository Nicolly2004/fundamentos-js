var carros = ["Gol", "Ford Ka" ,"Hilux", "Ferrari", "Ford Fiesta", "Cruse", "Prisma", "Doblo", "EcoSport", "fusion"];

/**Filtrar itens com base em um critério e retorna uma lista */
console.log("Começam com F:" , carros.filter(function(value){
    return value[0] == "F" 
}));

 
console.log("Carros que contenham mais de 4 letras:" , carros.filter(function(value){
    return value.length >= 4 ;
}));

/**Retorna a primeira ocorrência de um critério de busca */

console.log("Obtem um carro da ford:", carros.find(function(value){
   var carroMarca = value.split(" ")[0]
   return carroMarca == "Ford";
}));

/**Ordenar uma lista com base em um critério */

console.log("Ordena uma lista em ordem alfabética:" ,[2,8,1,0,4,3,6,7].sort(function(a, b){
    return a - b 
}));