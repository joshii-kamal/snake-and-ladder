
// var player1Name = " player1",player1Color = "red";   // for testing
// let player2Name = "player2",player2Color = "green";  // for testing
// let player3Name = "player3",player3Color = "blue";  // for testing
    var player1Name ,player1Color;
    let player3Name, player3Color;
    let player2Name, player2Color;
var player1Background = document.getElementById('player1');

document.getElementById('player1Red').addEventListener('click', function(){
    player1Background.style.backgroundColor = 'red';
    player1Color="red";
})
document.getElementById('player1Green').addEventListener('click', function(){
    player1Background.style.backgroundColor = 'green';
    player1Color ="green";
})
document.getElementById('player1Blue').addEventListener('click', function(){
    player1Background.style.backgroundColor = 'blue';
    player1Color ="blue";   
})
document.getElementById('player1Yellow').addEventListener('click', function(){
    player1Background.style.backgroundColor = 'yellow';
    player1Color ="yellow";
})


// computer background color game page starting while selecting color.
var player2Background = document.getElementById('player2');
document.getElementById('player2Red').addEventListener('click', function(){
    player2Background.style.backgroundColor = 'red';
    player2Color = 'red';
})
document.getElementById('player2Green').addEventListener('click', function(){
    player2Background.style.backgroundColor = 'green';
    player2Color = 'green';
})
document.getElementById('player2Blue').addEventListener('click', function(){
    player2Background.style.backgroundColor = 'blue';
    player2Color = 'blue';   
})
document.getElementById('player2Yellow').addEventListener('click', function(){
    player2Background.style.backgroundColor = 'yellow';
    player2Color = 'yellow';
})


// computer background color game page starting while selecting color.
var player3Background = document.getElementById('player3');
document.getElementById('player3Red').addEventListener('click', function(){
    player3Background.style.backgroundColor = 'red';
    player3Color = 'red';
})
document.getElementById('player3Green').addEventListener('click', function(){
    player3Background.style.backgroundColor = 'green';
    player3Color = 'green';
})
document.getElementById('player3Blue').addEventListener('click', function(){
    player3Background.style.backgroundColor = 'blue';
    player3Color = 'blue';   
})
document.getElementById('player3Yellow').addEventListener('click', function(){
    player3Background.style.backgroundColor = 'yellow';
    player3Color = 'yellow';
})


var turnFlag=Math.trunc(Math.random()*3)+1;
console.log(turnFlag);
var submit = document.getElementById('submit');
submit.addEventListener('click', function(){
    var msgBox = document.getElementById('colorMessage');
    player1Name = document.getElementById('p1Name').value;
    player2Name = document.getElementById('p2Name').value;
    player3Name = document.getElementById('p3Name').value;
    if(!player1Name || !player2Name || !player3Name)
        msgBox.textContent = "NAME FEILD EMPTY!!!";
    else if(player1Color === undefined || player2Color === undefined || player3Color === undefined)
        msgBox.textContent = "PLAYER COLOR NOT SELECTED!!";
    else if((player1Color == player2Color) ||(player2Color == player3Color) || (player1Color == player3Color) || (player1Color == player2Color == player3Color) )
        msgBox.textContent = "PLEASE SELECT DIFFERENT COLOR";
    else if(player1Name.length> 10 || player2Name.length> 10 || player3Name.length> 10)
        msgBox.textContent = "Player Name TOOOO long";
    else{
        msgBox.textContent = "STARTING WAIT...";
        document.querySelector('#selectPlayer').classList.add('hidding');
    }    
    // setting players name nd color
    document.getElementById('player1DiceName').textContent = player1Name;
    document.getElementById('player1DiceName').style.color = player1Color;
    
    document.getElementById('player2DiceName').textContent = player2Name;
    document.getElementById('player2DiceName').style.color = player2Color;
    
    document.getElementById('player3DiceName').textContent = player3Name;
    document.getElementById('player3DiceName').style.color = player3Color;

    if(turnFlag == 1){
        messageBox.textContent = `${player1Name} will go first`;
        document.getElementById('player1DiceImg').style.boxShadow = `${player1Color} -4px 4px 9px`;
    }
    else if(turnFlag == 2){
        messageBox.textContent = `${player2Name} will go first`;
        document.getElementById('player2DiceImg').style.boxShadow = `${player2Color} -4px 4px 9px`;
    }
    else{
        messageBox.textContent = `${player3Name} will go first`;
        document.getElementById('player3DiceImg').style.boxShadow = `${player3Color} -4px 4px 9px`;
    }
})



