document.addEventListener('DOMContentLoaded', function(){
    const gamesContainer = document.querySelector('#home-games');
    const paginationsContainer = document.querySelector('.pagination-links');
    const searchInput = document.querySelector('#search-game');

    let games = [];

    //for pagination
    const pageSize = 20;
    let currentPage = 0;
    let totalPage = 0;

    getGames();

    async function getGames(){
        let response = await fetch('./games.json');
        let data = await response.json();
        games = data.games;
        //sort the game by year
        games.sort((a, b) => b.launched_year - a.launched_year);
        //determine the totalPage
        totalPage = Math.ceil(games.length/ pageSize);
        // generate pagination
        if(totalPage > 1){
            //add the left nav button
            paginationsContainer.innerHTML = `
                <button class="pagination-nav" id="pagination-nav-left">&lt;</button>
            `
            for(let i = 0 ; i < totalPage ; i++){
                if(i === 0){
                    paginationsContainer.innerHTML += ` 
                        <button class="pagination-nav pagination-nav-number selected" data-page="${i}">${i+1}</button>
                    `;
                    continue;
                }
                paginationsContainer.innerHTML += ` 
                    <button class="pagination-nav pagination-nav-number" data-page="${i}">${i + 1}</button>
                `;
            }

            paginationsContainer.innerHTML += `
                <button class="pagination-nav" id="pagination-nav-right">&gt;</button>
            `

            //event listeners
            document.querySelector('#pagination-nav-left').addEventListener('click', function(){
                if(currentPage > 0){
                    currentPage--;
                    document.querySelector('.pagination-nav-number.selected').classList.remove('selected');
                    document.querySelector(`.pagination-nav-number[data-page="${currentPage}"]`).classList.add('selected');
                    displayGame();
                }
            });
            document.querySelector('#pagination-nav-right').addEventListener('click', function(){
                if(currentPage < totalPage - 1){
                    currentPage++;
                    document.querySelector('.pagination-nav-number.selected').classList.remove('selected');
                    document.querySelector(`.pagination-nav-number[data-page="${currentPage}"]`).classList.add('selected');
                    displayGame();
                }
            });
            document.querySelectorAll('.pagination-nav-number').forEach((el)=>{
                el.addEventListener('click', function(){
                    currentPage = el.getAttribute('data-page');
                    document.querySelector('.pagination-nav-number.selected').classList.remove('selected');
                    document.querySelector(`.pagination-nav-number[data-page="${currentPage}"]`).classList.add('selected');
                    displayGame();
                });
            });
        }
        displayGame();

    }

    function displayGame(filteredGames = []){
        let winner = {};
        let paginatedGames = [];
        if(filteredGames.length > 0){
            paginatedGames = filteredGames.slice( currentPage === 0 ? currentPage * pageSize : currentPage * pageSize , currentPage < totalPage - 1 ? currentPage * pageSize + 20 : games.length);
        }else{
            paginatedGames = games.slice( currentPage === 0 ? currentPage * pageSize : currentPage * pageSize , currentPage < totalPage - 1 ? currentPage * pageSize + 20 : games.length);
        }
        //reset the dom
        gamesContainer.innerHTML = '';
        for(game of paginatedGames){
            //find the best scorer for the game
            game.hall_of_fame.sort((a,b) =>{
                return b.score - a.score;
            });
            winner = game.hall_of_fame[0];
            gamesContainer.innerHTML += `
                <article class="game on-scroll">
                    <img src="./Gamesboxes-from-collection/nintendo-Switch/game_thumbnail.jpeg" alt="Thumbnail Image Of ${game.game_name.en}">
                    <h3 class="game-title main-heading">${game.game_name.en}</h3>
                    <a href="game.html?ID=${game.ID}">
                        <div class="game-detail">
                               <p class="mb-1">${game.description.en}</p>         
                               <div class="game-winner">
                                    Game Winner: <strong>${winner.username}</strong> <br>Score: <strong>${winner.score}</strong>
                                </div>
                        </div>
                    </a>
                </article>
            `;
        }

        //games list
        const gameOnScrollElements = document.querySelectorAll('#home-games .on-scroll');
        const observer3 = new IntersectionObserver((entries)=>{
            entries.forEach((  entry , i)=>{
                if(entry.intersectionRatio > 0){
                    gameOnScrollElements.forEach((e , i) =>{
                        //add some delay to animation
                        e.style.animationDelay = `calc(${i} * 0.2s)`;
                        e.classList.add('show');
                    });
                }
            });

        })
        observer3.observe(document.querySelector('#home-games'));
    }

    function searchGames(){
        const query =  document.querySelector('#search-game').value.toLowerCase();
        const filteredGames = games.filter((game)=>{
            return game.game_name.en.toLowerCase().includes(query);
        });

        displayGame(filteredGames);
    }
    //debounce function
    function debounce(func, delay){
        let timeout;
        return function(...args){
            clearTimeout(timeout);
            timeout =  setTimeout(()=> func.apply(this.args) ,delay);
        };
    }
    //event listener
    let debounceSearch = debounce(searchGames , 300);

    searchInput.addEventListener('input' , debounceSearch);


    //effect when on scroll using Intersection Observer API
    //hero
    const observer1 = new IntersectionObserver((entries)=>{
        for(let entry of entries){
            if(entry.intersectionRatio > 0){
                entry.target.classList.add('show');
            }
        }
    })
    observer1.observe(document.querySelector('#hero-wrapper'));

    //about us
    const aboutOnScrollElements = document.querySelectorAll('#about-wrapper .on-scroll');
    const observer2 = new IntersectionObserver((entries)=>{
        entries.forEach((  entry , i)=>{
            if(entry.intersectionRatio > 0){
                aboutOnScrollElements.forEach((e , i) =>{
                    //add some delay to animation
                    e.style.animationDelay = `calc(${i} * 0.2s)`;
                    e.classList.add('show');

                });
            }
        });

    },{
        rootMargin: "-20px",
    })
    observer2.observe(document.querySelector('#about-wrapper'));


});