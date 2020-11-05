let myShape;
let shapes = ["rock", "paper", "scissors"];
let buttons = document.querySelectorAll(".optionBtn");
let images = document.querySelectorAll("img");

// For loop
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(e){
        myShape = buttons[i].value.toLowerCase();
    });
}

// When form is submitted, do this functiom
document.querySelector("form").addEventListener("submit", function(e){

    // Prevents the site from refreshing
    e.preventDefault();
    
    console.log("Your shape: " + myShape);
    
    // This is a function, not a method
    function generateNum(){
        // returns a generated integer number between 1 and 3
        return Math.floor(Math.random() * 3) + 1;
    }
    
    // This function generates a random shape
    function generateShape(i){
        switch(i){
            case 1:
                return "rock";
                break;
            case 2:
                return "paper";
                break;
            default:
                return "scissors";
                break;
        }
    }
    
    // Decide a winner
    function startGame(x){
        if(x == "rock" && myShape == "paper"){
            images[1].src = "Images/" + myShape + "Hand.png";
            images[0].src = "Images/" + x + "Hand.png";
            images[1].style.display = "inline-block";
            images[0].style.display = "inline-block";
            return "Computer decided a shape: " + x + ". You won";
        } else if(x == "paper" && myShape == "scissors") {
            images[1].src = "Images/" + myShape + "Hand.png";
            images[0].src = "Images/" + x + "Hand.png";
            images[1].style.display = "inline-block";
            images[0].style.display = "inline-block";
            return "Computer decided a shape: " + x + ". You won";
        } else if(x == "scissors" && myShape == "rock"){
            images[1].src = "Images/" + myShape + "Hand.png";
            images[0].src = "Images/" + x + "Hand.png";
            images[1].style.display = "inline-block";
            images[0].style.display = "inline-block";
            return "Computer decided a shape: " + x + ". You won";
        } else if(x == myShape){
            images[1].src = "Images/" + myShape + "Hand.png";
            images[0].src = "Images/" + x + "Hand.png";
            images[1].style.display = "inline-block";
            images[0].style.display = "inline-block";
            return "Computer decided a shape: " + x + ". It's draw";
        } else if(shapes.indexOf(myShape) > -1){
            images[1].src = "Images/" + myShape + "Hand.png";
            images[0].src = "Images/" + x + "Hand.png";
            images[1].style.display = "inline-block";
            images[0].style.display = "inline-block";
            return "Computer decided a shape: " + x + ". Computer won";
        } else {
            return "Please choose one of the following: Rock, Paper, or Scissors";
        }
    }
    
    console.log(startGame(generateShape(generateNum())));
});