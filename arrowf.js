//arrow function
//uma linha
const soma = (num1, num2) => num1 + num2;

//arrow function 2 ou mais linhas de inatrução
const somapq = (num1, num2) =>{
    if(num1 > 10 || num2 > 10){
        return "Digite um numero menor que 9";
    }else{
        return num1 + num2;
    }
}

console.log(somapq(11, 2));