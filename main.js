music1 = 0;
music2 = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    function modelLoaded(){
        console.log("PoseNet is Initialised");
    }

    poseNet.on('pose', gotPoses());
    poseNet= ml5.poseNet(video, modelLoaded());
}

function preload() 
{ 
    song = loadSound("music.mp3"); 
    song = loadSound("music2.mp3");
}


function draw(){
    image(video, 0, 0, 600, 500);
}
