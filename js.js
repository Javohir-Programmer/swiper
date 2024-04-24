let imgs = document.querySelectorAll('img');

let prev = document.getElementById('prev');

let next = document.getElementById('next');

let i = 0

next.onclick = function() {

    let audio = new Audio('click.mp3');
    audio.play();


    imgs[i].style.display = 'none';
    i++

    if (i >= imgs.length) {

        i=0
    }
    imgs[i].style.display = 'block';
}

prev.onclick = function() {

    let audio = new Audio('click.mp3');
    audio.play();


    imgs[i].style.display = 'none';
    i--

    if( i < 0){

        i=imgs.length-1
    }
    imgs[i].style.display = 'block';
}