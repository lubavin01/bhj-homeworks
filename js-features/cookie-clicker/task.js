const cookie = document.getElementById('cookie');
let large = false;

const widthNormal = 200;
const widthLarge = widthNormal*1.4;

let lastClick = null;

cookie.onclick = function() {    
    
    document.getElementById('clicker__counter').textContent++;

    large = !large;
    document.getElementById('cookie').width = large ? widthLarge : widthNormal; 
    
    
    const newClick = Date.now();

    let speed;
    if (lastClick === null) {
        speed = 1;        
    } else {
        speed = 1000/(newClick - lastClick);
    }
    document.getElementById('clicker__speed').textContent = speed.toFixed(2);
    lastClick = Date.now();
}