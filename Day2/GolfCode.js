/*
In the game of golf each hole has a par which is the average number of strokes you are supposed to use to get the ball into the hole.
*/

var name=["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double-Bogey", "Go home!"];
function golfScore(par,strokes)
{
    if(strokes==1)
    {
        return name[0];
    }
    else if(strokes<=par-2)
    {
        return name[1];
    }
    else if(strokes==par-1)
    {
        return name[2];
    }
    else if(strokes==par)
    {
        return name[3];
    }
    else if(strokes==par+1)
    {
        return name[4];
    }
    else if(strokes==par+2)
    {
        return name[5];
    }
    else if(strokes>=par+3)
    {
        return name[6];
    }
    else
    {
        return "Change Me";
    }
}
console.log(golfScore(5,4))