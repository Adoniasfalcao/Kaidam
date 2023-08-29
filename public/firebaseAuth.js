

function logar() {
    var email = document.getElementById("emailUser").value;
    var senha = document.getElementById("passUser").value;

    var auth = null;
    
    firebase.auth().signInWithEmailAndPassword(email,senha)

    .then((userCredential) => {
        var user = userCredential.user;
        alert("Logado com sucesso! ");
        
        window.location.href="/public/Homepage/home.html";

    }).catch(function(error){
        alert(getErrorMessage(error));

    });
}


function registrar() {
    var email = document.getElementById("emailReg").value;
    var senha = document.getElementById("passReg").value;
    var confirmSenha = document.getElementById("confirmPass").value
    var auth = null;

    if (senha == confirmSenha) {
        firebase.auth().createUserWithEmailAndPassword(email,senha)
        
        .then((userCredential) => {
            var user = userCredential.user;
            alert(" Registrado com sucesso!");
            sendEmailVerification();

        }).catch(error => {
            alert(getErrorMessage(error));
        });


    } else {
        alert("Senhas não coincidem")
    }

}


function sendEmailVerification() {
    // [START auth_send_email_verification]
    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
        alert("Email de verificação enviado!")

    }).catch (error => {
        alert(getErrorMessage(error))
    });

    // [END auth_send_email_verification]
}


function sendPasswordReset() {
    var email = document.getElementById("emailUser").value;;
    // [START auth_send_password_reset]
    firebase.auth().sendPasswordResetEmail(email)

      .then(() => {
        alert("Email de reset enviado!");
        
      }).catch (error => {
        alert(getErrorMessage(error));

      });

}


function getErrorMessage(error) {
    if (error.code == 'auth/email-already-in-use' ) {
        return "Email já está em uso";
    }

    else if (error.code == 'auth/network-request-failed') {
        return "Falha na network request, tente novamente..";
    }

    else if (error.code == 'auth/wrong-password') {
        return "Senha inválida";
    }

    else if (error.code == 'auth/user-not-found'){
        return "Usuário não encontrado";
    }

    else if (error.code == 'auth/missing-email'){
        return "Email vazio!"
    }

    return error.message;
}