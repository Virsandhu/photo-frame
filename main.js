function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(120,250);
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video,60,100,530,330);
    ellipse(50, 50, 100, 100);
    rect(45, 100, 10, 300);
    ellipse(50, 430, 100, 100);
    rect(100, 50, 550, 10);
    ellipse(590, 50, 100, 100);
    rect(100, 430, 550, 10);
    ellipse(590, 430, 100, 100);
    rect(585, 100, 10, 280);
}

function take_snapshot(){
save('my pic in frame');
}

