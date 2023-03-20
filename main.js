function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550)
    video.position(200, 200)

    canvas = createCanvas(550, 550);
    canvas.position(1000, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('coral');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
    }
}