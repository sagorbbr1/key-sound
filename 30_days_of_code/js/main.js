const playSound = function(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key =document.querySelector(`.key[data-key='${e.keyCode}']`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
};

const removeClass = function(e) {
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}


const allKeys = document.querySelectorAll('.key');

allKeys.forEach(function(el) {

    
  el.addEventListener('click', function(e) {

   const audio = e.target.dataset.key;
 
    const audioPlay = document.querySelector(`audio[data-key='${audio}']`)
    if(!audioPlay) return;
    audioPlay.currentTime = 0;
    audioPlay.play();
    e.target.classList.add('playing');

  })
})





allKeys.forEach(function(el) {
    el.addEventListener('transitionend', removeClass);
});


window.addEventListener('keydown', playSound);