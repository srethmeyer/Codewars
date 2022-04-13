
function sameCase(a, b){
    if(alphaValidation(a) == false || alphaValidation(b)== false){
      return -1
    }else if((a === a.toUpperCase() && b === b.toUpperCase())){
      return 1
    }else if(a === a.toLowerCase() && b ===b.toLowerCase()){
      return 1
    }else{
    return 0
  }
  }
  
  function alphaValidation(char) {
    return char.toLowerCase() != char.toUpperCase()
  }