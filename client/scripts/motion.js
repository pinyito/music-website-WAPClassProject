function preventBack(){
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload=function(){null};



/**MY BACKUP CODE 
 * 
 * 
 * 
 * 

const logoutButton = document.getElementById('logout-button');
const repeatButton = document.getElementById('repeatBtn');
const shuffleButton = document.getElementById('shuffleBtn');
const playButton = document.getElementById('playBtn');
const pauseButton = document.getElementById('pauseBtn');
const previousButton = document.getElementById('previousBtn');
const nextButton = document.getElementById('nextBtn');


//Logout functionality --- session not considered yet
logoutButton.addEventListener('click', function(){
    //Go back to backend and delete session string
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

//Music Player Functionalities
toggleButtons(repeatButton, shuffleButton);
toggleButtons(playButton, pauseButton);

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

function toggleButtons(btn1, btn2){
    btn1.addEventListener('click', function(){
        this.style.display = 'none';
        btn2.style.display = 'block';
    });
    btn2.addEventListener('click', function(){
        this.style.display = 'none';
        btn1.style.display = 'block';
    });
}
*/