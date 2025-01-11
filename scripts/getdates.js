// select the DOM elements for output
const year = document.querySelector("#currentyear")
const modified = document.querySelector("#lastModified")

// use the date object
const today = new Date()

year.innerHTML = `${today.getFullYear()}`

modified.innerHTML = `Last modified: ${document.lastModified}`
