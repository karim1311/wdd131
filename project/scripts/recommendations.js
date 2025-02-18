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
      songName: "Sheperd of Fire", // song
      artists: "Avenged Sevenfold", // artist(s)
      release: "2013, November, 7", // release
      imageUrl:
      "./img/hq720.webp",
      description: "I got to know this Rock / Metal song when I played videogames, it's such a cool song."
    },
    {
      songName: "Red Wine Supernova",
      artists: "Chappell Roan",
      release: "2023, September, 21",
      imageUrl:
      "./img/redwinesupernova.webp",
      description: "This song is catchy and fun, I know it because of my girlfriend."
    },
    {
      songName: "Navigating",
      artists: "twenty one pilots",
      release: "2024, May, 23",
      imageUrl:
      "./img/navigating.webp",
      description: "I've been a fan of this band for a long time, this is my favorite song from this album."
    },
    {
      songName: "Unknown from M.E ver.1",
      artists: "SEGA SOUND TEAM",
      release: "2014, September, 10",
      imageUrl:
      "./img/unknownfromme.webp",
      description: "Lately I've been exploring the Sonic world, and this song has been stuck on my head."
    },
    {
      songName: "Snakeskin Boots",
      artists: "Jack Wall",
      release: "2015, November, 06",
      imageUrl:
      "./img/snakeskinboots.webp",
      description: "This jazz song I listened from one videogame, its really cool."
    },
    {
      songName: "Infinity Repeating (2013 Demo)",
      artists: "Daft Punk, Julian Casablancas, The Voidz",
      release: "2023, May, 11",
      imageUrl:
      "./img/infinityrepeating.webp",
      description: "I am a fan of Daft Punk, not so long ago they released this song."
    },
    {
      songName: "I Follow Rivers",
      artists: "Lykke Li",
      release: "2014, March, 9",
      imageUrl:
      "./img/ifollowrivers.webp",
      description: "This song can be enjoyed by everyone."
    },
    {
      songName: "Titanium",
      artists: "David Guetta, Sia",
      release: "2024, November, 22",
      imageUrl:
      "./img/titanium.webp",
      description: "If you like listening to electronic music, you have to listen to this song."
    },
    {
      songName: "Uncle Albert / Admiral Halsey (Medley)",
      artists: "Paul McCartney",
      release: "1971, May, 17",
      imageUrl:
      "./img/unclealbert.webp",
      description: "I found myself listening to this song over and over again for some months."
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

function createSongCard(filteredSongs){
    document.querySelector(".container").innerHTML = ""
    filteredSongs.forEach(song=>{
        let card = document.createElement("section")
        let name = document.createElement("h3")
        let artist = document.createElement("p")
        let release = document.createElement("p")
        let description = document.createElement("p")
        let img = document.createElement("img")

        name.textContent = song.songName
        artist.innerHTML = `<span class="label"></span> ${song.artists}`
        release.innerHTML = `<span class="label">Release:</span> ${song.release}`
        description.innerHTML = `<span class="label"></span> ${song.description}`
        img.setAttribute("src",song.imageUrl)
        img.setAttribute("alt",`${song.songName} Song`)
        img.setAttribute("loading","lazy")

        card.appendChild(name)
        card.appendChild(artist)
        card.appendChild(release)
        card.appendChild(img)
        card.appendChild(description)

        document.querySelector(".container").appendChild(card)
    })
}