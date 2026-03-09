document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('newsSearchInput');
    const newsGrid = document.getElementById('newsGrid');

    fetch('../assets/news-data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // build the HTML news cards using the JSON data
            data.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col news-item';
                
                // build the card using the item.text matching the updated JSON key
                col.innerHTML = `
                    <div class="card">
                        <h2 class="card-title">${item.title}</h2>
                        <img src="${item.imgSrc}" alt="${item.imgAlt}" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">${item.text}</p>
                        </div>
                        <div class="card-footer bg-white border-0">
                            <a href="${item.link}" target="_blank" class="btn btn-outline-success w-100">
                                Read More <span class="visually-hidden">about ${item.title}</span>
                            </a>
                        </div>
                    </div>
                `;
                
                newsGrid.appendChild(col);
            });

            // search for matching news items
            if (searchInput) {
                searchInput.addEventListener('input', function() {
                    const searchTerm = this.value.toLowerCase();
                    
                    // Search the items on the page again and turn off the display for ones that don't match
                    const newsItems = document.querySelectorAll('.news-item');

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
        })
});
