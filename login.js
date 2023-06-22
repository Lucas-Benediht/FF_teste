function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso, Você realizou login!');
    }else{
        alert('Usuario ou senha incorreto');
    }
}