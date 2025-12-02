const stadiums = [
{ name:"Camp Nou", lat:41.3809, lng:2.1228, image:"images/campnou.jpg" },
/* ...alla dina arenor här ... */
];

let shuffledStadiums, current, score;
let map, marker, correctMarker, polyline;

function startGame() {
document.getElementById('welcome').style.display = 'none';
document.getElementById('clubGame').style.display = 'none';
document.getElementById('game').style.display = 'block';
document.getElementById('map').style.display = 'block';

map = L.map('map').setView([54,15],4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

restartGame();
}

function restartGame() {
shuffledStadiums = [...stadiums].sort(() => Math.random() - 0.5);
current = 0;
score = 0;
document.getElementById('score').textContent = `Score: ${score}`;
loadStadium();
}
