PLANTSURL = "http://localhost:3000/plants"
const addButton = document.createElement('button')
addButton.innerText = "Add Plant"
document.body.appendChild(addButton)
addButton.addEventListener('click', addPlant)


fetch(PLANTSURL)
.then(res => res.json())
.then(json => json.forEach(plant => {
    renderPlants(plant)
    addListeners(plant)
}),
)


function addPlant() {
    let options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }
    } 
    fetch(PLANTSURL, options)
    .then(resp => resp.json())
    .then(json => {
        renderPlants(json) 
        addListeners(json) 
    })
  
}

function renderPlants(plant){
  let html = `
  <div data-id="${plant.id}">
  <p>${plant.name} (${plant.species})</p>
  <button class="release" data-name="${plant.name}" data-plant-id="${plant.id}">Release</button></div>`
  let divCard = document.createElement('div')
  divCard.setAttribute("class", "card")
  divCard.setAttribute("data-card-id", `${plant.id}`)
  divCard.innerHTML = html
  document.body.appendChild(divCard)
  }

  function addListeners(plant){
    let releaseButtons = document.querySelector(`[data-plant-id='${plant.id}']`)
    releaseButtons.addEventListener('click', function(e) { removePlant(e) } )
  }
 
function removePlant(e) { 
     options = {
       method: "DELETE"
     }
         fetch(`${PLANTSURL}/${e.target.dataset.name}`, options)
         e.target.parentElement.parentElement.remove()
}  