var player1Steps=0;
var player1PreviousStep=[];
var p1Length=0;

var player2Steps=0;
var player2PreviousStep=[];
var p2Length=0;

var player3Steps=0;
var player3PreviousStep=[];
var p3Length=0;

var cnt = 1;

var snake =[27,37,64,87,80,98];
var snakeEnd = [8,17,35,68,59,20];

var ladder =[4,9,36,76];
var ladderEnd = [67,50,63,95];
var winnerFlag=0;
const messageBox = document.querySelector('.messageBox');

const player1TurnHighlight =function(){
    document.getElementById('player1DiceImg').style.boxShadow = `${player1Color} -4px 4px 9px`;
    document.getElementById('player2DiceImg').style.boxShadow = `none`;
    document.getElementById('player3DiceImg').style.boxShadow = `none`;
};

const player2TurnHighlight =function(){
    document.getElementById('player1DiceImg').style.boxShadow = `none`;
    document.getElementById('player2DiceImg').style.boxShadow = `${player2Color} -4px 4px 9px`;
    document.getElementById('player3DiceImg').style.boxShadow = `none`;
};

const player3TurnHighlight =function(){
    document.getElementById('player1DiceImg').style.boxShadow = `none`;
    document.getElementById('player2DiceImg').style.boxShadow = `none`;
    document.getElementById('player3DiceImg').style.boxShadow = `${player3Color} -4px 4px 9px`;
};

const playersDefaultHighlight = function(){
    document.getElementById('player1DiceImg').style.boxShadow = `none`;
    document.getElementById('player2DiceImg').style.boxShadow = `none`;
    document.getElementById('player3DiceImg').style.boxShadow = `none`;
}

