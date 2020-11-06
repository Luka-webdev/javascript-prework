function getMoveName(argMoveId,ID){
    if(argMoveId == 1){
        printMessage(ID=="Comp"?"Mój ruch to: kamień" : "Twój ruch to: kamień");
        return "kamień";
    } else if(argMoveId == 2){
        printMessage(ID=="Comp"?"Mój ruch to: papier" : "Twój ruch to: papier");
        return "papier";
    }else if(argMoveId == 3){
        printMessage(ID=="Comp"?"Mój ruch to: nożyce" : "Twój ruch to: nożyce");
        return "nożyce";
    }else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
let randomNumber=Math.floor(Math.random()*3+1);
let computerMove = getMoveName(randomNumber,"Comp");

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
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