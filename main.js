cat = ""
dog = ""
cow = ""
lion = ""
function start_classify() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nbUvy_oCe/model.json", modelReady)
}
function modelReady() {
    console.log("modelReady")
    classifier.classify(gotResult)
}
function gotResult(error, results) {
    if (error)
    {
        console.log(error)
    }
    else
    {
        console.log(results)
        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)
        document.getElementById("result_label").innerHTML = "I can Hear - " + results[0].label
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")"
        img = document.getElementById("animal")
        if (results[0].label == "Barking")
        {
            img.src = "barking.gif"
            dog = "dog + 1"
        }
        else if (results[0].label == "Meowing")
        {
            img.src = "meowing.gif"
            cat = "cat + 1"
        }
        else if (results[0].label == "Mooing")
        {
            img.src = "mooing.gif"
            cow = "cow + 1"
        }
        else if (results[0].label == "Roaring")
        {
            img.src = "roaring.gif"
            lion = "lion + 1"
        }
        else
        {
            img.src = "ear.gif"
        }
    }
}