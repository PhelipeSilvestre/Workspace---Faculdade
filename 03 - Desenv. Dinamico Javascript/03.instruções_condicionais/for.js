/* Loop for
O loop for é um loop que executa um bloco de código para cada elemento em um array.

Neste exemplo, temos um array de carros representado pela variável carros. Utilizamos um loop “for” para percorrer cada elemento do array e acessar a propriedade preco de cada carro. A cada iteração, somamos o preço ao valor da variável totalPrecos. No final, exibimos o total dos preços dos carros no console.
*/

var carros = [
  {
    id: 1,
    modelo: "Corsa",
    marca: "Chevrolet",
    preco: 45000,
    dataCriacao: "01/01/2022",
  },

  {
    id: 2,
    modelo: "Punta",
    marca: "Fiat",
    preco: 35000,
    dataCriacao: "01/02/2022",
  },

  {
    id: 3,
    modelo: "Gol",
    marca: "Volkswagen",
    preco: 40000,
    dataCriacao: "01/03/2022",
  },
];

let totalPrecos = 0;

for (let i = 0; i < carros.length; i++) {
  const carro = carros[i];

  totalPrecos += carro.preco;
}

console.log("Total dos preços dos carros: ", totalPrecos);
