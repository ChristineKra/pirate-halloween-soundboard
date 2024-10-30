const soundButtons= document.querySelectorAll('.soundbutton');

soundButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const soundId= button.getAttribute('data-sound');
        playSound(soundId);
    })
})

function playSound(soundId) {
    const audioElement=document.getElementById(soundId);

    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime=0;
    })
    audioElement.play();
}