import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {
        this.ui = new Ui;
        document.getElementById('btnClose').addEventListener('click', ()=>{
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        })
        this.loading=document.querySelector(".loading");
        this.getDetails(id);
    };
    
    async getDetails(idGames){
        this.loading.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '91b60fc341msh1a657795275374bp1bdc04jsn15a4c1aba16b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    try {
    	const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);
    	     
        if (!api.ok) {
            throw new Error(`HTTP error! status: ${api.status}`);
        }
        const response = await api.json();
        this.loading.classList.add('d-none');
            this.ui.displayDetails(response);
        }
        catch (error) {
            this.loading.classList.add('d-none');
            this.ui.showErrorMessage(`Failed to load game details: ${error.message}`);
        }
        }
    }