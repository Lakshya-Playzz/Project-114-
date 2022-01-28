Mustache_x = 10
Mustache_y = 10
function preload(){
    image1 = loadImage("Mustache.png")
    }
function setup(){
    canvas = createCanvas(400,300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(400,300)
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded); 
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded()
{
    console.log("poseNet is Loaded")
}
function gotPoses(results){
    console.log(results)
    if(results.length > 0){
        Mustache_x = results[0].pose.nose.x-50
        Mustache_y = results[0].pose.nose.y 
    }
}
function take_snapshot(){
    save("selfie.png")
}

function draw(){
    image(video,0,0,400,300)
    image(image1 , Mustache_x , Mustache_y , 100,40)
}