
// Função para botão
function guardaFormulario(){

    //Capturar valores e criar variavel para novo objeto (JSON)
    var formCLiente = new Object();

    formCLiente.nome = document.getElementById("nome").value;
    formCLiente.sobrenome = document.getElementById("sobrenome").value;
    formCLiente.idade = document.getElementById("idade").value;
    formCLiente.telefone = document.getElementById("telefone").value;
    formCLiente.email = document.getElementById("email").value;
    formCLiente.profissao = document.getElementById("profissao").value;

    //Converter para String JSON
    var json = JSON.stringify(formCLiente);
    console.log(formCLiente);

    //Retorna o valor primitivo de um objeto
    console.log(formCLiente.valueOf());

    //Valor para a div print ja convertido para string
    document.getElementById("Nome").innerText =`nome: ` + formCLiente.nome;
    document.getElementById("Sobrenome").innerText =`Sobrenome: ` + formCLiente.sobrenome;
    document.getElementById("Idade").innerText = `Idade` + formCLiente.idade;
    document.getElementById("Telefone").innerText =`Telefone: ` + formCLiente.telefone;
    document.getElementById("Email").innerText =`E-mail: ` + formCLiente.email;
    document.getElementById("Profissao").innerText =`Profissão: ` + formCLiente.profissao;

    window.print(print);


}

/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}