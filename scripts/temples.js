// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be
// referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

// select elements for the footer dates
const year = document.getElementById('currentyear')
const modified = document.querySelector("#lastModified")

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click',()=>{
    mainnav.classList.toggle('show')
    hambutton.classList.toggle('show')
})


// use the date object
const today = new Date()

year.innerHTML = `© ${today.getFullYear()}`

modified.innerHTML = `Last modified: ${document.lastModified}`
