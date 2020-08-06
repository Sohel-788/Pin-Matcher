// Generate Pin Button 
document.getElementById("pin-generate").addEventListener('click', function() {
    let pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("pin-display").value = pin;

})

// Number Digit button

keyStroke("one");
keyStroke("two");
keyStroke("three");
keyStroke("four");
keyStroke("five");
keyStroke("six");
keyStroke("seven");
keyStroke("eight");
keyStroke("nine");
keyStroke("zero");

// Number Digit function 

function keyStroke(id) {
    document.getElementById(id).addEventListener("click", function() {
        let number = document.getElementById(id).innerText;
        let newnumber = document.getElementById("input-number").value

        document.getElementById("input-number").value = newnumber + number;
    })
}

// Submit button event handler
document.getElementById("submitBtn").addEventListener("click", function() {
    let inputNumber = document.getElementById("input-number").value;
    let outputPin = document.getElementById("pin-display").value;
    if (inputNumber == outputPin) {
        document.getElementById("input-number").value = "";
        document.getElementById("right-pin").style.display = "block";
        document.getElementById("wrong-pin").style.display = "none";
    } else {

        document.getElementById("input-number").value = "";
        document.getElementById("wrong-pin").style.display = "block";
        document.getElementById("wrong-pin").style.color = "#e67f7f";
        document.getElementById("right-pin").style.display = "none";

        action.innerText--;
        // var tryLeft = document.getElementById("action").innerText
        // var newtryLeft = tryLeft - 1; 
        // document.getElementById("action").innerText = newtryLeft;

    }
    // Button Disable 

    if (action.innerText < 1) {
        submitBtn.disabled = true;
        submitBtn.style.background = '#717277';
        action.innerText = 'Sorry no more';
    }
});
// C button 

document.getElementById("clear").addEventListener('click', function() {

    document.getElementById("input-number").value = null;
})

// > backspace button 

document.getElementById("remove").addEventListener('click', function() {

    var backspace = document.getElementById("input-number")
    backspace.value = backspace.value.substring(0, backspace.value.length - 1);

})