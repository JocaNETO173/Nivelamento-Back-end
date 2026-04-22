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
    console.log('15 é positivo');
} else {
    console.log('15 é negativo');
};

//26. verifique se uma pessoa com 17 anos é maior de idade
let idade = 17;
if(idade >= 18){
    console.log(`Esta pessoa tem ${idade} anos e é maior de idade`);
} else {
    console.log(`Essa pessoa tem ${idade} anos, ou seja, é menor de idade`);
};
// 27. Crie um array com os números 10, 20, 30, 40 e exiba todos.
let arrayNum = [10, 20, 30, 40];
console.log(arrayNum);

// 28. Crie um array com 5 frutas e exiba a primeira fruta.

let frutas = ['abacate', 'banana', 'caju', 'damasco', 'pitaia'];
console.log(` a primeira fruta do array é ${frutas[0]}`);

//29. adicione o número 50 no final do array [10, 20, 30, 40]
let arrayNum1 = [10,20,30,40];
arrayNum1.push(50);
console.log(arrayNum1);

//30. Remova o último elemento do array [1, 2, 3, 4, 5]
let arrayNum2 = [1, 2, 3, 4, 5];
arrayNum2.pop();
console.log(arrayNum2);

//31. Exiba quantos elementos tem o array [5, 10, 15, 20]
let arrayNum3 = [5,10,15,20];
console.log(`Este array tem ${arrayNum3.length} elementos`);

// 32: Some todos os números do array [2, 4, 6, 8]
let arrayNum4 = [2,4,6,8]
soma = 0;
for(let i =0;i<arrayNum4.length;i++){
    soma += arrayNum4[i]
}
console.log(`A soma de todos os números do array [${arrayNum4}] é ${soma}`)
// 33: Multiplique cada elemento do array [1, 2, 3, 4] por 2
let arrayNum5=[1,2,3,4];
let arrayNum5Mult=[];
for(let i=0;i<arrayNum5.length;i++){
   arrayNum5Mult.push(arrayNum5[i] * 2)
}
console.log(`o array [${arrayNum5}] multiplicado por 2, fica [${arrayNum5Mult}]`)

// 34: Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]
let frutas2 = ["maçã","banana","uva"]
for(let i=0;i<frutas2.length;i++){
    if(frutas2[i] === "laranja"){
        console.log("Laranja existe nesse array")
    } else {
        console.log("Laranja não existe nesse array")
    }
}

// 35: Exiba um por um os elementos do array ["azul", "verde", "amarelo"]
let array35 = ["azul","verde","amarelo"];
for(let i=0;i<array35.length;i++){
    console.log(array35[i])
}


// 36: Exiba o último elemento do array [100, 200, 300, 400, 500]
let array36 = [100, 200, 300, 400, 500];
console.log(array36[array36.length - 1])

// ==================== ATIVIDADES COM MATRIZ ====================

// 37: Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda
let matriz37 = [
    [1,2],
    [3,4]
];

// 38: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]
let matriz38 = [[5, 6], [7, 8]];
console.log(matriz38[0][1])

// 39: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]
let matriz39 = [[1, 2, 3], [4, 5, 6]];
console.log(matriz39);

// 40: Some todos os números da matriz [[2, 4], [6, 8]]
let matriz40 = [[2, 4], [6, 8]];
let somaTotal = 0;

for(let i =0;i<matriz40.length;i++){
    for(let j=0;j<matriz40[i].length;j++){
        somaTotal += matriz40[i][j];
    }
}
console.log(somaTotal);

// 41: Crie uma matriz 3x3 com números de 1 a 9
let matriz41 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz41);

// 42: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]
let matriz42 = [[1,2,3],[4,5,6],[7,8,9]];
for(let i=0;i<matriz42.length;i++){
    for(let j=0;j<matriz42[i].length;j++){
        [0][0], 
    }
}

// 43: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10

// 44: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]

// 45: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]

// 46: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2


// ==================== ATIVIDADES COM OBJETOS ====================

// 47: Crie um objeto pessoa com nome "Ana" e idade 25
let pessoa = {
    nome: "Ana",
    idade: 25,
};

// 48: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}
let pessoa2 = {
    nome: "Carlos",
    cidade: "São Paulo"
};

console.log(`Nome ${pessoa2.nome}`);

// 49: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
let pessoa3 = {
    nome: "Maria",
    idade: 20
}
console.log(pessoa3)

pessoa3.curso = "T.I.";
console.log(pessoa3);

// 50: Altere a idade do objeto {nome: "João", idade: 18} para 19
let pessoa4 = {nome: "João", idade: 18};

console.log(pessoa4);

pessoa4.idade = 19;

console.log(pessoa4);

// 51: Remova a propriedade "telefone" do objeto {nome: "Pedro", telefone: "99999-9999"}
let pessoa5 = {nome: "Pedro", telefone: "99999-9999"};

console.log(pessoa5);

delete pessoa5.telefone

console.log(pessoa5);

// 52: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}
let pessoa6 = {marca: "Nike", tamanho: 42, cor: "preto"};

console.log(pessoa6);

// 53: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"
let cachorro = {
    nome: "Rex",
    metodo: function latir(){
        return "Au au!";
    }
}

console.log();

// 54: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]
let aluno = {
    nome: "Lucas",
    notas: [8, 7, 9],
};

console.log(aluno);

// 55: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"
let carro = {
    marca: "Fiat",
    motor: "1.0"
}

// 56: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos
let array56 = [
    produto1 = {nome: "Queijo Defumado", preco: 60.00},
    produto2 = {nome: "Queijo Provolone", preco: 86.00},
    produto3 = {nome: "Queijo Gorgonzola", preco: 150.00}
];

console.log(array56);