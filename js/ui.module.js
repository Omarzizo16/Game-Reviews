export class Ui {
   constructor() {};
   displaygames(gamesData){
         let gamesBox = ``;
         for (let i = 0; i < gamesData.length; i++) {
            gamesBox += `
            <div class="col">
            <div data-id="${gamesData[i].id}"  class="card h-100 bg-transparent" role="button">
               <div  class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" alt="${gamesData[i].title} game thumbnail" src="${gamesData[i].thumbnail}" />
                  </figure>
                  <figcaption>
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small">${gamesData[i].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
                     <p class="card-text small text-center opacity-50">
                        ${gamesData[i].short_description.split(" ", 8)}
                     </p>
                  </figcaption>
               </div>
               <footer class="card-footer small hstack justify-content-between">
                  <span class="badge badge-color">${gamesData[i].genre}</span>
                  <span class="badge badge-color">${gamesData[i].platform}</span>
               </footer>
            </div>
         </div>
            `;
         }
         document.getElementById("gameData").innerHTML = gamesBox;
      }

      showErrorMessage(message) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            footer: 'Please try again later'
         });
      }


         displayDetails(detailsData) {
         const content = `
         <div class="col-md-4">
         <img src="${detailsData.thumbnail}" class="w-100" alt="${detailsData.title} game details" />
      </div>
      <div class="col-md-8">
         <h3>Title: ${detailsData.title}</h3>
         <p>Category: <span class="badge text-bg-info"> ${detailsData.genre}</span> </p>
         <p>Platform: <span class="badge text-bg-info"> ${detailsData.platform}</span> </p>
         <p>Status: <span class="badge text-bg-info"> ${detailsData.status}</span> </p>
         <p class="small">${detailsData.description}</p>
         <a class="btn btn-outline-warning" target="_blank" href="${detailsData.game_url}">Show Game</a>
      </div>
         `;
         
         document.getElementById("detailsContent").innerHTML = content;
      }
    }