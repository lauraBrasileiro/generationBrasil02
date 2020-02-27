function mostrar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var nascimento = document.getElementById("nascimento").value
            //  2020/02/27 >>  27/02/2020
            // 12345678910 >> 89105671234
        var dia = nascimento.substring(8,10)
        var mes = nascimento.substring(5,7)
        var ano = nascimento.substring(0,4)
        nascimento = dia + "/" + mes + "/" + ano
    var observacao = document.getElementById("observacao").value
    var estados = document.getElementById("estados").value
    var senha = document.getElementById("senha").value
    
    var genero = document.querySelector("input[name='genero']:checked").value

    var almoco=document.getElementById ("almoco").checked
        if(almoco===true){
            almoco="sim"
        }
        else{
            almoco="nao"
        }
    var valetransporte= document.getElementById("valetransporte").checked
        if(valetransporte===true){
            valetransporte = "sim"
        }
        else{
            valetransporte = "nao"
        }
    
    
    var completo = 
    "Nome: " + nome + "\n" + 
    "Idade: " + idade + "\n" + 
    "Nascimento: " + nascimento + "\n" + 
    "Observação: " + observacao + "\n" +
    "Estado: " + estados + "\n" + 
    "Senha: " + senha + "\n" +
    "Gênero: " + genero + "\n" +
    "Almoço: " + almoco + "\n" +
    "Vale Transporte: " + valetransporte



    alert(completo)
}









