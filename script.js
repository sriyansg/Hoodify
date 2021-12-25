console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let playgif = document.getElementById('playgif');
let masterSongName = document.getElementById('masterSongName');
let masterSongName2 =document.getElementById('masterSongName2');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let img=document.getElementById('album');

let songs = [
    { songName: "Mood", filePath: "music/1.mp3", coverPath: "abCovers/1.png" },
    { songName: "Heat Waves", filePath: "music/2.mp3", coverPath: "abCovers/2.png" },
    { songName: "Lovely", filePath: "music/3.mp3", coverPath: "abCovers/3.png" },
    { songName: "Remedy", filePath: "music/4.mp3", coverPath: "abCovers/4.png" },
    { songName: "Roxanne", filePath: "music/5.mp3", coverPath: "abCovers/5.png" },
    { songName: "Blinding Lights", filePath: "music/6.mp3", coverPath: "abCovers/6.png" },
]

songItems.forEach((Element, i) => {
    console.log(Element, i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})

//Handle play/pause click 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        playgif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        playgif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `music/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterSongName2.innerText = songs[songIndex].songName;
        album.src=`abCovers/${songIndex + 1}.png`;
        audioElement.currentTime = 0;
        audioElement.play();
        playgif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=> {
    if (songIndex >= 6) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongName2.innerText = songs[songIndex].songName;
    album.src=`abCovers/${songIndex + 1}.png`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongName2.innerText = songs[songIndex].songName;
    album.src=`abCovers/${songIndex + 1}.png`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

