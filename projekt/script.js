function goHome() {
document.getElementById('game').style.display = 'none';
document.getElementById('clubGame').style.display = 'none';
document.getElementById('welcome').style.display = 'block';

if (window.map) {
map.remove();
map = null;
}
}

document.addEventListener("DOMContentLoaded", () => {
console.log("App started");
});
