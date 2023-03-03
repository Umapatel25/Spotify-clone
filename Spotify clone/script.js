let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogress=document.getElementById('myprogress');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementById('songItem'));
let mastersongname=document.getElementById('mastersongname');
 
let song=[
    {songname:"Shut down",filepath:"song/1.mp3  ",coverpath:"cover1.jpg"},
    {songname:"Pink Venom",filepath:"song/2.mp3",coverpath:"cover2.jifi"},
    {songname:"Kill this Love",filepath:"song/3.mp3",coverpath:"cover3.jifi"},
    {songname:"Boombayah",filepath:"song/4.mp3",coverpath:"cover4.jifi"},
    {songname:"Ice-cream",filepath:"song/5.mp3",coverpath:"cover5.jifi"}
]

songItem.forEach((element,i)=>{
    
    element.getElementByTagName("img")[0].src=song[i].coverpath;
    element.getElementByClassName("songname")[0].innerText=song[i].songname;

})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play'); 
        gif.style.opacity=0;
    }
}
)
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value=progress;
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value*audioElement.duration/100;  
})

const makeAllplays = ()=>{
    
    Array.from(document.getElementByClassName('songlistplay')).forEach((element)=>{
        element.target.classList.remove('fa-circle-pause');
        element.target.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementById('songlistplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src ='song/$(songIndex).mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause'); 

    })

})
 
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }else{
        songIndex += 1;
    }
    audioElement.src ='song/$(songIndex).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause'); 

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex -= 1;
    }
    audioElement.src ='song/$(songIndex).mp3';  
   // mastersongname.innerText=song[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause'); 

})