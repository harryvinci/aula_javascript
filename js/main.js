/*
var nome = "Leonardo";
var frase = "Japão é o melhor time do mundo";
//alert("Bem-vindo " + nome);
console.log("Bem-vindo " + nome);
console.log(frase.replace("Japão", "Alemanha"));
console.log(frase.toUpperCase());
*/

/*
var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*
var fruta = {
    nome: "maçã",
    cor: "vermelha"
}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var idade = prompt("Informe sua idade");

if (idade >= 18){
    alert("Maior de idade!");
}
else{
    alert("menor de idade!");
};
*/
/*
var count = 0;
while (count < 10){
    console.log(count);
    count++;
};
*/
/*
var count;
for (count = 0; count <= 5; count++){
    console.log(count);
};
*/
/*
var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getMonth() + 1);
console.log(d.getFullYear());
*/
/*
var lista = ["Alemanha", "Inglaterra", "Escócia"];
lista.push("Polônia");
lista.pop("Inglaterra");
console.log(lista);
*/

/*
function soma(n1, n2){
    return n1 + n2;
};
n1 = prompt("Insira o primeiro número");
n2 = prompt("Insira o segundo número");
alert(soma(n1, n2));
*/
function redirect(){
    window.open("https://google.com/");
    //window.location.href = "https://google.com/";
};

function clicou(){
    document.getElementById("agradecimento").innerHTML = '<button type="button" onmouseover="redirect()">Clique Aqui</button>';
};
function trocar(elemento){
    elemento.innerHTML = "Novo texto aqui";
};
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
};
