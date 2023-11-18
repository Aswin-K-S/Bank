document.body.style.overflow = 'hidden';
function login() {
    
    if (acno.value in localStorage) {
        const accdt = JSON.parse(localStorage.getItem(acno.value));
        if (pswd.value === accdt.paswd) {
            alert('Login Successful');
            window.location = './home.html?acno=' + acno.value;
        } else {
            alert('Incorrect Password');
            acno.value = "";
            pswd.value = "";
        }
    } else {
        alert('Account not found');
        acno.value = "";
        pswd.value = "";
    }
}

   

 
