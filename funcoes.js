let nome = "gio";

function imprime(texto){
    console.log(texto);
}

function soma(){
    return 2+2;
}

function quadrado(){
    const quadrado = soma() * soma();
    return quadrado;
}

imprime(soma());
imprime(nome);
imprime(quadrado());
