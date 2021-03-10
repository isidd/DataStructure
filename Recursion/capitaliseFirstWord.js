let capatlizeFirstWord = (arr)=>{
   
    let newArray = []
    let firstLetter = arr[0][0].toUpperCase() ;
    let newCharacter = firstLetter+arr[0].slice(1) ;
    newArray.push(newCharacter)
    if(arr.length == 1) return newArray
    newArray = newArray.concat(capatlizeFirstWord(arr.slice(1)))
    return newArray ; 
}

console.log(capatlizeFirstWord(['sidd','pharasi','large','developer','mobile']))