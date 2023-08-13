console.log("Welcome to my Micro Project");

// Initialize the Variables
let index = 0;
let audioElement = new Audio('songs/1.mp3');
       
let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {
    songName: "Starboy",
    filePath: "songs/1.mp3",
    coverPath:"covers/cover1.jpg",
  },
  {
    songName: "Die For You",
    filePath: "songs/2.mp3",
    coverPath:"covers/cover2.jpg",
  },
  {
    songName: "Party Monster",
    filePath: "songs/3.mp3",
    coverPath:"covers/cover3.jpg",
  },
  {
    songName: "False Alarm",
    filePath: "songs/4.mp3",
    coverPath:"covers/cover4.jpg",
  },
  {
    songName: "Reminder",
    filePath: "songs/5.mp3",
    coverPath:"covers/cover5.jpg",
  },
  {
    songName: "Rockin'",
    filePath: "songs/6.mp3",
    coverPath:"covers/cover6.jpg",
  },
  {
    songName: "Secrets",
    filePath: "songs/7.mp3",
    coverPath:"covers/cover7.jpg",
  },
  {
    songName: "True Colors",
    filePath: "songs/8.mp3",
    coverPath:"covers/cover8.jpg",
  },
  {
    songName: "Sidewalks",
    filePath: "songs/9.mp3",
    coverPath:"covers/cover9.jpg",
  },
  {
    songName: "Attention",
    filePath: "songs/10.mp3",
    coverPath:"covers/cover10.jpg",
  },
  {
    songName: "Six Feet Under",
    filePath: "songs/11.mp3",
    coverPath:"covers/cover11.jpg",
  },
  {
    songName: "Love To Lay",
    filePath: "songs/12.mp3",
    coverPath:"covers/cover12.jpg",
  },
  {
    songName: "A Lonely Night",
    filePath: "songs/13.mp3",
    coverPath:"covers/cover13.jpg",
  },
  {
    songName: "I Feel It Coming",
    filePath: "songs/14.mp3",
    coverPath:"covers/cover14.jpg",
  },
]

songItem.forEach((element, i) =>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

//Handle play/pause click
        masterPlay.addEventListener("click", () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");
            
            gif.style.opacity = 0;
        }
        });

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // console.log('timeupdate')
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress)
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

});


const makeAllPlays = ()=> {
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=> {
      // console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // console.log(index);
        audioElement.currentTime = 0;
        audioElement.src =`songs/${index+1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(index>=13){
      index = 0
  }
  else{
      index += 1;
  }
  audioElement.src = `songs/${index+1}.mp3`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[index].songName;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(index<=0){
      index= 0
  }
  else{
      index -= 1;
  }
  audioElement.src = `songs/${index+1}.mp3`;
  masterSongName.innerText = songs[index].songName;
  audioElement.currentTime = 0;
  audioElement.play(); 
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
})