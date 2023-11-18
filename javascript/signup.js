


function register(){

const usrdt={
    usernm:usrnm.value,
    paswd:pswd.value,
    balance:0
}
    if(acno.value in localStorage){
        alert('Account already exist')
    }
    else if(acno.value && usrnm.value && pswd.value){
        localStorage.setItem(acno.value,JSON.stringify(usrdt))
        alert('Account successfully registered')
        window.location='./login.html'
    }
    else{
        alert('Form not complete')
    }
}