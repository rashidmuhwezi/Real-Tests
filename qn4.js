function toCelsius(fahrenheit) {
    const conversion = (5/9) * (fahrenheit-32);
    return fahrenheit + " degrees fahrenheit is equal to " + conversion + " degrees celsius."
}
console.log(toCelsius(200));

console.log(toCelsius(67))