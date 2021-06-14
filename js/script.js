function validation(){
	//alert("work");
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("Email").value;
	var senha = document.getElementById("senha").value;
	var erro = document.getElementById("error_message");
	var txt,txe,txs;

	erro.style.padding = "10px";	
	
	if(nome.length < 5){
		txt = "nome menor";
		erro.innerHTML = txt;
		return false;
	}
	
	if(email.indexOf("@") == -1 || email.length < 6){
		txe = "email muito pequeno";
		erro.innerHTML = txe;
		return false;
	}	
	
	if(senha.length < 7){
		txs = "senha pequena";
		erro.innerHTML = txs;
		return false;	
	}
	alert("cadastrado com sucesso!")
	return true;
	
}
		
	