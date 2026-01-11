// モーダル関連の要素を取得
const images = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImg');
const closeButton = document.querySelector('.close');

// 画像クリック時の処理
images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        modalImg.alt = this.alt; // altテキストもコピー
        closeButton.focus(); // 閉じるボタンにフォーカス
    });
});

// モーダルを閉じる関数
function closeModal() {
    modal.style.display = "none";
}

// 閉じるボタンのクリック
closeButton.addEventListener('click', closeModal);

// 背景クリックで閉じる
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Escキーで閉じる
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});
