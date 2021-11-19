let card = document.querySelector(".row");

const movieList = (array) => {
  array.forEach(item => {
    card.innerHTML += `<div class="card-top">
                          <img src="${item.posterurl}" />
                          <div class="card-title">
                              <h3>${item.title}</h3>
                              <p>${item.releaseDate}</p>
                          </div>
                      </div>
                    `
   })
}
movieList(movies)

    let SeachInput = document.querySelector("#search-input")

    SeachInput.addEventListener('input', (e) => {
      const inputMovieSearch = e.target.value;
      const filterMovie = movies.filter(item => {
        return item.title.toLowerCase().indexOf(inputMovieSearch.toLowerCase()) >= 0;
      })

      card.innerHTML = "";
      movieList(filterMovie)
    })

// ========= site modal
let modals = document.querySelector('.modal');

let modalBottm = document.querySelector('.modal-bottom');

let buttonO = document.querySelector(".modalOkna")

let modalClose = document.querySelector('.modal-close');

let modalCloses = document.querySelector('.modals');

function openModal(){
  modalCloses.classList.add('opens')
  modalCloses.classList.remove('closing')
  document.body.style.overflow = "hidden"
}
function closeModel() {
  modalCloses.classList.remove('opens')
  modalCloses.classList.add('closing')
  document.body.style.overflow = "";
}


buttonO.addEventListener('click', openModal)

modalClose.addEventListener('click', closeModel)

modals.addEventListener("click", event => {
  if(event.target === modalCloses){
    closeModel()
  }
})