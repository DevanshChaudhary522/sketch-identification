function preload(){
   classifier = ml5.imageClassifier('DoodleNet');
}
function draw(){
   strokeWeight(7);
   stroke(0);
   if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);

   }
   
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}
function clean(){
    background("white");
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);   

}

function gotResult(error,results){
     if (error){
        console.error(error);
     }
     console.log(results);
     document.getElementById('final_result').innerHTML='label:' + results[0].label;
     document.getElementById('final_percentage').innerHTML='confidence' + Math.round(results[0].confidence * 100) + '%';
     utterThis=new SpeechSynthesisUtterance(results[0].label);
     synth.speak(utterThis);

}
