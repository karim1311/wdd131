// POPULATE SELECT DROPDOWN
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  

const productsSelect = document.getElementById("productName");

products.map((lang,i)=>{
    let opt = document.createElement("option")
    opt.value = i // the index
    opt.innerHTML = lang.name 
    productsSelect.append(opt)
})

// let htmloption = '<option value="0" selected> Select option </option>'
// for (let product in products){
//     htmloption += `<option value="${products[product].id}">${products[product].name}</option>`
// }
// productsSelect.innerHTML = htmloption


// select elements for the footer dates
const year = document.getElementById('currentyear')
const modified = document.querySelector("#lastModified")

// use the date object
const today = new Date()

year.innerHTML = `© ${today.getFullYear()}`

modified.innerHTML = `Last modified: ${document.lastModified}`