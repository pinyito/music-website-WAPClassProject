
    //HTML DOM Objects
    const userName = document.getElementById('user');
    const userPassword = document.getElementById('pass');
    let loginAlert = document.getElementById('loginFail');
    const loginBtn = document.getElementById('login-button');

    //Helper variables
    var sessionKey;
    const loginUrl = 'http://localhost:3000/login';

    //Server-side interaction
    if(loginBtn){
        loginBtn.addEventListener('click', () => {
            if(userName.value === "" || userPassword.value === ""){
                loginAlert.innerHTML = "Username and password required!";
                loginAlert.style.display = "block";
            }else{
                fetch(loginUrl, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({username: userName.value, password: userPassword.value})
                })
                .then(response => response.json())
                .then(data => userLogin(data));
            }
        });
    }

    //Helper Functions
    function userLogin(userCredentials){
        if(userCredentials === ""){
            loginAlert.innerHTML = "Incorrect username or password!";
            loginAlert.style.display = "block";
        }
        else{
            sessionStorage.setItem(userName.value, userCredentials);
            location.href = "playlist.html";
        }
    }
