var i=0;
var userQuestion=["2021 is going to be great for me?","Am i going to die in coming 2 years","Am i able to lose fat?","Am i important to my friends?","Am i going to get promotion in few months?","Am i going to get a salary raise this year?","Am i going to be terminated from the current company soon?","Am i be able to do exercise regularly?"];
var arrAns=["It is certain.","Ask again later.","Don’t count on it.","Yes – definitely.","Better not to tell you now.","My sources say no.","Signs point to yes.","As I see it, yes.","Cannot predict now.","Very doubtful."];
function storeUser()
{
    localStorage.setItem('username',document.getElementById('user').value);
}
function user1()
{
    var username=localStorage.getItem('username');
    (username!=null)?document.getElementById('lblUser').innerHTML="Welcome "+username:document.getElementById('lblUser').innerHTML="Hello User";
    printQues();
    
}
function game()
{
    debugger;    
    document.getElementById('lblans').innerHTML="";
    if(i<8)
    {
        printQues();
        document.getElementById('btnContinue').value="Continue";
    }
    else
    {
        //document.getElementById('quesHeading').innerHTML="";
        document.getElementById('lblans').innerHTML="";
        document.getElementById('btnContinue').value="Play Again!";
        document.getElementById('question').innerHTML="Hope you enjoyed the game...<br> Click on Play again to enjoy the game again or quit to play it later.";
        document.getElementById('quesNo').innerHTML="Thank You for playing this game";
    }
}
function printQues()
{
    document.getElementById('quesNo').innerHTML="Question "+parseInt(i+1);
    document.getElementById('question').innerHTML=userQuestion[i];
    var img1=document.createElement("img");
    img1.src="loader1.gif";
    img1.className="loader";
    img1.alt="loader";
    img1.style.display="inline";
    document.getElementById('lblans').appendChild(img1);
    setTimeout(function(){ 
        document.getElementById('lblans').removeChild(img1);
        document.getElementById('lblans').innerHTML="<b style='font-style:initial;'>Result:  </b>"+arrAns[getRandomInt(9)];
    }, 1000);
}
function Continue()
{
    if(document.getElementById('btnContinue').value=="Continue")
    {
        i++;
    }
    else
    {
        debugger;
        i=0;
    }
    game();
}
function quit()
{
    i=0;
    localStorage.clear();
    location.replace("index.html");
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
