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