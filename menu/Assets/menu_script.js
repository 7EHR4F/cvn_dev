#pragma strict

var isQuitButton = false;

 

function OnMouseEnter()
{

}

 

function OnMouseExit()
{ 

 
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

    else

    {

        //LoadTheGame
print ("You clicked the button Play!");
        Application.LoadLevel(1);

    }

}