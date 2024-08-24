let listaDeCompras = ["pão", "leite", "ovos", "queijo", "frutas"];
console.log("Lista inicial:", listaDeCompras );

listaDeCompras.push("café");
console.log("Após adicionar 'café' ao final:", listaDeCompras);

listaDeCompras.unshift("manteiga");
console.log("Após adicionar 'manteiga' ao início:", listaDeCompras);

let itemRemovido = listaDeCompras.pop();
console.log("Após remover o último item:", listaDeCompras);
console.log("Item removido:", itemRemovido);

let primeiroItemRemovido = listaDeCompras.shift();
console.log("Após remover o primeiro item:", listaDeCompras);
console.log("Primeiro item removido:", primeiroItemRemovido);

listaDeCompras.splice(1, 1, "chocolate");
console.log("Após substituir o segundo item por 'chocolate':", listaDeCompras);

listaDeCompras.splice(2, 1, "biscoitos", "suco");
console.log("Após remover o terceiro item e adicionar 'biscoitos' e 'suco':", listaDeCompras);

let posicaoQueijo = listaDeCompras.indexOf("queijo");
console.log("Posição de 'queijo' na lista:", posicaoQueijo);

console.log("Lista final:", listaDeCompras);