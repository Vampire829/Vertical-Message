
 function showVerticalMessage(str){
    if(str[0] ==="s"){
      let strUp = str[0].toUpperCase() + str.slice(1, 7)
      for( let key of strUp){
        console.log(key)
      }
    }
 }
showVerticalMessage("Sossss")




