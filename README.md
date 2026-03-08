# UNcaffinated news website

Attributions
Bootstrap 5: used to set up the news grid system, navigation bar, and UI components

Uncaffinated News: used news articles, picures, and inspiration from layout

Mr. Cumbie/in class/teachers website: used code that I got from Mr. Cumbie and his website or in class.

Tagline
Low Stress News

As a UNA student
I want to share my news stories
So that People know about the news that hasn't been shared

Links
My wordpress site:
https://uncaffeinatednews.wordpress.com/ 

Deployed App: https://ajuna345.github.io/CIS-376-Website/

Repo: https://github.com/AJuna345/CIS-376-Website

<img width="1441" height="1250" alt="image" src="https://github.com/user-attachments/assets/94eb4c44-839a-4829-946c-f2776105b55f" />

I used the picture news stories from the website. I improved the news site by adding a search bar and fixed how it looked



document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('newsSearchInput');
    const newsItems = document.querySelectorAll('.news-item');

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

This is the search code that I adapted for the news.html page it waits for an input from the Dom and every key input trigers the code. It then converts the text to lowercase then creates a loop and looks at the .cardtitles of each one. Then it compares the input of the to the .card-titles.

<img width="500" height="1400" alt="376 website 1" src="https://github.com/user-attachments/assets/e7d7375f-b7dc-4b54-93f5-625c92087284" />

I have checkedboth desktop and phone and made sure it works.
