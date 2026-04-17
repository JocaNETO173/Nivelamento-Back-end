/*============================================
Colégio Antonio de Moraes Barros
Professor; Edson F Alves
Curso técnico:
10 EXERCÍCIOS COM OPERADOR TERNÁRIO
Instrução: Resolva usando operador ternário (? :)
============================================*/

// anotação pessoal: Math.floor(Math.random()), Math.floor(Math.random() * (max - min + 1) + min) para definir uma "range"

/*EXERCÍCIO 1 (Fácil)
Verifique se um número é positivo ou não.*/
console.log("=== Exercício 1 ===");
let x = Math.floor(Math.random() * 20 - 10);
console.log(x)
let resultado1 = x > 0 ? "positivo" : "negativo";
console.log(`${x} é ${resultado1}`)

/*EXERCÍCIO 2 (Fácil)
Verifique se uma pessoa pode votar.
- Se sim, retorne "Pode votar"- Se não, "Não pode votar"*/
console.log("=== Exercício 2 ===");
let idade = Math.floor(Math.random() * (17 - 14 + 1) + 14);
let resultado2 = idade >= 16 ? "pode votar" : "não pode votar";
console.log(`Alguém com ${idade} anos ${resultado2}`)

/*EXERCÍCIO 3 (Fácil)
Descubra se um número é par ou ímpar.
- Se par, retorne "Par"- Se ímpar, retorne "Ímpar"*/
console.log("=== Exercício 3 ===");
let num3 = Math.floor(Math.random() * 10);
let resultado3 = num3 % 2 === 0 ? "par" : "ímpar";
console.log(`${num3} é ${resultado3}`);

/*EXERCÍCIO 4 (Fácil)
Crie uma verificação de nível de acesso.
- Se nível for "admin", retorne "Acesso total"
- Caso contrário, "Acesso restrito"*/
console.log("=== Exercício 4 ===");
let rand = Math.floor(Math.random() * 2);
let acessos = ["convidado", "admin"]
let nivel = acessos[rand];
let resultado4 = nivel === "admin" ? "Acesso total" : "Acesso restrito";
console.log(`Seu nível de acesso é ${nivel} ---> ${resultado4}`)

/*EXERCÍCIO 5 (Médio-Fácil)
Aplique desconto em um produto.
- Se preço > 100, aplique 10% de desconto (multiplicar por 0.9)
- Caso contrário, mantenha o preço original*/
console.log("=== Exercício 5 ===");
let preco = Math.floor(Math.random() * (150 - 80 + 1) + 80);
let resultado5 = preco > 100 ? "Maior que 100" : "Menor que 100";
let calculo = preco > 100 ? preco * 0.9 : preco;
console.log(`o preço de ${preco} é ${resultado5} então o novo preço será ${calculo}`);

/*EXERCÍCIO 6 (Médio-Fácil)
Classifique a situação do aluno baseado na média.
- Se nota >= 7, retorne "Aprovado"
- Caso contrário, "Reprovado"*/
console.log("=== Exercício 6 ===");
let nota1 = Math.floor(Math.random() * 10);
let nota2 = Math.floor(Math.random() * 10);
let nota3 = Math.floor(Math.random() * 10);
let media = ((nota1 + nota2 + nota3) / 3).toFixed(0);
let resultado6 = media >= 7 ? "Aprovado" : "Reprovado";
console.log(`As notas do aluno são ${nota1}, ${nota2}, ${nota3}.\n A média dessas notas são ${media}.\n Então o Aluno está ${resultado6}.`);

/*EXERCÍCIO 7 (Médio)
Verifique se um número é par E maior que 10.
- Se sim, retorne "Atende critérios"
- Se não, "Não atende"*/
console.log("=== Exercício 7 ===");
let num7 = Math.floor(Math.random() * 15);
let resultado7 = num7 % 2 === 0 & num7 > 10 ? "Atende critérios" : "Não atende os critérios";
console.log(`o número ${num7} ${resultado7}.`);

// teste
let num7 = Math.floor(Math.random() * 15);
let verif1 = num7 % 2 === 0 ? true : false;
let verif2 = num7 > 10 ? true : false;
let verif3 = verif1 & verif2 === true ? "Atende os critérios" : "Não atende os critérios";
let verif4 = verif1 === true ? "Par" : "Ímpar";
let verif5 = verif2 === true ? "Maior que 10" : "Menor que 10";
console.log(`O número ${num7} é ${verif4} e ${verif5} ou seja, ele ${verif3}`);



/*EXERCÍCIO 8 (Médio)
Classifique o número em positivo, negativo ou zero.
- Se > 0: "Positivo"
- Se < 0: "Negativo"
- Se = 0: "Zero"*/
console.log("=== Exercício 8 ===");
let num8 = Math.floor(Math.random() * 20 - 10);
let resultado8 = (num8 >= 0) ? (num8 === 0 ? "Zero" : "Positivo") : "Negativo";
console.log(`O número ${num8} será classificado como ${resultado8}`)


/*EXERCÍCIO 9 (Médio)
Simule um login simples.
- Se usuario for "admin" E senha for "123", retorne "Login OK"
- Caso contrário, "Falha no login"*/
console.log("=== Exercício 9 ===");
let usuario = "admin";
let senha = "123";
let resultado9 = (usuario === "admin") ? (senha === "123" ? "Login OK" : "Falha no Login") : "Falha no Login";
console.log(resultado9);

/*EXERCÍCIO 10 (Médio)
Classifique a pessoa por idade:
- Menor que 12: "Criança"
- Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/
console.log("=== Exercício 10 ===");
let idade10 = Math.floor(Math.random()* 59 + 1);
let resultado10 = (idade10 < 12) ? "Criança" : (idade10 < 18) ? "Adolescente" : (idade10 < 60) ? "Adulto" : "Idoso";
console.log(`A idade é ${idade10} então a pessoa é classificada como ${resultado10}`);