function updateCountdown() {
    const targetDate = new Date('March 25, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        document.getElementById('countdown').innerText = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();
