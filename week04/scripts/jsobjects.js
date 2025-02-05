// courses.js
// const aCourse = {
//     code: "CSE121b",
//     name:"Javascript Language",
//     sections:[
//     {sectionNum:1, roomNum:'STC 353', enrolled:26 , days:'TTh',instructor:'Bro T'},
//     {sectionNum:2, roomNum:'STC 347', enrolled:28 , days:'TTh',instructor:'Sis A'}
//     ],
//     changeEnrollment: function (sectionNum, add = true){
//         // find the right section...Array.findIndex will work here
//         const sectionIndex = this.sections.findIndex(
//             (section) => section.sectionNum == sectionNum
//         )
//         if (sectionIndex >= 0){
//             if (add){
//                 this.sections[sectionIndex].enrolled++
//             } else {
//                 this.sections[sectionIndex].enrolled--
//             }
//             renderSections(this.sections)
//         }
//     }
// }

// arrays.js
const steps = ["one","two","three"]
const listTemplate(step){
    return `<li>${step}</li>` // the html string made from step
}

const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join() // set the innerHTML

// ACTIVITY 2 - Map
// Declare an array with letter grades in it: ['A', 'B', 'A']
// Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in 'A' it should return 4.
// Use map and our conversion function to convert the array in step 1 to gpa points.
const grades = ["A","B","C"]
function convertGradeToPoints(grade){
    let points = 0
    if (grade === "A"){
        points = 4
    } else if (grade === "B"){
        points = 3
    }
    return points
}

// const gpaPoints = grades.map(convertGradeToPoints)


// Activity 3 - Reduce
// const gpaPoints = grades.map(convertGradeToPoints)
// const pointsTotal = gpaPoints.reduce(function(total,item){
//     return total + item
// })

// const gpa = pointsTotal / gpaPoints.length


// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total,item)=>total+item)
const gpa = pointsTotal / gpaPoints.length

// this could be further simplified as
// const gpa = gpaPoints.reduce((total,item)=>total+item) / gpaPoints.length



function setCourseInfo(course){
    const courseName = document.querySelector("#courseName")
    const courseCode = document.querySelector("#courseCode")
    courseName.textContent = course.name
    course.textContent  = course.code
}

function sectionTemplate(section){
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSections(sections){
    const html = sections.map(sectionTemplate)
    document.querySelector("#sections").innerHTML = html.join("")
}

setCourseInfo(aCourse)
renderSections(aCourse.sections)