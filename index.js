
// Exercício 1: Verificação de idade

// let idade = prompt("Digite sua idade: ")
// if(idade >= 18){
//     alert("Você é maior de idade!")
// }else{
//     alert("Você é menor de idade!")
// }



// ExercícioInter 1: Calculadora simples

// const num1 = Number(prompt("Digite o primeiro número: "))
// const num2 = Number(prompt("Digite o segundo número: "))
// const op = prompt("Digite a operação (+, -, *, /)")

// let result
// if(Number.isNaN(num1) || Number.isNaN(num2)){
//     alert("Erro: Digite apenas números válidos!")
// }else if(op === "+"){
//     result = num1 + num2
//     alert("Resultado da soma: " + result)
// }else if(op === "-"){
//     result = num1 - num2
//     alert("Resultado da subtração é: " + result)
// }else if(op === "*"){
//     result = num1 * num2
//     alert("Resultado da multiplicação é: " + result)
// }else if(op === "/"){
//     result = num1 / num2
//     alert("Resultado da divisão é: " + result)
// }else{
//     alert("Operação Inválida!")
// }



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// Exercícios Avançados
//Ex1 : Classificação de triangulos


// let a = Number(prompt("Digite o primeiro lado:"));
// let b = Number(prompt("Digite o segundo lado:"));
// let c = Number(prompt("Digite o terceiro lado:"));

// if (a < b + c && b < a + c && c < a + b) {
//     if (a === b && b === c) {
//         alert("Triângulo equilátero");
//     } else if (a === b || a === c || b === c) {
//         alert("Triângulo isósceles");
//     } else {
//         alert("Triângulo escaleno");
//     }
// } else {
//     alert("Os valores não formam um triângulo");
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Ex2: Notas

// let nota = Number(prompt("Digite a nota (0 a 100):"));
// let conceito;

// if (nota >= 90 && nota <= 100) {
//     conceito = "A";
// } else if (nota >= 80) {
//     conceito = "B";
// } else if (nota >= 70) {
//     conceito = "C";
// } else if (nota >= 60) {
//     conceito = "D";
// } else if (nota >= 0) {
//     conceito = "F";
// } else {
//     conceito = "Nota inválida";
// }

// alert("Conceito: " + conceito);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//Ex3: Calculo de IMC

// let peso = Number(prompt("Digite o peso (kg):"));
// let altura = Number(prompt("Digite a altura (m):"));

// let imc = peso / (altura * altura);
// let classificacao;

// if (imc < 18.5) {
//     classificacao = "Abaixo do peso";
// } else if (imc < 25) {
//     classificacao = "Peso normal";
// } else if (imc < 30) {
//     classificacao = "Sobrepeso";
// } else {
//     classificacao = "Obesidade";
// }

// alert(`IMC: ${imc.toFixed(2)}`);
// alert("Classificação:" + classificacao);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Ex4: Ano Bissexto


let ano = Number(prompt("Digite um ano:"));
let bissexto;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    bissexto = true;
} else {
    bissexto = false;
}

if (bissexto) {
    alert("O ano é bissexto");
} else {
    alert("O ano não é bissexto");
}
