// Grab DOM elements
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// create event listener to move the menu when toggled
navToggle.addEventListener("click", () => {
    // get inital property value
    const visibility = primaryNav.getAttribute('data-visible')

    // condtional logic to change property value
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true) 
    } 
    
    if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})