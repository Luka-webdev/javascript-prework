function playGame(playerInput){
    clearMessages();
    function getMoveName(argMoveId,id){
        if(argMoveId == 1){
            printMessage(id=="Comp"?"Mój ruch to: kamień" : "Twój ruch to: kamień");
            return "kamień";
        } else if(argMoveId == 2){
            printMessage(id=="Comp"?"Mój ruch to: papier" : "Twój ruch to: papier");
            return "papier";
        }else if(argMoveId == 3){
            printMessage(id=="Comp"?"Mój ruch to: nożyce" : "Twój ruch to: nożyce");
            return "nożyce";
        }else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }
    let randomNumber=Math.floor(Math.random()*3+1);
    let computerMove = getMoveName(randomNumber,"Comp");

    let playerMove = getMoveName(playerInput,"User");

    function displayResult(argComputerMove,argPlayerMove){

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrałeś!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrałeś!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrałeś!');
    }
    else if(argComputerMove ==  argPlayerMove){
        printMessage('Remis!');
    }
    else if( argPlayerMove == "nieznany ruch"){
        printMessage('Błędny ruch użytkownika.');
        }
    }
    displayResult(computerMove,playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});