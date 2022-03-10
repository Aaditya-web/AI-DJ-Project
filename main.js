leftWristx = 0;
leftWristy = 0;

rightWristx= 0;
rightWristy= 0;
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


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristx + "leftWristY" + leftWristy);
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightWristX= " + rightWristx + "rightWristY= " + rightWristy);
    }
}