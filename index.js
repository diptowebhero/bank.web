document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    //validation
    if(userEmail == 'dipwebhero@.com' && userPassword == 'webhero'){
        window.location.href ='banking.html';
    }
    else{
        console.log('invalid');
    }
})
