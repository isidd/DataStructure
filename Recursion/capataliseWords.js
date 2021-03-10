let capatalizeWholeWord = (arr) =>{
    let newArray = [] ; 
    let capWord = arr[0].toUpperCase() ;
    newArray.push(capWord)
    if(arr.length == 1) return newArray ;
    newArray = newArray.concat(capatalizeWholeWord(arr.slice(1))) ;
    return newArray ; 
}


console.log(capatalizeWholeWord(['Sidd','pharsi','abc']))