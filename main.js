leftWristX=0;
rightWristX=0;
difference=0;


function setup(){
    video= createCapture (VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(580, 100)

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("darkgreen");
    textSize(difference);
    fill('lavender');
    text("Aleeza", 100, 100);

}

function modelLoaded(){
    console.log("PoseNet model is initialized")
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
}