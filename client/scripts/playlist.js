
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

//Fetch Playlist
let playlistUrl = 'http://localhost:3000/playlist';
fetch(playlistUrl)
.then(response => response.json())
.then(listData => loadPlaylist(listData));

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

function loadPlaylist(songCollection){

    const songBody = document.querySelector('#playlist table tbody');
    let displayList = "";

    if(songCollection.length == 0){
        document.getElementById('playlist').style.display = 'none';
    }else if(songCollection.length > 0){
        document.getElementById('no-song').style.display = 'none';

        let listing = 1;
        for(let j = 0; j < songCollection.length; j++){
            displayList += `<tr>
            <td>${listing}</td>
            <td>${songCollection[j].title}</td>
            <td></d>
            </tr>`;
        }
    }
    songBody.innerHTML = displayList;
    console.log(songCollection);
}