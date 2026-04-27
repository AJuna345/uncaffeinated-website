# UNCAFFEINATED - Low Stress News


“UNCAFFEINATED - Low Stress News”


## Authorship & Attribution
Website Development and Photography by [Aiden (A.J.) Ramsden](https://www.facebook.com/profile.php?id=61565364982227)

## Resources
- [W3Schools](https://www.w3schools.com/) [HTML](https://www.w3schools.com/html/default.asp), [CSS](https://www.w3schools.com/css/default.asp), [Javascript](https://www.w3schools.com/js/default.asp), and [Javascript JSON](https://www.w3schools.com/js/js_json.asp) tutorials
- [WebAIM](https://webaim.org/) [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)
- [Google Fonts - Getting Started](https://developers.google.com/fonts/docs/getting_started)
- [web.dev](https://web.dev/)
  - [Resource Hints](https://web.dev/learn/performance/resource-hints)
  - [Optimize Resource Loading](https://web.dev/learn/performance/optimize-resource-loading)
  - [Optimize Web Fonts](https://web.dev/learn/performance/optimize-web-fonts)

## Inspirations
- [Wordpress Uncaffeinated News](https://uncaffeinatednews.wordpress.com/) site
  - Used inspiration from Wordpress layouts and user interfaces.
- Professor Barry Cumbie, Computer Information Systems, University of North Alabama
  - Used code shared by Professor Cumbie on his website or in class.

## Libraries & Frameworks
- [Bootstrap 5.3.0](https://getbootstrap.com/): a frontend toolkit for building fast, responsive websites.
  - Used Bootstrap to set up the news grid system, navigation bar, and UI components.

## Assets
- Logos, banners, and articles from my Uncaffeinated [Wordpress](https://uncaffeinatednews.wordpress.com/) and [YouTube](https://www.youtube.com/@UNcaffeinated-1) social media sites.
- News data - a structured data file with content used to create dynamic news cards & grids.
- Google Fonts
- Google APIs and Gstatic: used to find fonts and speed them up on my website.
- [Roboto](https://fonts.google.com/specimen/Roboto) font

## One-liner Quote/Tagline
“Low-stress news about Northern Alabama and UNA student life.”

## User Story
“I want to showcase my UNA media projects and campus stories in a digital portfolio to demonstrate my skills and abilities to potential employers.”

## GitHub Links
- Repo: [https://github.com/ajuna345/uncaffeinated-website](https://github.com/ajuna345/uncaffeinated-website)
- Deployed App: [https://ajuna345.github.io/uncaffeinated-website/](https://ajuna345.github.io/uncaffeinated-website/)
- Wiki: [https://github.com/ajuna345/uncaffeinated-website/wiki/Design-Ideas](https://github.com/ajuna345/uncaffeinated-website/wiki/Design-Ideas)

## Model/Inspiration
- [UNCAFFEINATED Wordpress News Posts](https://uncaffeinatednews.wordpress.com/)
  - This site inspired my news grids, cards, and layout for this project.
  - I used my portfolio photos for news stories and improved the CIS-376 news site by adding a search bar and changing the layout.

<img width="1441" height="1250" alt="Screenshot 2026-03-05 134606" src="https://github.com/user-attachments/assets/7f0c0121-2984-47bb-a5e3-e0dd76a01395" />


## Code block + explanation (“news-search.js”)
This code waits for a user to type in the search bar, then it finds every news card that was just built from your data file. It changes text to lowercase to improve matching, then checks the title and story text of each card to see if they match. If a card doesn't have the words you're looking for, the script set the item display to ‘none’ and hides it so users only see matching items.

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
})
```
## Architecture / Infrastructure Notes
- The UNCAFFEINATED news application uses Bootstrap to handle the news grid, button styling, and search bars, which helps the site work on both desktop and mobile browsers.
- My application uses:
  - A dynamic approach to show news grids and cards.
    - Instead of adding every news story directly as HTML, it reads the articles from a JSON data asset file.
  - The JavaScript `fetch` method to get stories from an internal file (`news-data.json`).
    - Once the data is read, the JavaScript code creates HTML cards and adds them to the news grid.
    - This makes the site much easier to update in the future because I only have to add articles to the JSON data file.
  - The Bootstrap Modal on the main page for user login.
    - Once users enter the correct password, it stores the "logged-in" state in temporary session storage.
    - This remembers the user during the session but wipes data for better security when the page is closed or the user logs out.

## Verification

### Browser Compatibility
I tested the functionality and layout of the UNcaffeinated News application on these browsers:

- Desktop
  - Google Chrome
  - Microsoft Edge
  - Mozilla Firefox
- Mobile
  - Chrome (Android)
  - Safari (iOS)

### Android Phone Screenshots
<img width="250" height="700" alt="376 website 1" src="https://github.com/user-attachments/assets/f89fdc14-5cba-4fd5-b830-6b26f7731a48" />
<img width="250" height="700" alt="376 website 3" src="https://github.com/user-attachments/assets/8135943e-5d34-4936-9e6f-fa316982f561" />
<img width="250" height="700" alt="376 website 3" src="https://github.com/user-attachments/assets/8909feeb-0b12-473a-9617-4f3feedbb856" />


