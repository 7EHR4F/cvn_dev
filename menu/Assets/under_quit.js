#pragma strict
var isQuitButton = false;
 GameObject.Find("under_quit").renderer.enabled = false;
function OnMouseEnter()
{
 GameObject.Find("under_quit").renderer.enabled = true;

}

 

function OnMouseExit()
{ 
 GameObject.Find("under_quit").renderer.enabled = false;

 }

 function OnMouseUp()

{

    //Are We Dealing With A Quit Button

    if( isQuitButton )

    {
print ("You clicked the button Quit!");
        //QuitTheGame

        Application.Quit();

    }
}
