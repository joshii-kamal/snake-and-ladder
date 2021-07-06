
var userName = "player1",userColor = "white";   // for testing
// var userName="" ,userColor;
var userBackground = document.getElementById('user');

document.getElementById('userRed').addEventListener('click', function(){
    userBackground.style.backgroundColor = 'red';
    userColor="red";
})
document.getElementById('userGreen').addEventListener('click', function(){
    userBackground.style.backgroundColor = 'green';
    userColor ="green";
})
document.getElementById('userBlue').addEventListener('click', function(){
    userBackground.style.backgroundColor = 'blue';
    userColor ="blue";   
})
document.getElementById('userYellow').addEventListener('click', function(){
    userBackground.style.backgroundColor = 'yellow';
    userColor ="yellow";
})

let computerName = "computer",computerColor = "black";

var submit = document.getElementById('submit');
submit.addEventListener('click', function(){

    var msgBox = document.getElementById('colorMessage');
    userName = document.getElementById('uName').value;
    if(!userName)
        msgBox.textContent = "NAME FEILD EMPTY!!!";
    else if(userColor === undefined)
        msgBox.textContent = "PLAYER COLOR NOT SELECTED!!";
    else if(userName.length > 10)
        msgBox.textContent = "Player Name TOOOO long";
    else{
        msgBox.textContent = "STARTING WAIT...";
        document.querySelector('#selectPlayer').classList.add('hidding');
    }    
    document.getElementById('userDiceName').textContent = userName;
    document.getElementById('userDiceName').style.color = userColor;

    messageBox.textContent = `${userName}'s turn`;
})


var userSteps=0;
var userPreviousSteps=[];
var uLength=0;

var computerSteps=0;
var computerPreviousSteps=[];
var cLength=0;
var cnt = 1;

var snake =[27,37,64,87,80,98];
var snakeEnd = [8,17,35,68,59,20];

