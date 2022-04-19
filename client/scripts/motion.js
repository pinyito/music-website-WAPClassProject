function preventBack(){
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload=function(){null};

//Check if session expired and redirect page to
const sessionStringsUrl = 'http://localhost:3000/session-strings';
fetch(sessionStringsUrl)
    .then(response => response.json())
    .then(data => validateSession(data));

function validateSession(sessionData){
    let sessionExpired = false;
    for(let i = 0; i < sessionStorage.length; i++){
        const key = sessionStorage.key(i);
        for(let j = 0; j < sessionData.length; j++){
            if(sessionStorage.getItem(key) === sessionData[j]){
                sessionExpired = true;
                break;
            }
        }
        if(sessionExpired){
            location.replace = "index.html";
        }
    }
}