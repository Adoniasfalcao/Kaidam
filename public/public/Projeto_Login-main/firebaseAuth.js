

function logar() {
    var email = document.getElementById("emailUser").value;
    var senha = document.getElementById("passUser").value;
    var auth = null;
    
    firebase.auth().signInWithEmailAndPassword(email,senha)
    .then(function(user){
        alert("Logado com sucesso! ");
        auth = user;
        window.location.replace("/index.html");

    }).catch(function(error){
        alert("Falha ao logar, tente novamente... error: "+error.code)

    });
}


function registrar() {
    var email = document.getElementById("emailReg").value;
    var senha = document.getElementById("passReg").value;
    var confirmSenha = document.getElementById("confirmPass").value
    var auth = null;

    if (senha == confirmSenha) {
        firebase.auth().createUserWithEmailAndPassword(email,senha)
        
        .then(response => {
            alert("Registrado com sucesso!")


        }).catch(error => {
            alert("Falha ao registrar, tente novamente... error:" + error.code);
        });


    } else {
        alert("Senhas não coincidem")
    }

}


