let firstName = 'Antonia'
let lastName = 'Francesca'

function fullName(first,last){
  return `${first} ${last}`;
}

fullName(firstName,lastName);

const fullNameAnonymous = function(first,last){
  return `${first} ${last}`;
}

console.log(firstName,lastName);

const fullNameArrowFn = (first,last)=>`${first} ${last}`;

console.log(fullNameArrowFn(firstName,lastName));

document.querySelector('#fullName').innerHTML = fullName(firstName,lastName)