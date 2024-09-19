// Load the images of the flags into an array. This will be the order in which they are displayed.
let flags = ["pa.svg", "bo.svg", "ad.svg", "gb.svg", "na.svg"];

// Array to store the correct option
let correct = [2, 2, 1, 1, 0];

// Array to store the countries to show in each round
let options = [];
// Load into the options array the options to show in each round
options.push(["SOUTH AFRICA", "SINGAPORE", "PANAMA"]);
options.push(["PERU", "ITALY", "BOLIVIA"]);
options.push(["TUNISIA", "ANDORRA", "ANTIGUA AND BARBUDA"]);
options.push(["UKRAINE", "UNITED KINGDOM", "MADAGASCAR"]);
options.push(["NAMIBIA", "OMAN", "ETHIOPIA"]);

// Variable to store the current position
let currentPosition = 0;
// Variable to store the number of correct answers so far
let numberCorrect = 0;

function startGame() {
    // Reset the variables
    currentPosition = 0;
    numberCorrect = 0;
    // Activate the necessary screens
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    loadFlag();
}

// Function to load the next flag and its options
function loadFlag() {
    // Check if there are no more flags
    if (flags.length <= currentPosition) {
        endGame();
    } else { // Load the options
        // Clear the classes that were assigned
        clearOptions();

        document.getElementById("flagImage").src = "img/" + flags[currentPosition];
        document.getElementById("n0").innerHTML = options[currentPosition][0];
        document.getElementById("n1").innerHTML = options[currentPosition][1];
        document.getElementById("n2").innerHTML = options[currentPosition][2];
    }
}

function clearOptions() {
    document.getElementById("n0").className = "name";
    document.getElementById("n1").className = "name";
    document.getElementById("n2").className = "name";

    document.getElementById("l0").className = "letter";
    document.getElementById("l1").className = "letter";
    document.getElementById("l2").className = "letter";
}

function checkAnswer(chosenOption) {
    if (chosenOption == correct[currentPosition]) { // Correct
        // Add classes to color the chosen option green
        document.getElementById("n" + chosenOption).className = "name nameCorrect";
        document.getElementById("l" + chosenOption).className = "letter letterCorrect";
        numberCorrect++;
    } else { // Incorrect
        // Add classes to color the chosen option red
        document.getElementById("n" + chosenOption).className = "name nameIncorrect";
        document.getElementById("l" + chosenOption).className = "letter letterIncorrect";

        // The option that was correct
        document.getElementById("n" + correct[currentPosition]).className = "name nameCorrect";
        document.getElementById("l" + correct[currentPosition]).className = "letter letterCorrect";
    }
    currentPosition++;
    // Wait 1 second and then show the next flag and its options
    setTimeout(loadFlag, 1000);
}
function endGame() {
    // Hide the screens and show the final screen
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    // Add the results
    document.getElementById("numCorrect").innerHTML = numberCorrect;
    document.getElementById("numIncorrect").innerHTML = flags.length - numberCorrect;
}

function returnToStart() {
    // Hide the screens and activate the start screen
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
}
