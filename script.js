function showMap() {
    document.querySelector('.intro').style.display = 'none';
    document.getElementById('mapContainer').style.display = 'block';
}

function openModal(element) {
    const modal = document.getElementById('modal');
    const image = document.getElementById('pointImage');
    const audio = document.getElementById('pointAudio');
    const title = document.getElementById('pointTitle');
    const subTitle = document.getElementById('pointSubTitle');
    
    image.src = element.getAttribute('data-image');
    title.textContent = element.getAttribute('data-title');
    subTitle.textContent = element.getAttribute('data-sub-title');


    const audioPath = element.getAttribute('data-audio');
    if (audioPath) {
        audio.src = audioPath;
        audio.style.display = 'inline';
        audio.play();
    } else {
        audio.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    const audio = document.getElementById('pointAudio');
    audio.pause();
    document.getElementById('modal').style.display = 'none';
}