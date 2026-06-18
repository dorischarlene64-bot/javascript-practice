// Low card -- count goes up //
// High card -- count goes down //
// MIddl value card -- count stays the same //
// If count is +ve -- player should bet high //
// If count is zero or -ve -- player should bet low //

var count=0;
function cc(card)
{
    switch(card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
         count++;
         break;
        case 10:
        case "j":
        case "Q":
        case "K":
        case "A":
          count--;
          break;
    }
    var holdbet="Hold";
    if(count>0)
    {
        holdbet='Bet';
    }
       return count + " " + holdbet;
}
    cc(2); 
    cc("K"); 
    cc(10); 
    cc("K"); 
    cc("A");
    console.log(cc(4));