var ladder =[4,9,36,76];
var ladderEnd = [67,50,63,95];
var winnerFlag=0;
const messageBox = document.querySelector('.messageBox');
let x=-5;
let flag=0;
let compcall=1;
let playerTurn = 0;
const updates = function(element, player,checkSnakeSix){
    setTimeout(function(){
        
        // snakebite
        if(player == "user")
            var snakeIndex = snake.indexOf(element);
        else    
            var snakeIndex = snake.indexOf(element);
        if(snakeIndex != -1){
            cnt=1;
            document.getElementById(`${snake[snakeIndex]}`).style.backgroundColor = 'rgb(131, 128, 128)';
            if(player == 'user'){
                playerTurn = 1;
                messageBox.textContent = `hehehehehehehe 🐍 "Snake Bite" Someone call the medic for - ${userName}.`;
                document.getElementById(`${snakeEnd[snakeIndex]}`).style.backgroundColor = userColor;
                userPreviousSteps=[];
                uLength =1;
                userSteps = snakeEnd[snakeIndex];
                userPreviousSteps.push(userSteps);
                // document
                if(checkSnakeSix == -1){
                    computer();
                    return;
                }
            }
            else{
                messageBox.textContent = `hahahahahahaha 🐍 "Snake Bite" Someone call the medic for - ${computerName}.`;
                document.getElementById(`${snakeEnd[snakeIndex]}`).style.backgroundColor = computerColor;
                compPreviousSteps=[];
                cLength =1;
                computerSteps = snakeEnd[snakeIndex];
                computerPreviousSteps.push(computerSteps);
                if(checkSnakeSix == 0){
                    x = -1;
                }
            }
        }

        // ladder
        if(player == "user")
            var ladderIndex = ladder.indexOf(element);
        else    
            var ladderIndex = ladder.indexOf(element);
        if(ladderIndex != -1){
            cnt = 1;
            document.getElementById(`${ladder[ladderIndex]}`).style.backgroundColor = 'rgb(131, 128, 128)';
            if(player == 'user'){
                messageBox.textContent = `-- yey ${userName} found shortcut----------🪜🪜🪜`;
                document.getElementById(`${ladderEnd[ladderIndex]}`).style.backgroundColor = userColor;
                // userPreviousSteps=[];
                userSteps = ladderEnd[ladderIndex];
                userPreviousSteps.push(userSteps);
                uLength++;
                console.log( uLength, "userLadder: ", userSteps);
            }
            else{
                messageBox.textContent = `-- yey ${computerName} found shortcut----------🪜🪜🪜`;
                document.getElementById(`${ladderEnd[ladderIndex]}`).style.backgroundColor = computerColor;
                // compPreviousSteps=[];
                computerSteps = ladderEnd[ladderIndex];
                computerPreviousSteps.push(computerSteps);
                cLength++;
                console.log(cLength, "computerLadder: ", computerSteps);
            }
        }
        
        
        //  intersection

        if(userPreviousSteps[uLength -1] == computerPreviousSteps[cLength - 1]){
            console.log("user: ",uLength, userPreviousSteps[uLength -1]);
            console.log("computer: " ,cLength, computerPreviousSteps[cLength -1]);
            
            if(flag == 0){
                messageBox.textContent = `❌❌❌----------OOPS Computer have to play from start----------❌❌❌`;
                // document.getElementById(`${computerPreviousSteps[cLength -1]}`).style.backgroundColor='rgb(131, 128, 128)';
                document.getElementById(`${userPreviousSteps[uLength -1]}`).style.backgroundColor=userColor;
                computerSteps=0;
                computerPreviousSteps=[];
                compcall = 0;
                playerTurn = 0;
                openCompPlayer = 0;
            }
            else{
                messageBox.textContent = `❌❌❌----------OOPS ${userName} have to play from start----------❌❌❌`;
                // document.getElementById(`${userPreviousSteps[uLength -1]}`).style.backgroundColor='rgb(131, 128, 128)';
                document.getElementById(`${computerPreviousSteps[cLength -1]}`).style.backgroundColor=computerColor;
                userSteps=0;
                userPreviousSteps=[];
                openPlayer = 0;
                computer();
            }
            return;
        }
    },700);
}
let openCompPlayer = 0,randomNum;
// x is used to check if player gets 6 nd also gets cutted by snake then he won't get another turn.
function computer(){
    setTimeout(function(){
        if(openCompPlayer == 0){
            randomNum = Math.trunc(Math.random()*6)+1;
            document.getElementById('compDiceImg').src = `../image/dice-${randomNum}.png`;
            if(randomNum == 6 || randomNum == 1){
                messageBox.textContent = `hurrey ${computerName} is unlocked.`;
                openCompPlayer = 1;
                computerSteps= 1;
                computerPreviousSteps.push(1);
                document.getElementById(`1`).style.backgroundColor=computerColor;
                computer();
            }
            else{
                messageBox.textContent = `Sorry ${computerName}. Try again later :-)`;
                playerTurn = 0;
                console.log("comp got no 6");
            }
            playerTurn = 0;
        }
        else{
        
            if(compcall == 0 ){
                compcall=1;
                return;
            }
            if(x == -1){    
                x=0;
                return;
            }
            var number=Math.trunc(Math.random()*6)+1;
            document.getElementById('compDiceImg').src = `../image/dice-${number}.png`;
            if((computerSteps + number) > 100){
                playerTurn = 0;
                return;
            }
            else if((computerSteps + number) == 100){
                document.querySelector('#winner').classList.remove('hide');
                document.getElementById('winnerName').textContent = computerName;
                winnerFlag=1;
            }
            computerSteps+= number;
            computerPreviousSteps.push(computerSteps);
            // delay
            cLength=computerPreviousSteps.length;

            if(cLength >1){
                document.getElementById(`${computerPreviousSteps[cLength -2]}`).style.backgroundColor='rgb(131, 128, 128)';
            }

            document.getElementById(`${computerSteps}`).style.backgroundColor=computerColor;
            flag=1;
            var compSnakeSix = 0;
            if(number == 6){
                playerTurn = 1;
                if(cnt == 1){
                    messageBox.textContent = `6️⃣----------${computerName} got a six----------6️⃣`;
                    cnt++;
                }
                else if(cnt == 2)
                    messageBox.textContent = `6️⃣6️⃣----------woahhhh ${computerName} got ${cnt++} six----------6️⃣6️⃣`;
                else if(cnt == 3)
                    messageBox.textContent = `6️⃣6️⃣6️⃣----------${computerName} ison fire today got ${cnt++} six----------6️⃣6️⃣6️⃣`;
                updates(computerPreviousSteps[cLength -1],"comp",compSnakeSix);
                computer();
            }
            cnt=1;
            updates(computerPreviousSteps[cLength -1],"comp"); 
            playerTurn = 0;
            messageBox.textContent = `${userName}'s turn.`;
        
        }
    },1500);
}
let openPlayer = 0;
let highlight = 0;
function roll(){
    if(playerTurn !=0){
        return;
    }
    if(openPlayer == 0){
        randomNum = Math.trunc(Math.random()*6)+1;
        document.getElementById('diceImage').src = `../image/dice-${randomNum}.png`;
        if(randomNum == 6 || randomNum == 1){
            messageBox.textContent = `hurrey ${userName} is unlocked.`;
            openPlayer = 1;
            userSteps= 1;
            userPreviousSteps.push(userSteps);
            document.getElementById('1').style.backgroundColor=userColor;
            return;
            // computer();
        }
        else{
            playerTurn = 1;
            messageBox.textContent = `Sorry ${userName}. Try again later :-)`;   
            computer();
        }
        return;
    }
    else{
        
        if(winnerFlag == 1) 
            return;
        else{
            playerTurn =1;
            messageBox.textContent = ` `;   
            var number=Math.trunc(Math.random()*6)+1;
            document.getElementById('diceImage').src = `../image/dice-${number}.png`;

            if((userSteps + number) > 100){
                computer();
                return;
            }
            else if((userSteps + number) == 100){
                document.getElementById('winnerName').textContent = userName;
                document.querySelector('#winner').classList.remove('hide');
                winnerFlag=1;
            }
                    
            userSteps+= number;
            userPreviousSteps.push(userSteps);

            uLength=userPreviousSteps.length;
            if(uLength >1){
                document.getElementById(`${userPreviousSteps[uLength -2]}`).style.backgroundColor='rgb(131, 128, 128)';
            }
            
            document.getElementById(`${userSteps}`).style.backgroundColor=userColor;
            flag=0;
            var userSnakeSix=-1;
            if(number == 6){
                if(cnt == 1){
                    messageBox.textContent = `yey--${userName} got a six----------6️⃣`;
                    cnt++;
                }
                else if(cnt == 2)
                    messageBox.textContent = `woahhhh-- ${userName} got ${cnt++} six----------6️⃣6️⃣`;
                else
                    messageBox.textContent = `${userName} is on fire today, got ${cnt++} six----------6️⃣6️⃣6️⃣`;

                updates(userPreviousSteps[uLength -1],"user",userSnakeSix);
                playerTurn = 0;
                return;
            }
            cnt=1;
            messageBox.textContent = ` `;
            updates(userPreviousSteps[uLength -1],"user");

            if(winnerFlag!= 1){
                computer(); 
            }
        }
    }
}
/*
document.querySelector('#reset').addEventListener('click',function(){
    document.getElementById(`${userPreviousSteps[uLength -1]}`).style.backgroundColor='rgb(131, 128, 128)';
    document.getElementById(`${computerPreviousSteps[cLength -1]}`).style.backgroundColor='rgb(131, 128, 128)';
    userSteps = 0;
    userPreviousSteps = [];
    computerSteps = 0;
    computerPreviousSteps = [];
    document.querySelector('#winner').classList.add('hide');
    messageBox.textContent = " ";
    document.getElementById('diceImage').src = `../image/dice-1.png`;
    document.getElementById('compDiceImg').src = `../image/dice-1.png`;
    winnerFlag = 0;
    compcall = 1;
    flag=0;
    x=-5;
    openPlayer = 0;
    openCompPlayer = 0;
})
*/