let val = -1;
const updates = function(element, player){
    setTimeout(function(){
        val = -1;
        
        // snakebite
        if(player == "player1")
            var snakeIndex = snake.indexOf(element);
        else if(player == "player2")
            var snakeIndex = snake.indexOf(element);
        else
            var snakeIndex = snake.indexOf(element);

        if(snakeIndex != -1){
            cnt=1;
            document.getElementById(`${snake[snakeIndex]}`).style.backgroundColor = 'rgb(131, 128, 128)';
            if(player == 'player1'){
                messageBox.textContent = `hehehehehehehe 🐍 "Snake Bite" Someone call the medic for - ${player1Name}.`;
                document.getElementById(`${snakeEnd[snakeIndex]}`).style.backgroundColor = player1Color;
                // player1PreviousStep=[];
                p1Length-=1;
                player1PreviousStep.pop();
                player1Steps = snakeEnd[snakeIndex];
                player1PreviousStep.push(player1Steps);
                turnFlag = 2;
                player2TurnHighlight();
            }
            if(player == 'player2'){
                messageBox.textContent = `hehehehehehehe 🐍 "Snake Bite" Someone call the medic for - ${player2Name}.`;
                document.getElementById(`${snakeEnd[snakeIndex]}`).style.backgroundColor = player2Color;
                // player2PreviousStep=[];
                p2Length--;
                player2PreviousStep.pop();
                player2Steps = snakeEnd[snakeIndex];
                player2PreviousStep.push(player2Steps);
                turnFlag = 3;
                player3TurnHighlight();
            }
            if(player == 'player3'){
                messageBox.textContent = `hehehehehehehe 🐍 "Snake Bite" Someone call the medic for - ${player3Name}.`;
                document.getElementById(`${snakeEnd[snakeIndex]}`).style.backgroundColor = player3Color;
                // player3PreviousStep=[];
                p3Length--;
                player3PreviousStep.pop();
                player3Steps = snakeEnd[snakeIndex];
                player3PreviousStep.push(player3Steps);
                turnFlag = 1;
                player1TurnHighlight();
            }
        }

        // ladder
        if(player == "player1")
            var ladderIndex = ladder.indexOf(element);
        else if(player == "player2")
            var ladderIndex = ladder.indexOf(element);
        else
            var ladderIndex = ladder.indexOf(element);
        if(ladderIndex != -1){
            cnt=1;
            document.getElementById(`${ladder[ladderIndex]}`).style.backgroundColor = 'rgb(131, 128, 128)';
            if(player == 'player1'){
                messageBox.textContent = `-- yey ${player1Name} found shortcut----------🪜🪜🪜`;
                document.getElementById(`${ladderEnd[ladderIndex]}`).style.backgroundColor = player1Color;
                player1PreviousStep=[];
                p1Length = 1;
                player1Steps = ladderEnd[ladderIndex];
                player1PreviousStep.push(player1Steps);
            }
            else if(player == 'player2'){
                messageBox.textContent = `-- yey ${player2Name} found shortcut----------🪜🪜🪜`;
                document.getElementById(`${ladderEnd[ladderIndex]}`).style.backgroundColor = player2Color;
                player2PreviousStep=[];
                p2Length =1;
                player2Steps = ladderEnd[ladderIndex];
                player2PreviousStep.push(player2Steps);
            }
            else{
                messageBox.textContent = `-- yey ${player3Name} found shortcut----------🪜🪜🪜`;
                document.getElementById(`${ladderEnd[ladderIndex]}`).style.backgroundColor = player3Color;
                player3PreviousStep=[];
                p3Length =1;
                player3Steps = ladderEnd[ladderIndex];
                player3PreviousStep.push(player3Steps);
            }
        }
        
        //  intersection
        if(p1Length >=1 && p2Length >=1){
            if(player1PreviousStep[p1Length -1] == player2PreviousStep[p2Length - 1] ){ //&& p1Length > 1 || p2Length > 1
                val = 1;
                console.log("1");
                // this is to check if player intersects which one will stay's nd which have to start over. 
                if(turnFlag == 3 ){
                    messageBox.textContent = `--oops looks like ${player1Name} one have to play from start...❌❌`;
                    document.getElementById(`${player1PreviousStep[p1Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
                    document.getElementById(`${player2PreviousStep[p2Length -1]}`).style.backgroundColor = player2Color;
                    player1Steps=0;
                    player1PreviousStep=[];
                    turnFlag = 2;
                    openPlayer1 = 0;
                    player2TurnHighlight();
                    console.log("player 1 down");
                    val = 2;
                }
                else{
                    messageBox.textContent = `--oops looks like ${player2Name} one have to play from start...❌❌`;
                    document.getElementById(`${player2PreviousStep[p2Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
                    document.getElementById(`${player1PreviousStep[p1Length -1]}`).style.backgroundColor= player1Color;
                    player2Steps=0;
                    player2PreviousStep=[];
                    turnFlag = 1;
                    openPlayer2 = 0;
                    console.log("player 2 down");
                    player1TurnHighlight();
                    val = 1;
                }
                return val;
            }
        }
        
        if(p2Length >=1 && p3Length >=1){
            if(player2PreviousStep[p2Length -1] == player3PreviousStep[p3Length - 1] ){  
                console.log("2");
                if(turnFlag == 1 ){
                    messageBox.textContent = `--oops looks like ${player1Name} one have to play from start...❌❌`;
                    document.getElementById(`${player2PreviousStep[p2Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
                    document.getElementById(`${player3PreviousStep[p3Length -1]}`).style.backgroundColor = player3Color;
                    player2Steps=0;
                    player2PreviousStep=[];
                    turnFlag = 3;
                    openPlayer2 = 0;
                    player3TurnHighlight();
                    val = 3;
                }
                else{
                    messageBox.textContent = `--oops looks like ${player2Name} one have to play from start...❌❌`;
                    document.getElementById(`${player3PreviousStep[p3Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
                    document.getElementById(`${player2PreviousStep[p2Length -1]}`).style.backgroundColor= player2Color;
                    player3Steps=0;
                    player3PreviousStep=[];
                    turnFlag = 2;
                    openPlayer3 = 0;
                    player2TurnHighlight();
                    val = 2;
                }
                return val;
            }
        }
        
        if(p1Length >=1 && p3Length >=1){
            if(player1PreviousStep[p1Length -1] == player3PreviousStep[p3Length - 1] ){ //&& p1Length > 1 || p2Length > 3
                // this is to check if player intersects which one will stay's nd which have to start over. 
                console.log("3");
                
                if(turnFlag == 2 ){
                    messageBox.textContent = `--oops looks like ${player3Name} one have to play from start...❌❌`;
                    document.getElementById(`${player3PreviousStep[p3Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
                    document.getElementById(`${player1PreviousStep[p1Length -1]}`).style.backgroundColor = player1Color;
                    player3Steps=0;
                    player3PreviousStep=[];
                    turnFlag = 1;
                    openPlayer3 = 0;
                    player1TurnHighlight();
                    val = 1;
                }
                else{
                    messageBox.textContent = `--oops looks like ${player1Name} one have to play from start...❌❌`;
                    document.getElementById(`${player1PreviousStep[p1Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
                    document.getElementById(`${player3PreviousStep[p3Length -1]}`).style.backgroundColor= player3Color;
                    player1Steps=0;
                    player1PreviousStep=[];
                    turnFlag = 3;
                    openPlayer1 = 0;
                    player3TurnHighlight();
                    val = 3;
                }
                return val;
            }
        }
        return val;
        
    },500);
}

let openPlayer3 = 0,randomNum;
function player3(){
    if(winnerFlag !=1){
        if(turnFlag != 3){
            messageBox.textContent = `NOT YOUR TURN ${player3Name}.`;
        }
        else{
            if(openPlayer3 == 0){
                randomNum = Math.trunc(Math.random()*4)+1;  
                document.getElementById('player3DiceImg').src = `../image/dice-${randomNum}.png`;                    
                if(randomNum == 6 || randomNum == 1){
                    openPlayer3 = 1;
                    messageBox.textContent = `hurrey ${player3Name} is unlocked.`;
                    player3Steps = 1;
                    player3PreviousStep.push(player3Steps);
                    document.getElementById(`${player3Steps}`).style.backgroundColor=player3Color;
                    document.getElementById('1').src = `../image/dice-${number}.png`;
                }
                else{
                    turnFlag = 1;
                    messageBox.textContent = `Sorry ${player3Name}. Try again later :-)`;
                    player1TurnHighlight();
                }
                return;
            }
            else{
                turnFlag = 1;
                messageBox.textContent = ` `;
                var number=Math.trunc(Math.random()*6)+1;
                document.getElementById('player3DiceImg').src = `../image/dice-${number}.png`;
                if((player3Steps + number) > 100){
                    player1TurnHighlight();
                    return;
                }
                else if((player3Steps + number) == 100){
                    document.querySelector('#winner').classList.remove('hide');
                    document.getElementById('winnerName').textContent = player3Name;
                    winnerFlag=1;
                }
                player3Steps+= number;
                player3PreviousStep.push(player3Steps);
                // delay
                p3Length=player3PreviousStep.length;
                if(p3Length >1){
                    document.getElementById(`${player3PreviousStep[p3Length -2]}`).style.backgroundColor='rgb(131, 128, 128)';
                }
                document.getElementById(`${player3Steps}`).style.backgroundColor=player3Color;
                
                if(number == 6){
                    console.log("hello noob3");
                    // turnFlag = 3;
                    if(cnt == 1){
                        messageBox.textContent = `6️⃣----------${player3Name} got a six----------6️⃣`;
                        cnt++;
                    }
                    else if(cnt == 2)
                        messageBox.textContent = `6️⃣6️⃣----------woahhhh ${player3Name} got ${cnt++} six----------6️⃣6️⃣`;
                    else if(cnt == 3)
                        messageBox.textContent = `6️⃣6️⃣6️⃣----------${player3Name} ison fire today got ${cnt++} six----------6️⃣6️⃣6️⃣`;
                    else
                        messageBox.textContent = `----------${player3Name} got more then 3 sixes`;
                    console.log(updates(player3PreviousStep[p3Length -1],"player3"));
                    if(val == -1)
                        turnFlag = 3;
                    console.log("val3: ", val);                    
                    return;
                }
                cnt=1;
                updates(player3PreviousStep[p3Length -1],"player3"); 
                player1TurnHighlight();
            }
        }
    }
    else
        return;
}
let openPlayer2 = 0;
function player2(){
    if(winnerFlag !=1){
        if(turnFlag != 2){
            messageBox.textContent = `NOT YOUR TURN ${player2Name}.`;
        }
        else{
            if(openPlayer2 == 0){
                randomNum = Math.trunc(Math.random()*6)+1;  
                document.getElementById('player2DiceImg').src = `../image/dice-${randomNum}.png`;                    
                if(randomNum == 6 || randomNum == 1){
                    openPlayer2 = 1;
                    messageBox.textContent = `hurrey ${player2Name} is unlocked.`;
                    player2Steps = 1;
                    player2PreviousStep.push(player2Steps);
                    document.getElementById(`${player2Steps}`).style.backgroundColor=player2Color;
                    document.getElementById('1').src = `../image/dice-${number}.png`;
                }
                else{
                    turnFlag = 3;
                    messageBox.textContent = `Sorry ${player2Name}. Try again later :-)`;
                    player3TurnHighlight();
                }
                return;
            }
            else{
                turnFlag = 3;
                messageBox.textContent = ` `;
                var number=Math.trunc(Math.random()*4)+1;
                document.getElementById('player2DiceImg').src = `../image/dice-${number}.png`;
                if((player2Steps + number) > 100){
                    player3TurnHighlight();
                    return;
                }
                else if((player2Steps + number) == 100){
                    document.querySelector('#winner').classList.remove('hide');
                    document.getElementById('winnerName').textContent = player2Name;
                    winnerFlag=1;
                }
                player2Steps+= number;
                player2PreviousStep.push(player2Steps);
                // delay
                p2Length=player2PreviousStep.length;
                if(p2Length >1){
                    document.getElementById(`${player2PreviousStep[p2Length -2]}`).style.backgroundColor='rgb(131, 128, 128)';
                }
                document.getElementById(`${player2Steps}`).style.backgroundColor=player2Color;
                
                if(number == 6){
                    
                    // turnFlag = 2;
                    if(cnt == 1){
                        messageBox.textContent = `6️⃣----------${player2Name} got a six----------6️⃣`;
                        cnt++;
                    }
                    else if(cnt == 2)
                    messageBox.textContent = `6️⃣6️⃣----------woahhhh ${player2Name} got ${cnt++} six----------6️⃣6️⃣`;
                    else if(cnt == 3)
                    messageBox.textContent = `6️⃣6️⃣6️⃣----------${player2Name} ison fire today got ${cnt++} six----------6️⃣6️⃣6️⃣`;
                    else
                    messageBox.textContent = `----------${player2Name} got more then 3 sixes`;
                    console.log(updates(player2PreviousStep[p2Length -1],"player2"));
                    if(val == -1)
                        turnFlag =2;
                    console.log("val2: ", val);                    
                    
                    return;
                }
                cnt=1;
                updates(player2PreviousStep[p2Length -1],"player2"); 
                player3TurnHighlight();
            }
        }
    }
    else
        return;
}

let openPlayer1 = 0;
function player1(){
    if(winnerFlag != 1){
        if(turnFlag != 1){
            messageBox.textContent = `NOT YOUR TURN ${player1Name}.`;
        }
        else{
            if(openPlayer1 == 0){
                randomNum = Math.trunc(Math.random()*6)+1;
                document.getElementById('player1DiceImg').src = `../image/dice-${randomNum}.png`;                    
                if(randomNum == 6 || randomNum == 1){
                    openPlayer1 = 1;
                    messageBox.textContent = `hurrey ${player1Name} is unlocked.`;
                    player1Steps = 1;
                    player1PreviousStep.push(player1Steps);
                    document.getElementById(`${player1Steps}`).style.backgroundColor=player1Color;
                }
                else{
                    turnFlag = 2;
                    messageBox.textContent = `Sorry ${player1Name}. Try again later :-)`;
                    player2TurnHighlight();
                }
                return;
            }
            else{
                turnFlag = 2;
                messageBox.textContent = ` `;
                var number=Math.trunc(Math.random()*6)+1;
                document.getElementById('player1DiceImg').src = `../image/dice-${number}.png`;

                if((player1Steps + number) > 100){
                    player2TurnHighlight();
                    return;
                }
                else if((player1Steps + number) == 100){
                    document.querySelector('#winner').classList.remove('hide');
                    document.getElementById('winnerName').textContent = player1Name;
                    winnerFlag=1;
                }
                
                player1Steps+= number;
                player1PreviousStep.push(player1Steps);

                p1Length=player1PreviousStep.length;
                if(p1Length >1){
                    document.getElementById(`${player1PreviousStep[p1Length -2]}`).style.backgroundColor='rgb(131, 128, 128)';
                }
                document.getElementById(`${player1Steps}`).style.backgroundColor=player1Color;
                
                if(number == 6){
                    console.log("hello noob1");
                    
                    if(cnt == 1){
                        messageBox.textContent = `6️⃣----------${player1Name} got a six----------6️⃣`;
                        cnt++;
                    }
                    else if(cnt == 2)
                    messageBox.textContent = `6️⃣6️⃣----------woahhhh ${player1Name} got ${cnt++} six----------6️⃣6️⃣`;
                    else if(cnt == 3)
                    messageBox.textContent = `6️⃣6️⃣6️⃣----------${player1Name} is on fire today, got ${cnt++} six----------6️⃣6️⃣6️⃣`;
                    else
                    messageBox.textContent = `-- ${player1Name} got more then 3 sixes --`;
                    console.log(updates(player1PreviousStep[p1Length -1],"player1"));
                    if(val == -1)
                        turnFlag = 1;
                    // console.log("val1: ", val);                    
                    return;
                }
                cnt=1;
                updates(player1PreviousStep[p1Length -1],"player1");
                player2TurnHighlight();
            }
        }
    }
    else
        return;
}


// document.querySelector('#reset').addEventListener('click',function(){
//     document.getElementById(`${player1PreviousStep[p1Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
//     document.getElementById(`${player2PreviousStep[p2Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
//     document.getElementById(`${player3PreviousStep[p3Length -1]}`).style.backgroundColor='rgb(131, 128, 128)';
//     playersDefaultHighlight();
//     console.log(player1PreviousStep[p1Length -1],player2PreviousStep[p2Length -1],player3PreviousStep[p3Length -1]);
//     player1Steps = 0;
//     player1PreviousStep = [];
//     player2Steps = 0;
//     player2PreviousStep = [];
//     player3Steps = 0;
//     player3PreviousStep = [];
//     p1Length = 0;
//     p2Length = 0;
//     p3Length = 0;
//     document.querySelector('#winner').classList.add('hide');
//     messageBox.textContent = " ";
//     document.getElementById('player1DiceImg').src = `../image/dice-1.png`;
//     document.getElementById('player2DiceImg').src = `../image/dice-1.png`;
//     document.getElementById('player3DiceImg').src = `../image/dice-1.png`;
//     winnerFlag = 0;
//     openPlayer1 = 0;
//     openPlayer2 = 0;
//     openPlayer3 = 0;
//     turnFlag=Math.trunc(Math.random()*2)+1;
//     if(turnFlag == 1)
//         messageBox.textContent = `${player1Name} will go first`;
//     else if(turnFlag == 2)
//         messageBox.textContent = `${player2Name} will go first`;
//     else
//         messageBox.textContent = `${player3Name} will go first`;

// })