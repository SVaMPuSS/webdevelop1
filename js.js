window.addEventListener('load', function() {
    var elem = document.getElementById('MyCanvas');
    if (!elem || !elem.getContext) {
        return;
    }
    var context = elem.getContext('2d');
    if (!context) {
        return;
    }
    context.fillStyle = 'Blue';
    context.font = '50px Arial';
    context.fillText('Пример текста', 250, 110);

    context.moveTo(100, 100);
    context.lineTo(150, 150);
    context.lineTo(50, 150);
    context.lineTo(100, 100);

    context.moveTo(100,150);
    context.lineTo(75,125);
    context.lineTo(125,125);
    context.lineTo(100,150);

    context.moveTo(125,150);
    context.lineTo(112,137);
    context.lineTo(137,137);
    context.lineTo(125,150);

    context.moveTo(75,150);
    context.lineTo(62,137);
    context.lineTo(87,137);
    context.lineTo(75,150);
    context.stroke();

    context.moveTo(87,112);
    context.lineTo(112,112);
    context.lineTo(100,125);
    context.lineTo(87,112);
    context.stroke();

    context.fillStyle = 'Blue';
    context.fillRect(250, 250, 150, 150);
    context.fillStyle = 'white';
    context.fillRect(300, 300, 50, 50);

    context.fillStyle = 'red';
    context.fillRect(400, 400, 150, 50);
    context.fillStyle = 'white';
    context.fillRect(410, 410, 100, 20);
}, false);