var textoH1 = document.getElementById("titulo")
alert(textoH1.textContent)
textoH1.className = "vermelha"
textoH1.textContent= "texto alterado pelo JS"

//lembrete que da pra fazer das duas formas: a diferente de chamar pelo nome é que pode ter mais de um e precisa de colocar a posicoa
var textoH3 = document.getElementsByTagName("h3")[0]
alert(textoH3.textContent)

var textoLi = document.getElementsByClassName("verde")[3]
alert(textoLi.textContent)



var textoClasseVerde = document.getElementsByClassName("verde")
/* cria-se um array; 
o array tem o tamanho do item de listas*/

for (var posicao=0; posicao<textoClasseVerde.length; posicao++){
    alert(textoClasseVerde[posicao].textContent)
}

/* outra forma de fazer o mesmo coiso */

var  textoLiVerde = document.querySelectorAll("li.verde")
for (var posicao=0; posicao<textoLiVerde.length; posicao++){
    alert("conteudo pego querySelector - " + textoLiVerde[posicao].textContent)
}




