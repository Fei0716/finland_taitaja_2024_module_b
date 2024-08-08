document.addEventListener('DOMContentLoaded', function(){
    const urlParams  = new URLSearchParams(window.location.search);
    const gameID = urlParams.get('ID');
    const rankTableDOM = document.querySelector('#table-rank');
    const searchInput = document.querySelector('#search-game');

    let games = [];
    let game = {};
    let gameResult = [];
    const gameResultCount = 20;//game result set by the admin
    getGames();
    async function getGames(){
        let response = await fetch('./games.json');
        let data = await response.json();
        games = data.games;
        //sort the game by year
        game = games.find((x) => x.ID == gameID);
        game.hall_of_fame.sort((a , b) => b.score - a.score);
        //add rankings
        game.hall_of_fame.forEach((g ,i)=>{
            g.rank = ++i;
        })
        displayGame();
        displayResult();
    }
    function displayGame(){
        document.querySelector('#game-detail #game-name').innerHTML = game.game_name.en;

        document.querySelector('#game-detail #game-genre').innerHTML = game.genre;
        document.querySelector('#game-detail #game-launched_year').innerHTML = game.launched_year;
        document.querySelector('#game-detail #game-developer').innerHTML = game.maker;

        document.querySelector('#game-detail #game-platform').innerHTML = game.original_platforms[0];
        document.querySelector('#game-detail #game-publisher').innerHTML = game.publisher;
        document.querySelector('#game-detail #game-description').innerHTML = game.description.en;
    }
    function displayResult(filteredResult = []){
        let result = game.hall_of_fame;
        gameResult = result.slice(0 , gameResultCount);

        if(filteredResult.length > 0){
            gameResult = filteredResult;
        }


        //clear table
        rankTableDOM.innerHTML = '';
        gameResult.forEach((r, i)=>{
            rankTableDOM.innerHTML += `
                <tr data-rank="${r.rank}" class="on-scroll">
                    <td>${r.rank}</td>
                    <td>${r.username}</td>
                    <td>${r.score}</td>
                    <td>${formatDateTime(new Date(r.date_time))}</td>
                </tr>
            `;
        });

        //add onscroll fadein effect
        const rankScrollElements = document.querySelectorAll('#rank-wrapper .on-scroll');
        const observer1 = new IntersectionObserver((entries)=>{
            entries.forEach((  entry , i)=>{
                if(entry.intersectionRatio > 0){
                    console.log('gyat');
                    rankScrollElements.forEach((e , i) =>{
                        //add some delay to animation
                        e.style.animationDelay = `calc(${i} * 0.2s)`;
                        e.classList.add('show');
                    },);
                }
            });

        },{
            rootMargin: "-150px",
            // threshold: 0.5,
        });
        observer1.observe(document.querySelector('#rank-wrapper'));
    }

    function formatDateTime(dateTime){
        //generate the date
        let year = dateTime.getFullYear();
        let month = dateTime.getMonth() + 1;
        let date = dateTime.getDate();

        //generate the time
        let hour = dateTime.getHours();
        let minute = dateTime.getMinutes();
        return `${date.toString().padStart(2 ,'0')}/${month.toString().padStart(2 ,'0')}/${year} ${hour.toString().padStart(2 ,'0')}:${minute.toString().padStart(2 ,'0')}`;
    }

    function searchGames(){
        const query =  document.querySelector('#search-game').value.toLowerCase();
        const filteredResult = game.hall_of_fame.filter((r)=>{
            return r.username.toLowerCase().includes(query);
        });

        displayResult(filteredResult);
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



    //for confetti
    const canvas = document.querySelector('#canvas-confetti');
    const ctx = canvas.getContext('2d');
    const colors = ['#304BFF', '#9900FF', '#00FFCC' ,'#0ed100', '#d1b600' , '#d30000'];
    const confettiCount = 300;
    const gravity = 0.25;
    const terminalVelocity = 1;
    const drag = 0.075;

    //dynamic states
    let confettis = [];
    //class
    class Confetti{
        constructor(i){
            this.id = i;
            this.color = colors[range(0 , colors.length - 1)];
            this.height = range(10,20);
            this.width = range(5,10);
            this.x = range(0 , canvas.width);
            this.y = canvas.height - 1;//start from the bottom of the canvas;
            this.rotation = range(0 , 2 * Math.PI);
            this.scaleX = 1;
            this.scaleY = 1;
            this.velocityX = range(-25, 25);
            this.velocityY = range(0 , -50);
        }
        draw(){
            let actualWidth = this.width * this.scaleX;
            let actualHeight = this.width * this.scaleY;

            //move the canvas to the confetti and rotate
            ctx.translate(this.x , this.y);
            ctx.rotate(this.rotation);

            //Apply forces to velocity
            this.velocityX -= this.velocityX * drag;
            this.velocityX += Math.random() > 0.5 ? Math.random(): -Math.random();
            this.velocityY  = Math.min(terminalVelocity , this.velocityY + gravity);

            //set the position of confetti
            this.x += this.velocityX;
            this.y += this.velocityY;

            //remove the confetti if it's out of frame
            if(this.y >= canvas.height){
                confettis.splice( confettis.findIndex( c => c.id === this.id) , 1);
            }
            //loop x position
            if(this.x > canvas.width ){
                this.x = 0;
            }
            if(this.x < 0 ){
                this.x = canvas.width;
            }
            // Spin confetto by scaling y
            this.scaleY = Math.cos(this.y * 0.1);
            //apply color to the confetti
            ctx.fillStyle = this.color;

            //draw the confetti
            ctx.fillRect(-actualWidth / 2, -actualHeight / 2, actualWidth , actualHeight);
            //reset the canvas' transformation matrix
            ctx.setTransform(1 ,0, 0, 1 ,0 ,0);


        }
    }

    //functions
    function range(min,max){
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }
    function confettiLoop(){
        //clear the canvas
        ctx.clearRect(0 , 0 ,canvas.width, canvas.height);
        if(confettis.length <= 0 ){
            confettis = [];
            //initialize  confetti particles
            for(let i = 0; i < confettiCount; i++){
                confettis.push(new Confetti(i));
            }
        }
        //draw each of the confettis
        confettis.forEach((c)=>{
            c.draw();
        });
        requestAnimationFrame(confettiLoop);
    }

    requestAnimationFrame(confettiLoop);



});