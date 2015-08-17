#pragma strict

static var currentScore : int = 0; //You can access from all the scripts

var offsetY : float = 40;
var sizeX : float = 90;
var sizeY : float = 25;

function Start () 
{
	currentScore = 0;
}

function OnGUI () 
{
	GUI.Box (new Rect (Screen.width/2-sizeX/2, offsetY, sizeX, sizeY), "Score: " + currentScore);
}