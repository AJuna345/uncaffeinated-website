# UNCAFFEINATED - Low Stress News
[cite_start]“UNCAFFEINATED - Low Stress News” [cite: 1, 3]

### Authorship & Attribution
* [cite_start]**Development & Photography:** Aiden (A.J.) Ramsden [cite: 6]
* [cite_start]**Inspirations:** WordPress Uncaffeinated News site layouts and interfaces [cite: 16, 17]
* [cite_start]**Educational Resources:** * Code shared by Professor Barry Cumbie (University of North Alabama) [cite: 18, 19]
    * [cite_start]W3Schools (HTML, CSS, JS, and JSON tutorials) [cite: 8]
    * [cite_start]web.dev (Resource hints and font optimization guides) [cite: 11, 12, 14]
    * [cite_start]Google Fonts (Roboto font implementation) [cite: 10, 26, 28]
* [cite_start]**Libraries & Frameworks:** Bootstrap 5.3.0 (Grid system, navigation, and UI components) [cite: 20, 21, 22]
* [cite_start]**Accessibility:** WebAIM Contrast Checker [cite: 9]
* [cite_start]**Assets:** Banners and articles from Uncaffeinated WordPress and YouTube; dynamic news data from `news-data.json` [cite: 24, 25]

> [cite_start]“Low-stress news about Northern Alabama and UNA student life.” [cite: 30]

### User Story
[cite_start]“I want to showcase my UNA media projects and campus stories in a digital portfolio to demonstrate my skills and abilities to potential employers.” [cite: 32]

### Links
* [cite_start]**Repository:** [https://github.com/ajuna345/uncaffeinated-website](https://github.com/ajuna345/uncaffeinated-website) [cite: 34]
* [cite_start]**Deployed App:** [https://ajuna345.github.io/uncaffeinated-website/](https://ajuna345.github.io/uncaffeinated-website/) [cite: 35]
* [cite_start]**Design Evidence (Wiki):** [https://github.com/ajuna345/uncaffeinated-website/wiki/Design-Ideas](https://github.com/ajuna345/uncaffeinated-website/wiki/Design-Ideas) [cite: 36]

### Model / Inspiration
[cite_start]**Source:** UNCAFFEINATED WordPress News Posts [cite: 38]
![WordPress Inspiration](https://raw.githubusercontent.com/ajuna345/uncaffeinated-website/main/docs/inspiration-screenshot.png) 
[cite_start]*Note: I used my portfolio photos for news stories and improved upon the original layout by adding a search bar and modernizing the grid system.* [cite: 39, 40]

### Code Block & Explanation
[cite_start]This snippet from `news-search.js` handles the real-time filtering of news stories[cite: 41]:

```javascript
// search for matching news items
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        // Search items on the page again and turn off the display for ones that don't match
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
