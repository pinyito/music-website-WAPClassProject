
const users = [
    {
        id: "pinyito1",
        username: "pinyito",
        password: "123",
        playlist: []
    },
    {
        id: "eliot2",
        username: "eliot",
        password: "321",
        playlist: []
    }

];

const songList = [
    {
        id: "1",
        title: "Song title one",
        release: new Date()
    },
    {
        id: "2",
        title: "Song title two",
        release: new Date()
    },
    {
        id: "3",
        title: "Song title three",
        release: new Date()
    },
    {
        id: "4",
        title: "Song title four",
        release: new Date()
    },
    {
        id: "5",
        title: "Song title five",
        release: new Date()
    }
];

const sessionStrings = [];

module.exports.verifyUser = function(name, pass){
    let index = users.findIndex(user => user.username === name && user.password === pass);
    if(index > -1){
        let sessionString = users[index].username + '|' + new Date();
        sessionStrings.push(sessionString);
        return sessionString;
    }else{
        return "";
    }
}

module.exports.loadSongs = function(){
    return songList;
}

module.exports.getSessionStrings = function(){
    return sessionStrings;
}