// 1. Build a function that takes the plants json data from a get request to /plants and title-cases the entire name of each plant (not just capitalize the first word)
// 2. Build a function `filterBySpeciesPlants` that takes in plants json data and a species name and returns only those including that species name
// 3. Build a function `alphabetizePlants` that takes in plants json data and returns the plants sorted alphabetically by name
// 4. Build a function `randomizePlants` that takes in plants json data and a nunber and returns a random set of that number of plants
// 5. Build a higher order function that takes in any of the above functions as a callback, a number, and any other necessary optional arguments, and returns a *function* which invokes the callback with the arguments


function capitalize(plants) {
    plants.forEach( (plant) => {
        const newPlant = plant.name.capitalize();
        console.log(newPlant);
        return newPlant;
    });
}

console.log(fetch("http://localhost:3000/plants")
    .then(response => response.json())
    .then(json => capitalize(json))
)

function filterBySpeciesPlants(name) {

}