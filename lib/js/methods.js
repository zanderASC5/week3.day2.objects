// Here, you'll create the object that will take the 'database' and 
// create a character sheet in HTML for each hero. 

// We could use functions for this, but developers typically give 
// objects properties and methods as a way to organize tasks and 
// responsibilities

const heroCreator = {};
// This "heroCreator" object will ultimately be responsible for 
// creating all of the HTML character sheets from the heroes array

// I'll add the first method, because I'm such a nice guy
// #NiceGuyMahdi

/**
 * This method adds an array of hero objects to the given HTML Element.
 * 
 * 1) This method should take 2 arguments; An HTML Div Element from the DOM, 
 * and an array of hero objects this method loops through each 
 * element of the array. 
 * 
 * 2) For each hero object, call the 
 * "createCharSheet()" method providing the hero object as an 
 * argument. 
 * 
 * 3)Take the result of that method call and append it to the 
 * HTML Div Element.
 * 
 * @param {HTMLDivElement} gridDiv div being populated
 * @param {Array} hero_array array of hero objects
 */
heroCreator.populateGrid = function(gridDiv, hero_array){
    for(const hero of hero_array){
        const charSheet = this.createCharSheet(hero); 
        // "this" is a keyword used to refer to the object this 
        // method belongs to, which is "heroCreator"
        // using "this" is preferred, but you could explicitly
        // write "heroCreator.createCharSheet(hero)" too
        gridDiv.appendChild(charSheet);
    }
}

// Notice the call to the "createCharSheet()" method...which doesn't
// exist yet! Now it's your turn; follow the documentation on how 
// each method should work.

// NOTE: I HIGHLY recommend testing your code in the browser
// The "sombra" hero object already exists, so you can use it for
// testing!

/**
 * 1) This method should take 1 argument, a hero object.
 * 
 * 2) Create an empty `div` element (it will serve as the container 
 * for all information pertaining to the hero object). 
 * 
 * 3) Give this div a class of "hero_container".
 * 
 * 4) Create and append an image to the div, using the proper source found in the
 * heroObj. NOTE: keep in mind the "src" should include the proper 
 * path to the image, which is in the "assets" folder.
 * 
 * 5) Call the method "createInfoDiv()", providing the hero object
 * as an argument.
 * 
 * 6) Take the result of that method call and append it to the div
 * you made in step #2.
 * 
 * 7) Return the div you made in step #2.
 * 
 * @param {Object} heroObj hero object
 * @return {HTMLDivElement}
 */
heroCreator.createCharSheet = function(){

}

/**
 * 1) This method should take 1 argument, a hero object.
 * 
 * 2) Create an empty `div` element (it will serve as the container 
 * for text information pertaining to the hero object). 
 * 
 * 3) Give this div a class of "hero_text_container".
 * 
 * 4) Loop through the hero object (this cannot be done like an array)
 * HINT: you can get all of the keys for an object using 
 * `Object.keys(targetObject)`, which returns an array of just the keys.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * NOTE: the array of keys from `Object.keys()` are strings. So, 
 * you can then loop through that array and get the value using square
 * bracket notation (NOT dot notation)
 * 
 * 5) For each key/value pairing in the hero object, create a new `p`
 * element and append it to the div you made in step #2
 * 
 * The text inside each `p` element should be in the form of the 
 * key followed by a ": " followed by the value for the key.
 * For example:
 * "name: sombra"
 * 
 * For the "abilities" key, the value is not a string, but an array,
 * so we'll have to treat it differently.
 * While looping, you can check to see if the value is an array using
 * Array.isArray(value)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 * Instead of the value, use a call to the method "getAbilityString()", 
 * providing the array as an argument. We'll make this next!
 * 
 * 6) return the div you made in step #2
 * 
 * @param {Object} heroObj hero object
 * @return {HTMLDivElement}
 */
heroCreator.createInfoDiv = function(heroObj){
    
}

/**
 * 1) This method should take 1 argument, an array of ability objects.
 * 
 * 2) I'll leave this one more open-ended since there are many
 * potential approaches you can take. 
 * 
 * 3) In the end you should return a string with ONLY the names of each
 * ability separated by a comma+space. 
 * ex: "ability1, ability2, ability3"
 * 
 * 4) Make sure to return the resulting String!
 * 
 * @param {Array} abilitiesArr array of ability objects
 * @return {String}
 */
heroCreator.getAbilityString = function(){

}

// BONUS: Currently, the ".createInfoDivonly()" method adds every
// key + value in one string to each `p` element, which makes it hard 
// to style one and not the other.
// Modify the ".createInfoDivonly()" method to ignore the "img" key and 
// allow for differential CSS styling betwee the key and value

// BONUS: In order to include each ability's description, include a
// tooltip that will appears on "mouseover"
// You'll have to modify the .getAbilityString() method and include
// the appropriate CSS
// See this link for details: https://www.w3schools.com/css/css_tooltip.asp