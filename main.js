function preload(){
img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
nosex="";
nosey="";
function setup(){

video=createCapture(VIDEO);
video.size(400,400);
video.hide();

canvas=createCanvas(400,400);
canvas.center();


posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', results);
}
function modelLoaded(){
    console.log("posenet is on :)");
}

function results(r){
if(r.length > 0){

    nosex=r[0].pose.nose.x-5;
    nosey=r[0].pose.nose.y;


}
}

function draw(){

image(video, 0, 0, 400, 400);
image(img, nosex, nosey, 30, 30);
}

































































































































































