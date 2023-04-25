 function isArray(input) {
     if (Array.isArray(input)) {
        console.log(`Rashid ${input} is an array`)
     }
     else {
        console.log(`Rashid ${input} is not an array`)
     }
 };
 isArray(`muhwezi`);
 isArray([1, 2, 3, 4]);