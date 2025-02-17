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
const songs = [
    {
      songName: "Die With A Smile", // song
      artists: "Lady Gaga, Bruno Mars", // artist(s)
      release: "2024, August, 15", // release
      views: 707475057, // YT views
      imageUrl:
      "https://i.ytimg.com/vi/kPa7bsKwL-c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCP__7GEQfQgkh0AfV4704HTYiVUA"
    },
    {
      songName: "Not Like Us",
      artists: "Kendrick Lamar",
      release: "2024, July, 4",
      views: 253121494,
      imageUrl:
      "https://i.ytimg.com/vi/T6eK-2OQtew/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA4opTsB0l3Lj-ka-3XD-YN8FOF_Q"
    },
    {
      songName: "luther (with sza)",
      artists: "Kendrick Lamar, SZA",
      release: "2024, November, 22",
      views: 51909429,
      imageUrl:
      "https://i.ytimg.com/vi/HfWLgELllZs/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLDH4mwE_N3EToOf6I0APXJzEUJcLA"
    },
    {
      songName: "APT.",
      artists: "ROSÉ, Bruno Mars",
      release: "2024, October, 17",
      views: 1140291412,
      imageUrl:
      "https://i.ytimg.com/vi/ekr2nIex040/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBNsZIkTHzaIv8GCeZa51sMz6Zf-Q"
    },
    {
      songName: "BIRDS OF A FEATHER",
      artists: "Billie Eilish",
      release: "2024, September, 27",
      views: 246711204,
      imageUrl:
      "https://i.ytimg.com/vi/d5gf9dXbPi0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLxB9RHAyXQR23e7DMOflvTVgOdw"
    },
    {
      songName: "DtMF",
      artists: "Bad Bunny",
      release: "2025, January, 5",
      views: 46877947,
      imageUrl:
      "https://i.ytimg.com/vi/TRjlrJ2zqn0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDIW4t7YgBn2osm90xiZkzp_Q2r5g"
    },
    {
      songName: "Abracadabra",
      artists: "Lady Gaga",
      release: "2025, February, 2",
      views: 43328314,
      imageUrl:
      "https://i.ytimg.com/vi/vBynw9Isr28/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDR0Vg0YFfABVb5Cgh4GC6fL67HZA"
    },
    {
      songName: "tv off (feat. lefty gunplay)",
      artists: "Kendrick Lamar, Lefty Gunplay",
      release: "2024, November, 22",
      views: 58285071,
      imageUrl:
      "https://i.ytimg.com/vi/U8F5G5wR1mk/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLAkI48I0XG4hOjEErF3cCDt-Rnl_g"
    },
    {
      songName: "BAILE INoLVIDABLE",
      artists: "Bad Bunny",
      release: "2025, January, 9",
      views: 63812327,
      imageUrl:
      "https://i.ytimg.com/vi/TRjlrJ2zqn0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDIW4t7YgBn2osm90xiZkzp_Q2r5g"
    },
    {
      songName: "That's So True",
      artists: "Gracie Abrams",
      release: "2024, October, 22",
      views: 38488752,
      imageUrl:
      "https://i.ytimg.com/vi/W_YOJWZIjxo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAPRAPQjKodCP1B-plv2telfNNH2Q"
    },
    // Add more song objects here...
  ];

createSongCard(songs)

const home = document.querySelector("#home")
const old = document.querySelector("#old")
const newLink  = document.querySelector("#new")
const large = document.querySelector("#large")
const small = document.querySelector("#small")

home.addEventListener("click",()=>{
    createSongCard(songs)
})

// old.addEventListener("click",()=>{
//     createTempleCard(temples.filter(temple=>Number(temple.release.substring(0,4))<1900))
// })

// newLink.addEventListener("click",()=>{
//     createTempleCard(temples.filter(temple=>Number(temple.dedicated.substring(0,4))>2000))
// })

// large.addEventListener("click",()=>{
//     createTempleCard(temples.filter(temple=>temple.area>90000))
// })

// small.addEventListener("click",()=>{
//     createTempleCard(temples.filter(temple=>temple.area<10000))
// })


function createSongCard(filteredSongs){
    document.querySelector(".container").innerHTML = ""
    filteredSongs.forEach(song=>{
        let card = document.createElement("section")
        let name = document.createElement("h3")
        let artist = document.createElement("p")
        let release = document.createElement("p")
        let views = document.createElement("p")
        let img = document.createElement("img")

        name.textContent = song.songName
        artist.innerHTML = `<span class="label"></span> ${song.artists}`
        release.innerHTML = `<span class="label">Release:</span> ${song.release}`
        views.innerHTML = `<span class="label"></span> ${song.views} Views`
        img.setAttribute("src",song.imageUrl)
        img.setAttribute("alt",`${song.songName} Song`)
        img.setAttribute("loading","lazy")

        card.appendChild(name)
        card.appendChild(artist)
        card.appendChild(release)
        card.appendChild(views)
        card.appendChild(img)

        document.querySelector(".container").appendChild(card)
    })
}