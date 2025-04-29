window.addEventListener('DOMContentLoaded', () => {
    fetch('load_articles.php')
        .then(res => res.json())
        .then(data => {
            if (data.articles) {
                data.articles.forEach(articleData => {
                    const el = document.getElementById(articleData.id);
                    if (el) {
                        el.innerHTML = articleData.html;
                    }
                });
            }

            if (data.images) {
                data.images.forEach((imgData, index) => {
                    const img = document.querySelectorAll('.news-image')[index];
                    if (img) {
                        img.src = imgData.src;
                    }
                });
            }
        })
        .catch(err => console.error('Gagal memuat konten:', err));
});
