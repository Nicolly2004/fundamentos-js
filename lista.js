
/**0,1,2,3 */
var coresFavoritas = ["Preto","Branco","Cinza","Azul esverdeado","Branco",true, false, 0.5,true];
/**o indice começa sempre do 0 */

console.log("Tamanho da lista:",coresFavoritas.length);/**Contagem dos itens de uma lista */

console.log("Original:",coresFavoritas);
coresFavoritas[1] = "Cinza"

coresFavoritas[1] = "Marrom";
console.log("Alterada:",coresFavoritas);

coresFavoritas[4] = "Verde Musgo";
console.log("Adicionada:", coresFavoritas);

coresFavoritas.push("Coral");
console.log("Adicionada push:", coresFavoritas);

/**Exclui o ultimo item e devolve ele */
console.log(coresFavoritas.pop(),coresFavoritas)


/**Métodos de consulta de lista */
console.log("Retorna o indice de um item:",coresFavoritas.indexOf("Verde Musgo"));
console.log(coresFavoritas.filter(function(valor, indice){
    return typeof valor === 'string'
}));
    
    

var nova_lista = coresFavoritas.map(function(item, indice){
    return(`A cor ${item} está no indice ${indice}`)
})

console.log(nova_lista);

coresFavoritas.forEach(function(item, indice){
    console.log(item + " " +indice) ;
})