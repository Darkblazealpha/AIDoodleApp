let canvas,classifier;
function setup() {
  canvas=createCanvas(400, 400);
  canvas.center();
  background("pink");
  classifier = ml5.imageClassifier("DoodleNet",modelLoaded);
  canvas.mouseReleased(classifyCanvas);
}

function classifyCanvas(){
  classifier.classify(canvas, gotResult);
}

function gotResult(results){
  console.log(results);
  document.getElementById('name').innerHTML=results[0].label;
  document.getElementById('accuracy').innerHTML=(results[0].confidence*100).toFixed(2)+ "%";
}

function modelLoaded(){
  console.log("The model is loaded")
}

function draw() {
  strokeWeight(13);
  stroke("green");
  if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function clearCanvas(){
  background("pink")
}
