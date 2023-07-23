var lampada = document.getElementById('lampada');

lampada.addEventListener('click',()=> {
    if(lampada.className == 'on'){
        lampada.src = 'img/Off.png';
        lampada.className = 'off';
    }else{
        lampada.src = 'img/On.png';
        lampada.className = 'on';
    }
});