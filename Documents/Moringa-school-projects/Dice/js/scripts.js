$(document).ready(function () {
    function Player(id,score,totalScore) {
        this.id=id;
        this.totalScore= 0;
    }
    player1= new Player();
    player2= new Player();

$("button#roll-dice1").on("click", function () {
    Player.prototype.currentScore = Math.floor(Math.random() *6) +1;
    player1.totalScore += player1.currentScore;

    if (player1.currentScore===1) {
        alert("You have scored 1! Next player!");
        $("button#roll-dice1").hide();
        $("butoon#roll-dice2").show();

        $(".result1").html("player 1: 0 and total score is 0");
    }

})
})