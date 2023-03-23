var pessoa = {
    nome: "Nicolly Reis",
    idade: 18,
    altura: 1.63,
    gênero: "F",
    peso: 62,
    acordado: true,
} 

if(pessoa.acordado){
    console.log(`${pessoa.nome} está acordada (o)`);
} else{
    console.log(`${pessoa.nome} não esta acordada (o)`)
}

if(pessoa.idade >= 18){
    console.log(`${pessoa.nome} tem 18 anos ou mais`);
} else if (pessoa.idade <= 18 && pessoa.acordado){
    console.log(`${pessoa.nome} não tem 18 e esta acordada(o)`);
} else {
    console.log(`${pessoa.nome} não tem 18 anos`);
} 

switch(pessoa.genero){
    case "f":
    case "F":
        console.log(`${pessoa.nome} é do Gênero Feminino`);
     break;
        case "m":
       case "M":
           console.log(`${pessoa.nome} é do Gênero Masculino`);
       break;
       default:
            console.log("O gênero informado não esta classificado")
        break;
}



