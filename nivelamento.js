// nome: Joaquim Custódio Neto
// 1. exiba a mensagem "Olá Mundo" no console
console.log("Olá Mundo");
// 2. crie uma variável com seu nome e exiba o valor no no console
const nome = 'Joaquim';
console.log(nome);
// 3. Some dois números e exiba o resultado
let num1 = 5;
let num2 = 10;
console.log(num1 + num2);
// 4. Subtraia dois números e exiba o valor.
let sub = 10-20;
console.log(sub);
// 5. descubra o resto da divisão de um número por outro.
let resto = 15%3;
console.log(resto);
// 6. crie uma variável booleana(true false) e exiba seu valor.
let bool = true;
console.log(bool);
// 7. Verifique se um número é maior que outro e exiba o resultado.
if(10>3){
    console.log('É maior')
}
// 8. Crie duas variáveis com algum valor e exiba a concatenação
let var1 = 'Varíavel 1';
let var2 = 'Variável 2';
console.log(`mostrando a ${var1} e ${var2}`); // <--- concatenação é mostrar múltiplas variáveis de uma só vez.
// 9. descubra o tipo de uma variável
let num3 = 5;
console.log(typeof num3)
// 10. Converta número para string.
let numero = String(50);
console.log(typeof numero)
// 11. string pra numero
let texto = '123';
Number(texto)

// laços de repetição

// 12. exiba no console número de 0 a 10
for(let i=0;i<=10;i++){
    console.log(i);
}
// 13. Exiba apenas números pares até 20
for(let i=2;i<=20;i+=2){
    console.log(i);
}
// 14. Mostre no console numero de 10 até 1.
for(let i=10;i>=1;i--){
    console.log(i)
}
// 15. Some números de 1 a 5.
let x = 0
for(let i=1;i<=5;i++){
    x+=i;
    console.log(x)
}
// 16. faça a tabuada do 3.
for(let i=1;i<=10;i++){
    x=3;
    const multi = i * x;
    console.log(`${i} x 3 = ${multi}`);
}
//17. conte quantos números são maiores que 5
let lista = [2, 6, 8, 1, 3];
cont = 0
for(let i=0;i<lista.length;i++){
    if(lista[i] > 5){
        cont++
    }
}
console.log(`Essa lista tem ${cont} números que são maiores que 5.`)
// 18. Percorra a string letra por letra
let palavra = 'JFRS';
for(let i =0;i<palavra.length;i++){
    console.log(palavra[i])
}
// 19. Pare um loop quando encontrar o número 7, de 0 a 10
for(let i=0;i<=10;i++){
    console.log(i);
    if(i===7){
        break
    };
};

// 20. Crie uma função que exibe uma mensagem.
function mensagem(){
    console.log('esta mensagem foi gerada por uma função')
};
mensagem();

// 21. Função que multiplica dois números.
function multiply(a, b){
    return a * b;
};
console.log(multiply(2,3));
// 22. crie uma função que verifica se é par ou impar
function verificacao(x){
    if(x%2==0){
        return 'par'
    }
    else{
        return 'impar'
    };
}
console.log(verificacao(18))

// com ternário

function ternario(num){
    return num%2===0?"par" : "impar";
};
console.log(ternario(53));

//23. crie uma função que retorne o dobro.
function dobro(x){
    return x * 2;
}
console.log(dobro(35));

// 24. crie uma funç]ao que some elemento de um array.

function soma(array){
    total=0;
    for(let i=0;i<array.length;i++){
        total += array[i];
    }
    return total;
}
console.log(soma([5,30,2]));

// 25. Verifique se o número 15 é positivo e exiba uma mensagem
console.log(15 > 0);
// teste ternário
console.log(15>0? "par" : "impar");
//com if e else
if(15>0){
    console.log('15 é positivo')
}
else{
    console.log('15 é negativo')
}

//26. verifique se uma pessoa com 17 anos é maior de idade
let idade = 17
if(idade >= 18){
    console.log(`Esta pessoa tem ${idade} anos e é maior de idade`)
} else {
    console.log(`Essa pessoa tem ${idade} anos, ou seja, é menor de idade`)
};
// 27. Crie um array com os números 10, 20, 30, 40 e exiba todos.
let array_numeros = [10, 20, 30, 40]
console.log(array_numeros)

// 28. Crie um array com 5 frutas e exiba a primeira fruta.

let frutas = ['abacate', 'banana', 'caju', 'damasco', 'pitaia']
console.log(frutas[0])

//29. adicione o número 50 no final do array [10, 20, 30, 40]
let array_numeros1 = [10,20,30,40]
array_numeros1.push(50)
console.log(array_numeros1)

//30. Remova 