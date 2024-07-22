let numero = Number(prompt("Diga um número"))
if (numero>0){
alert("Seu número é positivo")
}
if (numero<0){
    alert("Seu número é negativo!")
}
if (numero==0){
    alert("Seu número é igual a zero.")
}
//Questão 02
let idade = Number(prompt("Qual sua idade?"))

if (idade<18){
    prompt("Você ainda é menor de idade")
}
if (idade>=18){
    prompt("Você é maior de idade")
}
//Questão 03
let num = Number(prompt("Diga um número"))
let num2 = Number(prompt("Diga outro número"))
if (num>num2){
    alert(`${num} é maior que ${num2}`)
}
if (num2>num){
    alert(`${num2} é maior que ${num}`)
}
if (num===num2){
    alert("Ambos são iguais.")
}
//Questão 04
let numeral = Number(prompt("Diga um número"))
if (numeral%2==0){
    alert(`${numeral} é par`)
} else{
alert("Este número é impar")
}
//Questão 05
let nota1= Number(prompt("Qual a primeira nota?"))
let nota2= Number(prompt("Qual a segunda nota?"))
let nota3= Number(prompt("Qual a terceira nota?"))
let media = (nota1+nota2+nota3)/3
if (media>=7){
    alert("Você está aprovado!")
}
if (media<7){
    alert("Você reprovou :(")
}
//Questão 06
let nome1= prompt("Qual seu nome?")
let nome2= prompt("Diga o nome de outra pessoa")
let lernome= nome1?.length
let lernome2= nome2?.length
if ( lernome && lernome2 && lernome>lernome2){
    alert(`${nome1} tem o nome maior que ${nome2}`)
}
if (lernome && lernome2 && lernome2>lernome){
    alert(`${nome2} é maior que ${nome1}`)
}
//Questão 07
let vogal: string[] = ["a","e","i","o","u"]
let caractere = prompt("Digite um caractere")
if (caractere && vogal.includes(caractere)){
    alert(`${caractere} é uma vogal`)
} else{
    alert(`${caractere} é uma consoante`)
}
//Questão 08
let numero1 = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite outro numero: "))
let numero3 = Number(prompt("Digite outro numero: "))
if (numero1>=numero2 && numero1>=numero3 && numero2>=numero3){
    alert(`${numero1},${numero2},${numero3}`)
}
if (numero1>=numero2 && numero1>=numero3 && numero3>=numero2){
    alert (`${numero1},${numero3},${numero2}`)
}
if (numero2>=numero1 && numero2>=numero3 && numero3>=numero1){
    alert(`${numero2},${numero3},${numero1}`)
}
if (numero2>=numero1 && numero2>=numero3 && numero1>=numero3){
    alert(`${numero2},${numero1},${numero3}`)
}
if (numero3>=numero1 && numero3>=numero1 && numero1>=numero2){
    alert(`${numero3},${numero1},${numero2}`)
}
if (numero3>=numero1 && numero3>=numero1 && numero2>=numero1){
    alert(`${numero3},${numero2},${numero1}`)
}
//Questão 09
