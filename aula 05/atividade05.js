var numero = Number(prompt("Diga um número"));
if (numero > 0) {
    alert("Seu número é positivo");
}
if (numero < 0) {
    alert("Seu número é negativo!");
}
if (numero == 0) {
    alert("Seu número é igual a zero.");
}
//Questão 02
var idade = Number(prompt("Qual sua idade?"));
if (idade < 18) {
    prompt("Você ainda é menor de idade");
}
if (idade >= 18) {
    prompt("Você é maior de idade");
}
//Questão 03
var num = Number(prompt("Diga um número"));
var num2 = Number(prompt("Diga outro número"));
if (num > num2) {
    alert("".concat(num, " \u00E9 maior que ").concat(num2));
}
if (num2 > num) {
    alert("".concat(num2, " \u00E9 maior que ").concat(num));
}
if (num === num2) {
    alert("Ambos são iguais.");
}
//Questão 04
var numeral = Number(prompt("Diga um número"));
if (numeral % 2 == 0) {
    alert("".concat(numeral, " \u00E9 par"));
}
else {
    alert("Este número é impar");
}
//Questão 05
var nota1 = Number(prompt("Qual a primeira nota?"));
var nota2 = Number(prompt("Qual a segunda nota?"));
var nota3 = Number(prompt("Qual a terceira nota?"));
var media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    alert("Você está aprovado!");
}
if (media < 7) {
    alert("Você reprovou :(");
}
//Questão 06
var nome1 = prompt("Qual seu nome?");
var nome2 = prompt("Diga o nome de outra pessoa");
var lernome = nome1 === null || nome1 === void 0 ? void 0 : nome1.length;
var lernome2 = nome2 === null || nome2 === void 0 ? void 0 : nome2.length;
if (lernome && lernome2 && lernome > lernome2) {
    alert("".concat(nome1, " tem o nome maior que ").concat(nome2));
}
if (lernome && lernome2 && lernome2 > lernome) {
    alert("".concat(nome2, " \u00E9 maior que ").concat(nome1));
}
//Questão 07
