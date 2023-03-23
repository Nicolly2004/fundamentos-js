var filmes = [{
    título: "Velozes e Furiosos 7",
    nota: 6,
},
{
  título: "Rei Leão 2",
  nota: 9
},{
    título: "Timão e Pumba",
    nota: 10
}
];

console.log("Filmes com nota maior que 7", filmes.filter(function(filme){
    return filme.nota > 7
}))



filmes.map(function(item, indice){
    console.log(item.título)
})

filmes.map(function(item, indice){
    console.log(item.nota)
})

