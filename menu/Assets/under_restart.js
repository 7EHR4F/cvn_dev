#pragma strict
 GameObject.Find("under_restart").renderer.enabled = false;
function OnMouseEnter()
{
 GameObject.Find("under_restart").renderer.enabled = true;

}

 

function OnMouseExit()
{ 
 GameObject.Find("under_restart").renderer.enabled = false;

 }

 function OnMouseUp()

{

 print ("You clicked the button Play!");
        Application.LoadLevel(1);
}
