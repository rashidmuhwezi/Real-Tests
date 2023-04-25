 function is_string(input) {
    if (typeof input === 'string') {
        console.log(`it is,${input} a string`)
        return true
    } else {
        console.log(`it is not,${input} a string`)
        return false
    }
  };
  console.log(is_string(`Rashid`));
  console.log(is_string([1, 2, 4, 0]));