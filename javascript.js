const nextbutton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');


const movielist=[ "Awwwards-Winning-Website-main/videos/videoplayback (2).mp4",
    "Awwwards-Winning-Website-main/videos/hero-1.mp4","Awwwards-Winning-Website-main/videos/hero-2.mp4",
"Awwwards-Winning-Website-main/videos/hero-3.mp4","Awwwards-Winning-Website-main/videos/videoplayback.webm.mp4"
];

let index=0;
nextbutton.addEventListener("click",function(){
    
    video.src=movielist[index];;
    if(index===4){
        index=-1;
    }
    index+=1
})