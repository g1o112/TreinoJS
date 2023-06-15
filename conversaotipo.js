const  numero = 456;
const numerotext = "456";

//transformou o a variável numero para uma string e juntou as duas (deu: 456456)
console.log(numero + numerotext);

//convertendo antes que o js converta
//number() = transforma string para numero
//String()= transforma numero para string
// para tranformar um valor em uma String você também pode usar o toString(). Ex: console.log("O CEP é:" + CEP.toString());

// resultado a soma dos dois numeros (deu: 912)
console.log(numero + Number(numerotext))

//obs: se uma das variáveis tiver uma letra, a conta vai dar NaN (not a number). 

//Para retornar como numero valores booleanos:
// 1 = true no js
// 0 = false no js
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.

let usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.