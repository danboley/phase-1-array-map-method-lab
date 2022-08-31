const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
//  return tutorials
//}


//function capitalizeFirstLetter() {
//  return string.toUpperCase.charAt(0)
//}

//tutorials.forEach(() => {
//  return capitalizeFirstLetter()
//})

//const titleCased = map(tutorials, function()) {
//  return element.toUpperCase();
//}

// Time to Google... charAt() needed?

//const titleCased = () => {
//  return tutorials.map (element => {
//  return element.toUpperCase().charAt(0);
//  })
//}

//const titleCased = () => {
//  return tutorials.map (element => {
//    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//  })
//}

const titleCased = () => {
  const newTutorials = tutorials.map((callback) => {
    const casedTutorials = callback.split(' ').map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    return casedTutorials
  })
return newTutorials
}
