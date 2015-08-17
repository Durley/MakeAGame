#pragma strict

var coinEffect : Transform;
var coinValue = 1;

function OnTriggerEnter (info : Collider) 
{
	if (info.tag == "Player")
	{
		//Debug.Log("Add coin counter here");
		GameMaster.currentScore += coinValue;
		var effect = Instantiate(coinEffect, transform.position, transform.rotation);
		Destroy(effect.gameObject, 3);
		//Debug.Log("Coin picked up");
		Destroy(gameObject);
	}
}