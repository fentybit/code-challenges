# Ruby Object Orientation

## Part 1: Conceptual questions
1. How is an Object Oriented approach to programming different from a Procedural approach?
2. What is an object?
3. What is a class?
4. What method do we use to "give birth to" or "create" objects?
5. What are attributes and attribute readers / writers?
6. What 2 types of methods and 2 types of variables do we use in OO Ruby?
7. What is `self`?

## Part 2: Coding Challenge - Building
* Your friend asked you to build them a real estate app because they're really tired of using Zillow. Your first step is to do something called "domain modeling," which means taking the real world concepts involved in real estate and translating them into the wonderful world of object orientation! After considering what objects you will need, you decide to start with the Listing object, which will represent all real estate listings your app will help its user find.
1. Build a Listing class.
2. Build a method that creates new Listing instances. Listings should be created with a location, price, and status. The default status should be `"for sale"`.
3. The user of this app needs to be able to find out about a Listing's location, price, and status for all currently created Listing objects. Create methods that will return this information.
4. The user of this app needs to be able to set the status of the Listing after it is created. Build a method to let them do this.
5. Create an instance method called `price_drop` that takes in a percentage as an argument and reduces the listing's price by that percentage.
6. Create a class variable to store all the Listings in the class, and come up with a way to add Listings to this variable after they get created.