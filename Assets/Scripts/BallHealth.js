#pragma strict

var maxFallDistance = -10;
var isRestarting = false;

var GameOverSound : AudioClip;

function Update () 
{
	if (transform.position.y <= maxFallDistance)
	{
		//Debug.Log("Test");
		if(isRestarting == false)
		{
		RestartLevel();
		}
	}
}

function RestartLevel () 
{
	isRestarting = true;
	GetComponent.<AudioSource>().clip = GameOverSound;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	Application.LoadLevel("Level01");
}
