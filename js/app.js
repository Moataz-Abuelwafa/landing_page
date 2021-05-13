/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll("section");
const navBar = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// loop for creating navmar list from sections

sections.forEach( (elm, index)=> {

    // getting section name on navbar from attribute 
    let linktxt = elm.getAttribute("data-nav");
    let navlink = document.createElement("a");
    let txtnode = document.createTextNode(linktxt);
    let navList = document.createElement("li");

    navlink.appendChild(txtnode);
    navList.appendChild(navlink);
    
    navlink.addEventListener("click", (event)=> {
        elm.scrollIntoView({behavior: "smooth"});
    })

    // scrolling to the section

  fragment.appendChild(navList);
})

navBar.appendChild(fragment);


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
 
window.addEventListener("scroll", ()=> {
sections.forEach((sec, index)=> {
    const rect = sec.getBoundingClientRect();

// the section top at 0 and less than 300
    if (rect.top >= 0 && rect.top < 300) {
    // get section name from data-nav attribute
        const sectionnav = sec.getAttribute("data-nav");

    // remove active class from other sections
        sections.forEach( (active_section)=> {
            active_section.style.background = "black";
        })

        sec.style.background = "green";
        //select all links in the document
        const links = document.querySelectorAll("a");
        links.forEach( (alink)=>{
            if (alink.innerText == sectionnav) {
                links.forEach( (del_link)=> {
                    del_link.style.background = "gold";
                })
              alink.style.background = "blue";  
            }
         })


        }
    });
})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
