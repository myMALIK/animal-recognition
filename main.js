//https://teachablemachine.withgoogle.com/models/fcVGKhbDp/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fcVGKhbDp/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}