
const userData = [
    {   username: "pinyito",
        password: "123"
    }
];

let loginButton = document.getElementById('login-button');
let username = document.getElementById('user');
let userpass = document.getElementById('pass');
var userSession = username.value;

loginButton.addEventListener('click', () => {
    let userFound = true;
    for(let i = 0; i < userData.length; i++){
        if(username.value === userData[i].username && userpass.value === userData[i].password){
            sessionStorage.setItem(userData[i].username, Date);
            break;
        }else{
            userFound = false;
        }
    }
    if(userFound){
        //show user page
        location.href = "playlist.html";
    }else{
        //Error
        alert("User not found");
    }
});




