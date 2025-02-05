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


// LOOP THROUGH THE ARRAY
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Hermosillo Sonora Mexico",
      location: "Hermosillo, Mexico",
      dedicated: "2000, February, 27",
      area: 10769,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hermosillo-sonora-mexico/400x250/hermosillo-sonora-mexico-temple-1360031-wallpaper.jpg"
    },
    {
      templeName: "Concepción Chile",
      location: "Concepción, Chile",
      dedicated: "2018, October, 28",
      area: 23095,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/01-Concepcion-Chile-Temple-2113673.jpg"
    },
    {
      templeName: "Mesa Arizona",
      location: "Mesa, Arizona, United States",
      dedicated: "1927, October, 23-26",
      area: 75000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
    },
    // Add more temple objects here...
  ];

createTempleCard(temples)

const home = document.querySelector("#home")
const old = document.querySelector("#old")
const newLink  = document.querySelector("#new")
const large = document.querySelector("#large")
const small = document.querySelector("#small")

home.addEventListener("click",()=>{
    createTempleCard(temples)
})

old.addEventListener("click",()=>{
    createTempleCard(temples.filter(temple=>Number(temple.dedicated.substring(0,4))<1900))
})

newLink.addEventListener("click",()=>{
    createTempleCard(temples.filter(temple=>Number(temple.dedicated.substring(0,4))>2000))
})

large.addEventListener("click",()=>{
    createTempleCard(temples.filter(temple=>temple.area>90000))
})

small.addEventListener("click",()=>{
    createTempleCard(temples.filter(temple=>temple.area<10000))
})


function createTempleCard(filteredTemples){
    document.querySelector(".container").innerHTML = ""
    filteredTemples.forEach(temple=>{
        let card = document.createElement("section")
        let name = document.createElement("h3")
        let location = document.createElement("p")
        let dedication = document.createElement("p")
        let area = document.createElement("p")
        let img = document.createElement("img")

        name.textContent = temple.templeName
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`
        img.setAttribute("src",temple.imageUrl)
        img.setAttribute("alt",`${temple.templeName} Temple`)
        img.setAttribute("loading","lazy")

        card.appendChild(name)
        card.appendChild(location)
        card.appendChild(dedication)
        card.appendChild(area)
        card.appendChild(img)

        document.querySelector(".container").appendChild(card)
    })
}