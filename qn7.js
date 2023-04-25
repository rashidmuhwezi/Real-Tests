function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }
console.log(titleCase("rashid always knew that if he trusts in allah , everything would be possible."))  
console.info(titleCase("thanks hajjat hadijah, you rock."))
