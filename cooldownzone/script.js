document.addEventListener('DOMContentLoaded', function () {
    // Simulate loading time
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('cooldown-zone').classList.remove('hidden');
    }, 2000); // Adjust the duration as needed
});

function playMusic() {
    alert("Enjoy the healing power of music!");
    // Add your logic to play music
}

function laughMinute() {
    alert("Take a minute to laugh and boost your mood!");
    // Add your logic for laughter activity
}
