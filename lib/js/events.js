// Here, you'll use your knowledge of the DOM to create HTML elements 
// for each hero from the 'database' as well as assign event handlers.

// This step requires the 2 other parts ("heroes.js" and "methods.js")
// to be functional. However, you can still work on the HTML and CSS
// of the site as well as setting up the event handlers.

// 1) In "index.html", create an empty `div` with an id of "gridDiv"

// 2) create a variable "gridDiv" and use the DOM to store the div you
// just made into it
const gridDiv = document.getElementById("gridDiv");

// 3) call the method "heroCreator.populateGrid()" and provide it with
// 2 arguments, the "gridDiv" variable you just made, and the "heroes"
// array variable.
// NOTE: the method and the array are defined in the other .js
// files. If those parts are working correctly, there shouldn't be
// an error.
heroCreator.populateGrid(gridDiv, heroes);

// We'll be using a CSS Grid layout to display elements.
// Flex-box works in 1 dimension, using a row or column
// Think of grid as a 2 dimensional flex-box, using rows and columns!
// Feel free to do a little research on how Grids work before
// moving on: https://www.w3schools.com/css/css_grid.asp

// 4) In "style.css", add styling to the `#gridDiv`.
// Make sure to display it as "inline-grid"
// Set the `grid-template-columns` to "auto auto auto"
// Give the space between items a `grid-gap` of "10px";

// 5) Setup the CSS for the grid items, which should all be divs with
// a class of ".hero_container"
// Make sure to have ".hero_container" display as flex and as rows
// The `img` inside of each ".hero_container" should have a 
// background-color of #f7931e and a border of "1px solid #00aeff"

// Take note of the height for the images including the border (312px)

// Also, if you're using images I did not provide, you'll need to 
// keep the height/width in mind moving forward.

// 6) By default, we DON'T want to see the ".hero_text_container", so 
// set it so it doesn't `display`

// 7) Create a variable called "allHeroContainers" and use the DOM to 
// store all of the divs with the ".hero_container" class 
// HINT: use "document.getElementsByClassName()", which should return
// and array-like (HTMLCollection) object
const allHeroContainers = document.getElementsByClassName("hero_container");

// 8) Define a function "removeIds", that removes the id from all of
// the in the "allHeroContainers" variable you just made
// Hint: Check out the .removeAttribute() DOM method
// https://www.w3schools.com/jsref/met_element_removeattribute.asp
const removeIds = function(){
    for(hero_container of allHeroContainers){
        hero_container.removeAttribute("id");
    }
}

// 9) Loop through each item in the "allHeroContainers" you just made 
// and set an on click event listener that calls "removeIds" and then 
// set's the current ".hero_container"'s id to "highlight"

for(const hero_container of allHeroContainers){
    hero_container.addEventListener("click",function(event){
        removeIds();
        event.currentTarget.id = "highlight";
    })
}

// Test to make sure your event handlers are working properly!

// 10) Now that we have an on click listener on each ".hero_container,
// make sure the cursor changes to a pointer when the user mouses 
// over it
// HINT: Don't overthink this! Check out 
// https://www.w3schools.com/css/tryit.asp?filename=trycss_cursor

// 11) Let's make sure the div that has the "highlight" id stands out!
// In the "style.css" file, set the `#highlight` element to have a
// height of 312px (the image height from before)
// Set the "grid-row-start" to 1
// Set the "grid-row-end" to 3



// BONUS: Style the ".hero_text_container" as you see fit

// BONUS: Include a keypress listener that allows the user to navigate
// the characters using the arrow keys.

// UPDATE OBJECTS LESSON