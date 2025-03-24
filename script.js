// 🎶 Müziği Butonla Başlat
document.getElementById("playMusic").addEventListener("click", function() {
    var music = document.getElementById("music");
    
    if (music.paused) {
        music.play();
        this.textContent = "Müziği Durdur ⏸";
    } else {
        music.pause();
        this.textContent = "Müziği Başlat 🎶";
    }
});

// 🕒 25 Mart İçin Sayaç
var targetDate = new Date("March 25, 2025 00:00:00").getTime();

var countdown = setInterval(function() {
    var now = new Date().getTime();
    var difference = targetDate - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    // Sayaç bitince içeriği göster
    if (difference <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown-container").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }
}, 1000);
