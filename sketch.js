var hypnoticball;
var database,position;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";
    var hypnoticballposition = database.ref("Ball/Position")
}
// we can read the position of the value in the database
function readPosition()
{
position = Data.val;
}
function showError()
{
    console.log("data not recieved from the database")
}
function draw(){
    background("white");
    
}
