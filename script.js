// 現在時刻の更新
function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ja-JP', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    document.getElementById('datetime').textContent = timeString;
}

// 訪問回数カウンター
function updateCounter() {
    let count = localStorage.getItem('visitCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitCount', count);
    document.getElementById('counter').textContent = count;
}

// 初期化
updateDateTime();
updateCounter();
setInterval(updateDateTime, 1000);

// ページロードアニメーション
window.addEventListener('load', () => {
    document.querySelector('.container').style.opacity = '1';
});

