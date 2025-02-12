const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list') // you need to fill in the blank to reference the HTML element that is a 
// unordered list element.

// Why is the value property used?
// Because the input variable references an HTML input text field and that is what is wanted, i.e.,
// the user's entry. Here is the HTML that was provided: <input type="text" id="favchap" 
// placeholder="Alma 5"
input.value = ''
input.focus();


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
})

button.addEventListener('click',()=>{
    if (input.value != '') { // make sure the input is not empty
        displayList(input.value) // call the function that outputs the submitted chapter
        chaptersArray.push(input.value) // add the chapter to the array
        setChapterList() // update the localStorage with the new array
        input.value = '' // clear the input
        input.focus() // set the focus back to the input
    }
})


function displayList(item){
    const li = document.createElement('li') // Create a li element that will hold each entries chapter title and an associated delete button
    const deleteButton = document.createElement('button') // 7. Create a delete button
    li.textContent = item // note the use of the displayList parameter 'item'    8. Populate the li element variable's textContent or innerHTML with the input value. textContent is preferred over innerHTML because it is more secure. However, if you need to include HTML tags, then you would use innerHTML. textContent will not render HTML tags. It will display the tag as text.
    deleteButton.textContent = "❌"  // 9. Populate the button textContent with a X
    deleteButton.classList.add('delete') // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deleteButton) // 10. Append the li element variable with the delete button.
    list.append(li) // 11. Append the li element variable to the unordered list in your HTML
    deleteButton.addEventListener('click', function(){
        list.removeChild(li)
        input.focus()
    })    
}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'))
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1)
    chaptersArray = chaptersArray.filter(item => item !== chapter)
    setChapterList()
}