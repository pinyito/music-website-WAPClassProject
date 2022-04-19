
//Logout functionality --- session not considered yet
let logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', function(){
    sessionStorage.clear();
    location.href = "index.html";
});

//Fetch All songs
document.addEventListener('DOMContentLoaded',function(){
    let songUrl = 'http://localhost:3000/songs';
    fetch(songUrl)
    .then(response => response.json())
    .then(data => loadMusic(data));
});

//Fetch user playlist******* 
document.addEventListener('DOMContentLoaded',function(){
    let songUrl = `http://localhost:3000/${username}`;
    fetch(songUrl)
    .then(response => response.json())
    .then(data => loadMusic(data));
});

//Helper functions
function loadMusic(music){
    const table = document.querySelector('table tbody');

    if(music.length === 0){
        table.innerHTML = "<tr><td class='no-data' colspan='4'>Songs not available!</tr>";
    }else{
        let i = 1;
        let display = "";
        music.forEach(s => {
            display = display + `<tr>
            <td>${i}</td>
            <td>${s.title}</td>
            <td>${s.release}</td>
            <td>
                <button id="song${i}" type="button" class="btn btn-secondary">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </td>
            </tr>`;
            i++;
        });
        table.innerHTML = display;
    }
}