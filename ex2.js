const forma= "triangulo";
const altura =5;
const largura = 7;
let area; //area não pode ser constante pq toda constante tem que ter um valor definido. E como o valor dela é atribuido depois, tem quer ser let (melhor que var)

if(forma === "quadrado"){
    area = altura * largura;
}else{
    area = (altura*largura)/2;
}
console.log(area);