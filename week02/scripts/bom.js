const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('ul') // you need to fill in the blank to reference the HTML element that is a 
// unordered list element.

// Create a li element that will hold each entries chapter title and an associated delete button
const li = document.createElement('li')

// 7. Create a delete button
const deleteButton = createElement('button')

// 8. Populate the li element variable's textContent or innerHTML with the input value.
li.textContent = input.value
// textContent is preferred over innerHTML because it is more secure.
// However, if you need to include HTML tags, then you would use innerHTML.
// textContent will not render HTML tags. It will display the tag as text.

// Why is the value property used?
// Because the input variable references an HTML input text field and that is what is wanted, i.e.,
// the user's entry. Here is the HTML that was provided: <input type="text" id="favchap" 
// placeholder="Alma 5"

// 9. Populate the button textContent with a X
deleteButton.textContent = "❌"

// 10. Append the li element variable with the delete button.
li.append(deleteButton)

// 11. Append the li element variable to the unordered list in your HTML
list.append(li)

button.addEventListener('click', function (){
    // Code to execute when the button is clicked
})