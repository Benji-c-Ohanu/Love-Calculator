
prompt("Enter First name");
prompt("Enter Second name");

var Lovescore=Math.random()*100;
Lovescore=Math.floor(Lovescore)+ 1;
if(Lovescore > 70)

{
alert("Your Love score is " + Lovescore + "%" + " You Love each other very much.");
}

if (Lovescore > 30 && Lovescore <=70)
{
alert("Your Love score is " + Lovescore + "%");

}

if (Lovescore <= 30)
{
alert("Your Love score is " + Lovescore + "%" + " You go together like oil and water.");

}
