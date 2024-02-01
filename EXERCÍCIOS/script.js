var data = new Date();
var hora = data.getHours();
var msg = document.getElementById('mensagem');
var img = document.getElementById('imagem');
msg.innerHTML = `Agora são exatamente <strong id="mensagem">${hora} horas!</strong>`
if (hora >= 0 && hora <12){
    img.src = 'dia.jpeg'
    document.body.style.background = '#FFF97C'
} else if (hora >= 12 && hora < 18){
    img.src = 'tarde.jpeg'
    document.body.style.background = '#B2FFFF'
} else{
    img.src = 'noite.jpeg'
    document.body.style.background = '#01038C'
}