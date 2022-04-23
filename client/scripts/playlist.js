

const logoutButton = document.getElementById('logout-button');
const repeatButton = document.getElementById('repeatBtn');
const shuffleButton = document.getElementById('shuffleBtn');
const playButton = document.getElementById('playBtn');
const pauseButton = document.getElementById('pauseBtn');
const previousButton = document.getElementById('previousBtn');
const nextButton = document.getElementById('nextBtn');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search');



toggleButtons(repeatButton, shuffleButton);
toggleButtons(playButton, pauseButton);



//Logout functionality --- session not considered yet
logoutButton.addEventListener('click', function(){
    //Go back to backend and delete session string
    sessionStorage.clear();
    location.href = "index.html";
});

//Search Song
searchButton.addEventListener('click', function(){
    let searchItem = searchInput.value
    if(searchItem === ""){
        document.getElementById('content-body').style.display = "block"
        document.getElementById('searchResults').style.display = "none";
        alert("Search Input Requireed...");
    }else{
        document.getElementById('content-body').style.display = "none"
        document.getElementById('searchResults').style.display = "block";
        let searchUrl = `http://localhost:3000/search?song=${searchItem}`;
        fetch(searchUrl)
        .then(response => response.json())
        .then(searchRsult => {
            const table = document.querySelector('table tbody');

            if(searchRsult.length === 0){
                table.innerHTML = "<tr><td class='no-data' colspan='4'>No search song available!</tr>";
            }else{
                let i = 1;
                let display = "";
                searchRsult.forEach(s => {
                    display = display + `<tr>
                    <td>${i}</td>
                    <td>${s.title}</td>
                    <td>${s.release}</td>
                    <td>
                        <button id="song${i}" type="button" class="btn btn-secondary addSong">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </td>
                    </tr>`;
                    i++;
                });
            table.innerHTML = display;
        }
    });
    }
});

//Fetch All songs
document.addEventListener('DOMContentLoaded',function(){
    let songUrl = 'http://localhost:3000/songs';
    fetch(songUrl)
    .then(response => response.json())
    .then(data => {
        const table = document.querySelector('table tbody');

        if(data.length === 0){
            table.innerHTML = "<tr><td class='no-data' colspan='4'>Songs not available!</tr>";
        }else{
            let i = 1;
            let display = "";
            data.forEach(s => {
                display = display + `<tr>
                <td>${i}</td>
                <td>${s.title}</td>
                <td>${s.release}</td>
                <td>
                    <button id="song${i}" type="button" class="btn btn-secondary addSong">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </td>
                </tr>`;
                i++;
            });
            table.innerHTML = display;

            //Render Play
            let playlistUrl = 'http://localhost:3000/playlist';
            fetch(playlistUrl)
            .then(response => response.json())
            .then(listData => {
                const songBody = document.querySelector('#playlist table tbody');
                let displayList = "";

                if(listData.length == 0){
                    document.getElementById('playlist').style.display = 'none';
                }else if(listData.length > 0){
                    document.getElementById('no-song').style.display = 'none';

                    let listing = 1;
                    for(let j = 0; j < listData.length; j++){
                        displayList += `<tr>
                            <td class="listIndex">${listing}</td>
                            <td>${listData[j].title}</td>
                            <td>
                                <button type="button" class="btn btn-secondary removeSong">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <button id="playBtn" type="button" class="btn btn-light player-control">
                                    <i class="fa-solid fa-circle-play"></i>
                                </button>
                            </d>
                        </tr>`;
                    }
                }
                songBody.innerHTML = displayList;
            });
            addToPlaylist();
        }
    });
});

function loadSongs(){
    
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

function addToPlaylist(){
    const addBtns = document.getElementsByClassName('addSong');
    for(let k = 0; k < addBtns.length; k++){
        addBtns[k].addEventListener('click', function(){
            const songTitle = this.parentElement.parentElement.childNodes[3].textContent;
            const playlistIndex = document.getElementsByClassName('listIndex');
            const nextIndex = parseInt(playlistIndex[playlistIndex.length - 1].textContent) + 1;
            const nextRow = document.createElement("tr");
            const nextIndexData = document.createElement("td");
            nextIndexData.classList.add("listIndex");
            nextIndexData.innerText = nextIndex;
            const nextIndexTitle = document.createElement("td");
            nextIndexTitle.innerText = songTitle;
            const nextIndexButtons = document.createElement("td");
            nextIndexButtons.innerHTML = `<button type="button" class="btn btn-secondary removeSong"><i class="fa-solid fa-minus"></i></button>
            <button id="playBtn" type="button" class="btn btn-light player-control">
                <i class="fa-solid fa-circle-play"></i>
            </button>`;
            nextRow.appendChild(nextIndexData)
            nextRow.appendChild(nextIndexTitle);
            nextRow.appendChild(nextIndexButtons);
            document.getElementById('playlistBody').appendChild(nextRow);
            this.disabled = true;
            removeFromPlaylist();
        });
    }
}

//Remove song from playlist...pending feature