var database;
var position;
var playerCount;
var gameState=0;
var form,player,game1;

function setup(){
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  game1 = new Game();
  game1.getState();
  game1.start();
}

function draw(){
  background("white");
}