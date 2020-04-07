# Building Rails APIs

## Part 1: Conceptual questions
1. What's an API?
2. Describe the difference between how you've used Rails in the past (to build a full stack app) and you would use it as an API. What part of the MVC architecture does an API encompass?
3. Why would we want to separate the front end and back end of an application?
4. When we used Rails as an MVC framework our controller actions served erb views in response to http requests. What type of data do APIs commonly serve in their responses?

## Part 2: Coding Challenge - Build a Plant API
1. Use a generator to create a rails api app
2. Copy the seed file in this directory to the new app
3. Build a plants table with columns "name" and "species" as well as associated model and controller
4. Build an index controller action that queries all plants from the db and sends them in json format
* Test out the action by starting a rails server and navigating to the new endpoint in the browser, verifying that a json of all plants is returned
5. Create an index.js file and send a fetch request to the same endpoint, logging the data to the developer console

## IF TIME:
* Build out additional controller actions and fetch requests for:
1. Viewing a single plant
2. Adding a new plant
3. Deleting a plant
* Change the show route url to use the plant's name rather than the plant's id (ex. localhost:3000/plants/black-alder instead of localhost:3000/plants/2)