// Here, you'll create the 'database' of information that will be used
// to populate the website with information for each character

// Use the main Overwatch site as your reference for hero information
// https://playoverwatch.com/en-us/heroes/

// The value for the "img" key refers to the name of the image file
// in the "assets" folder. Feel free to use the ones provided, or
// download your own!

// 1) Create 3 of the following 6 objects based on the corresponding hero:
// sombra, doomfist, mercy, lucio, orisa, dVa 
// Note: The first hero is provided for you

// The structure for each hero object is as follows:
// NOTE: the "abilities" key stores an array of objects!

// const someHero = {
//     name:"someName",
//     type:"offense, defense, tank, or support",
//     difficulty:"1/3",
//     img:"somePic.png",
//     saying:"blah blah some saying",
//     story:"blah blah some story",
//     abilities:[
//         {
//             name:"ability1",
//             description:"blah blah about ability1"
//         },
//         {
//             name:"ability2",
//             description:"blah blah about ability2"
//         }
//     ]
// }

const sombra = {
    name:"sombra",
    type:"offense",
    difficulty:"3/3",
    img:"sombra.png",
    saying:"EVERYTHING CAN BE HACKED… AND EVERYONE.",
    story:"One of the world's most notorious hackers, Sombra uses information to manipulate those in power.Long before she took up the alias 'Sombra,' ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.",
    abilities:[
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        },
        {
            name:"HACK",
            description:"Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents."
        },
        {
            name:"STEALTH",
            description:"Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage."
        },
        {
            name:"TRANSLOCATOR",
            description:"Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight)."
        },
        {
            name:"EMP",
            description:"Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
        },
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        }
    ]
}

const dVa = {
    name:"d.Va",
    type:"tank",
    difficulty:"2/3",
    img:"dVa.png",
    saying:"I play to win",
    story:"D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland.She is a very competitive individual, and coupled with her pro-gamer skills, this makes her an extremely effective mech pilot. Never backing down, D.Va always plays to win. Hana Song was once a pro-gamer. At home however, not all was well, as MEKA struggled to maintain its defense against the omnic that repeatedly attacked the nation. As the omnic continued to adapt, it eventually disrupted MEKA's drone-control networks, forcing the military to place pilots in the mechs. Scrambling to find suitable candidates, the government turned to the country's professional gamers, who possessed the necessary reflexes and instincts to operate the mechs' advanced weapons systems. Top stars were drafted, including Song, who was now 19. She saw the new mission as a game, and an evolution of her own career. Without fear or hesitation, she abandoned the limelight of her pro-gamer career, and got an armored mech operator's licence. As a member of MEKA, she could put her reflexes to the ultimate test on a real battlefield, instead of a digital one. Her skills and intense competitive spirit made her an extremely effective pilot.Song now fearlessly charges into battle alongside the rest of her MEKA unit, ready to spring to her nation's defense at a moment's notice. Recently, she has begun to stream combat operations to her adoring fans, and her growing following has turned her into a global icon. Sponsorship deals and her fanbase provided her with the means to customize her mech. ",
    abilities:[
        {
            name:"ability1",
            description:"blah blah about ability1"
        },
        {
            name:"ability1",
            description:"blah blah about ability1"
        },
        {
            name:"ability1",
            description:"blah blah about ability1"
        }

        {
            name:"ability2",
            description:"blah blah about ability2"
        }
    ]
}




let heros= ['sombra','dVa','lucio' ];
// const someHero = {
//     name:"someName",
//     type:"offense, defense, tank, or support",
//     difficulty:"1/3",
//     img:"somePic.png",
//     saying:"blah blah some saying",
//     story:"blah blah some story",
//     abilities:[
//         {
//             name:"ability1",
//             description:"blah blah about ability1"
//         },
//         {
//             name:"ability2",
//             description:"blah blah about ability2"
//         }
//     ]
// }

// 2) Create an array called "heroes" and store all of the hero object in the array

// 3) In "index.html", create a form that allows the user to create 
// and add a new hero (add it under the "#gridDiv").
// For simplicity, the form should just include: name, type, difficulty, and saying
// The form should have a "Submit" button

// 4) At the bottom of "events.js", give the "Submit" button an on click event handler 


// BONUS: add 3 more Overwatch heroes from Overwatch (remember to add 
// them to the "heroes" array!)

// BONUS: Since the "type" only has 4 valid options, try using a
// radio button instead of the standard text input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

// BONUS: In "style.css", style your form to look more like the rest
// of the website
