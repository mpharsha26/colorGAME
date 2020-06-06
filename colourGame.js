var colours = generateRandomColours(6);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1  = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numOfSquares = 6;

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colours = generateRandomColours(numOfSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for(var i=0; i<squares.length; i++)
    {
        if(colours[i])
            squares[i].style.background = colours[i];
        else    
            squares[i].style.display = "none";
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
})

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colours = generateRandomColours(numOfSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.background = colours[i];
        if(squares[i].style.display === "none")
            squares[i].style.display = "block";
    }

    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
})

colourDisplay.textContent = pickedColour;

resetButton.addEventListener("click",function(){
    colours = generateRandomColours(numOfSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for(var i=0; i<squares.length; i++)
        squares[i].style.background = colours[i];
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
})


for(var i = 0; i < squares.length; i++)
{
    squares[i].style.background = colours[i];
    squares[i].addEventListener("click",function(){
    var clickedColour = this.style.background; 
    if(clickedColour === pickedColour)
    {
        messageDisplay.textContent = "Correct!";
        changeColours(pickedColour);
        h1.style.background = clickedColour;
        resetButton.textContent = "Play Again";
    }
    else
    {   
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";
    }
    })
} 

function changeColours(colour)
{
    for(var i = 0;i< squares.length; i++)
        squares[i].style.background = colour;
}

function pickColour()
{
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num)
{
    var arr = [];
    for(var i =0; i<num ; i++)
    {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var random = "rgb(" + r + ", " + g + ", " + b + ")";
        arr.push(random);
    }
    return arr;
}