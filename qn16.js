const movie={
    title:"Puff The Magic Dragon", duration: 30, star:{name:"Rashid Muhwezi", country:"Uganda", age:40}
}
const myText = movie.title + `lasts for` + movie.duration + `minutes .`;
const secondText = `He is ${movie.star.age} years old and he lives in ${movie.star.country}.` 
const thirdText = `${movie.title} lasts for ${movie.duration} minutes . ${movie.star.name} is ${movie.star.age}
                   years old and he lives in ${movie.star.country}`
function logInfo(){
    console.log(myText)
    console.log(secondText)
    console.log(thirdText)
}
logInfo()