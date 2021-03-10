let arrayFlatten = (arr) =>{
let newArray = []
    for(i in arr){
        if(Array.isArray(arr[i])){
            newArray = newArray.concat(arrayFlatten(arr[i]))
        }else{
            newArray.push(arr[i])
        }
    }
    return newArray ; 
}


console.log(arrayFlatten([1,2,[3,4,[8,5,[7,0]]],5]))