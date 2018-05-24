// Here, you'll create the object that will take the 'database' and 
// create a character sheet in HTML for each hero. 

// We could use functions for this, but developers typically give 
// objects properties and methods as a way to organize tasks and 
// responsibilities

const charCreator = {};
// This "charCreator" object will ultimately be responsible for 
// creating all of the HTML character sheets from the heroes array

// I'll add the first method, because I'm such a nice guy
// #NiceGuyMahdi

/**
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
charCreator.populateGrid = function(gridDiv, hero_array){
    for(const hero of hero_array){
        const charSheet = this.createCharSheet(hero); 
        // "this" is a keyword used to refer to the object this 
        // method belongs to, which is "charCreator"
        // using "this" is preferred, but you could explicitly
        // write "charCreator.createCharSheet(hero)"
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
charCreator.createCharSheet = function(heroObj){
    const div = document.createElement("div");
    div.className = "hero_container";

    // adding img
    const imageSrc = `assets/${heroObj.img}`;
    const img = document.createElement("img");
    img.src = imageSrc;
    div.appendChild(img);

    // adding infoDiv
    const infoDiv = this.createInfoDiv(heroObj);
    div.appendChild(infoDiv);

    return div;
}

/**
 * 1) This method should take 1 argument, a hero object.
 * 
 * 2) Create an empty `div` element (it will serve as the container 
 * for text information pertaining to the hero object). 
 * 
 * 3) Give this div a class of "hero_text_container".
 * 
 * 4) Create and append an `h1` element to the div with the hero's .name
 * 
 * 5) Create and append an `h2` element to the div with the hero's .type
 * 
 * 6) Create and append an `h3` element to the div with the hero's .difficulty
 * 
 * 7) Create and append a `p` element to the div with the hero's .saying
 * 
 * 8) Call the method "getAbilityString()", providing the hero's .abilities
 * as an argument.
 * 
 * 9) Create and append a `p` element to the div with the result of that 
 * method call
 * 
 * 10) Create and append a `p` element to the div with the hero's .story
 * 
 * 11) return the div you made in step #2
 * 
 * @param {Object} heroObj hero object
 * @return {HTMLDivElement}
 */
charCreator.createInfoDiv = function(heroObj){
    const div               = document.createElement("div");
    div.className           = "hero_text_container";

    const name              = document.createElement("h1");
    name.innerText          = heroObj.name;
    div.appendChild(name);
    
    const type              = document.createElement("h2");
    type.innerText          = heroObj.type;
    div.appendChild(type);
    
    const difficulty        = document.createElement("h3");
    difficulty.innerText    = heroObj.difficulty;
    div.appendChild(difficulty);

    const saying            = document.createElement("p");
    saying.innerText        = heroObj.saying;
    div.appendChild(saying);
    
    const abilities         = document.createElement("p");
    abilities.innerText     = this.getAbilityString(heroObj.abilities);
    div.appendChild(abilities);

    const story            = document.createElement("p");
    story.innerText        = heroObj.story;
    div.appendChild(story);    
    
    return div;
}

/**
 * 1) This method should take 1 argument, an array of ability objects.
 * 
 * 2) I'll leave this one more open-ended since there are many
 * potential approaches you can take. 
 * 
 * 3) In the end you should return a string with ONLY the names of
 * ability separated by a comma. (ex: "ability1, ability2, ability3")
 * 
 * 4) Make sure to return the resulting String!
 * 
 * @param {Array} abilitiesArr array of ability objects
 * @return {String}
 */
charCreator.getAbilityString = function(abilitiesArr){
    return abilitiesArr.map(ability=>ability.name).join(",");
}

// BONUS: In order to include each ability's description, include a
// tooltip that will appears on "mouseover"
// You'll have to modify the .getAbilityString() method
// See this link for details: https://www.w3schools.com/css/css_tooltip.asp