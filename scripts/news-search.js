document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('newsSearchInput');
    const newsItems = document.querySelectorAll('.news-item');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            newsItems.forEach(item => {
                const title = item.querySelector('.card-title').textContent.toLowerCase();
                const text = item.querySelector('.card-text').textContent.toLowerCase();

                if (title.includes(searchTerm) || text.includes(searchTerm)) {
                    item.style.display = ''; 
                } else {
                    item.style.display = 'none'; 
                }
            });
        });
    }
});
