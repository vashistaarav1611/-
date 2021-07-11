function addUser(){
 plyer1_name=document.getElementById("player1_name_input").value;
 plyer2_name=document.getElementById("player2_name_input").value;
 
 localStorage.setItem("Player 1 Name",plyer1_name);
 localStorage.setItem("Player 2 Name",plyer2_name);
}