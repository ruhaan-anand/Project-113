
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 80, 80, 480, 320);

    fill(255, 0, 0);
    stroke(0, 0, 255);
    square(0, 0, 80);
    square(560, 0, 80);
    square(560, 400, 80)
    square(0, 400, 80);

    fill(0, 0, 255);
    stroke(255, 0, 0);
    square(280, 0, 80)
    square(280, 400, 80)
    square(0, 200, 80)
    square(560, 200, 80)

    fill(0, 255, 0);
    stroke(0, 0, 255);
    rect(80, 30, 200, 30)
    rect(360, 30, 200, 30)
    rect(80, 430, 200, 30)
    rect(360, 430, 200, 30)
    rect(30, 80, 30, 120)
    rect(30, 280, 30, 120)
    rect(590, 280, 30, 120)
    rect(590, 80, 30, 120)
}