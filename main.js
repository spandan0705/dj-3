music_1='music.mp3';
music_2='music2.mp3';

    leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreLeftWrist=0;

function preload()
{
    song_1 = loadsong("music.mp3");
    song_2 = loadsong("music2.mp3");
}

    function setup()
    {
        canvas=createCanvas(600, 500);
        canvas.center();
    
        video=createCapture(VIDEO);
        video.hide();

        poseNet=ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotposes);
    }

    function draw()
    {
        image(video,0,0,600,500);
    }

    function modelLoaded()
{
    console.log('Pose Net is Initialized');
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("left wrist x ="+leftwristX +"left wrist Y ="+ leftwristY);

        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log("right wrist x ="+rightwristX +"right wrist Y ="+ rightwristY);
    }
}