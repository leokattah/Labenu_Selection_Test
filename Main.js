//Adicionando a função ValidateEmail():

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.form1.text1.focus();
    console.log("Deu certo");

    emaildigitado = document.getElementById("email"); // captura o que foi digitado no campo email

    //exibe a mensagem de boas vindas
    document.getElementById("email").innerHTML = "Bem vindo " + emaildigitado.value + "!"; 

    return true;
    } 
    
    else {
    alert('Email inválido');
    document.form1.text1.focus();
    return false;
  }
}


