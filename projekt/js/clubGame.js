const clubs = [
{ name:"FC Barcelona", country:"Spain", founded:1899, manager:"Xavi", player:"Lewandowski", badge:"Blue & Red" },
/* ...resten av klubbarna... */
];

let currentClub, clueStep;

function startClubGame() {
document.getElementById('welcome').style.display = 'none';
document.getElementById('game').style.display = 'none';
document.getElementById('clubGame').style.display = 'block';
restartClubGame();
}
