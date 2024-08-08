# Module B - Web Page Implementation

**Competition time for the task: 4 hours**

In this module, you will build the **Retro Game House High Score Hall Of Fame gallery** website. The website will display the best game scores for each game. A Hall of Fame will be created for each game or event, and the top players will be featured on the honour board.

**Homepage (`index.html`):** The gallery will list games/events from the newest to the oldest that have made it into the Hall of Fame, with the most recently added appearing at the top. The game information must be fetched from the provided JSON file. The page shows the 20 newest Hall of Fame entries, and pagination allows the user to browse the next 20 games. If there are more than 20 games, use numeric pagination. Ensure there are at least 21 games to demonstrate how pagination works. Each game entry includes an image, the game's name, the best score, and the winner's username.

**Game/Event Page (`game.html`):** Clicking on a game/event name leads to a game-specific Hall of Fame view, which includes the game's name, image, and results. In this module, all games will open on the same page (`game.html`). Game information must be fetched from the JSON file (`game id:1`). The results should display the rank, player’s username, score, and date. Players should be listed by their scores, with the top player (rank 1) at the top. Ensure that the top three scores are highlighted appropriately. The number of displayed players is defined in user management, with a maximum of 20 results at this stage.

Add a search function to both pages. On the Hall of Fame page, the search should be based on game names, and on the game page, it should be based on usernames. Implement the search function without a separate search button, using modern methods like a 300-millisecond _debounce_ delay to optimise the search.

Follow the customer’s graphical guidelines and use the provided graphical materials. Customer-given photos, logos, and style guide are available at [materials](https://sollertis.datainsafe.fi/mycloud/index.php/s/xtMkjwhXCrGrC0D) and in additional materials in the assets folder.

Adhering to the client's corporate identity, colours, and styles is essential to ensure the new website fits the current site. The client requires that the site is user-friendly, modern, and easy to use on different devices. It is also essential to the client that the site meets the target audience's expectations and creates an atmosphere characteristic of retro games. The mandatory sections from the graphic design that need to be considered in the implementation are the logo, colours, fonts, text size, and images that should be selected from the image library.

- Desktop version width: 1440px
- Mobile version width: 375px

The homepage (`index.html`) and the game page (`game.html`) share a similar layout for the header and footer. The header contains the logo and a login button. The footer includes the competitor's name, school, and copyright information, marked "Taitaja 2024."

Ensure that your HTML and CSS code is semantically correct and passes all validation tests without errors. Check that the code is optimised, well-organized, and meets accessibility requirements. The code should be high-quality, transparent, and sustainable. We use Chrome Lighthouse to check code quality. Additionally, the page will be tested with the Axe DevTools accessibility tools, which help identify and correct accessibility issues, ensuring the site is accessible to as many users as possible.

**At the end of the module, you must deliver:**

- A functional, static, responsive website on a server
- An updated GitHub repository (including the created website code) and a `README.md` file
