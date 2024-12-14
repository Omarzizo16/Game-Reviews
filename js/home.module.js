import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";
export class Home {
    constructor() {
        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener('click', () => {
            this.change(link);
            const category = link.getAttribute('data-category');
            this.getGames(category);
        });
    });
    this.loading=document.querySelector(".loading");
    this.details=document.getElementById('details');
    this.games=document.getElementById('games');

    this.ui = new Ui();
    this.getGames("mmorpg");
    }



    async change(link){
        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active");
    }

    startEvent() {
        document.querySelectorAll(".card").forEach((card) => {
         card.addEventListener("click", () => {
                const id = card.dataset.id;
                this.showDetails(id);
            });
        });
        }


    showDetails(idGame){
        const details = new Details(idGame);
                this.details.classList.remove('d-none');
                this.games.classList.add('d-none');
    }

    async getGames(category){
        this.loading.classList.remove('d-none');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '91b60fc341msh1a657795275374bp1bdc04jsn15a4c1aba16b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        try {
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
            if(!api.ok) {
                throw new Error(`HTTP error! status: ${api.status}`);
            }
            const response = await api.json();
            this.loading.classList.add('d-none');
            this.ui.displaygames(response);
            this.startEvent();
        } catch (error) {
            this.loading.classList.add('d-none');
            this.ui.showErrorMessage(`Failed to load games: ${error.message}`);
        }

    }
}