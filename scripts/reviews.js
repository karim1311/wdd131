// COUNT REVIEWS
// initialize display element variable
const visitsDisplay = document.querySelector(".reviews")

// 2.- Get the stored VALUE for the numReviews-ls KEY in localStorage if it exists. If the numReviews (visits) KEY is missing, then assign 0 to the numReviews variable.
let numReviews =  Number(window.localStorage.getItem("numReviews-ls")) || 0

// 3.- Determine if this is the first review or display the number of reviews. 
// We wrote this example backwards in order for you to think deeply about the logic.
if (numReviews !== 0){
    visitsDisplay.textContent = numReviews
} else {
    visitsDisplay.textContent = `This is your first review. Welcome!`
}

// 4.- Increment the number of reviews by one
numReviews++

// 5.- store the new review total into localStorage, key = numReviews-ls
localStorage.setItem("numReviews-ls", numReviews)