var nome = "Nicolly Reis";
var idade = 18;
var altura = 1.63;
var genero = "M";
var peso = 62;
var acordado = true;
var coresFavoritas = ["Preto","Branco","Cinza","Azul esverdeado","Branco"];


var pessoa = {
    nome: "Nicolly Reis",
    idade: 18,
    altura: 1.63,
    gênero: "M",
    peso: 62,
    acordado: true,
    coresFavoritas: "Verde"
};

pessoa.musicaFavorita = "Dança da Mãozinha";
console.log(pessoa);


console.log("Nome:" + pessoa.nome);
console.log("Idade:" + pessoa.idade) ;
console.log("Altura:" +  pessoa.altura);
console.log("Gênero:" +  pessoa.genero);
console.log("peso:" +  pessoa.peso);
console.log("Acordado:" +  pessoa.acordado);

console.log("Sua musica favorita:" + pessoa.musicaFavorita);
console.log("pessoa.musicaFavorita:" , pessoa.musicaFavorita);

console.log("Sua cor favorita:" + pessoa.coresFavoritas)
console.log("coresFavoritas:" + pessoa.coresFavoritas);



console.log("======== Calculadora de IMC ======");
var IMC = peso /  pessoa.altura ** 2;
pessoa['imc'] = IMC;
console.log("Olá," +  pessoa.nome);
console.log("Seu IMC é:" + IMC);