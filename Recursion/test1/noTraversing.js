// let noTraversing = (num) =>{
//     if(num == 0) return ;
//     console.log(num) ; 
//     noTraversing(num-1)
//     return 'this is the end of the number'
// }


// let Notraversing = (num) => {

//     if (typeof num == 'undefined') return ' No a number'
//     if (num == 0) {
//         console.log("End of the number..!")
//         return;
//     }
//     console.log(num)
//     Notraversing(num - 1)
// }

// Notraversing(10)

// console.log(noTraversing(10))

// let sumRange =(num) => {
//     if(num == 0) return num ; 
//      return num + sumRange(num-1)

// }
// console.log(sumRange(1))


// let sumRange = (num) =>{
//     if(num==0) return num ; 
//         return num + sumRange(num-1) ; 
     
// }

// console.log(sumRange(3))

// let factorial = (num) =>{
//     if(num == 1) return 1 ;
//     return num * factorial(num-1)
// }


// let factorial = (num) =>{
//     if(num == 0) return 1 ; 
//     return num*factorial(num-1) 
// }

// console.log(factorial(4))


// console.log(factorial(5))



// let collectOdd = (arr) =>{

//     if(arr.length == 0) return[]
//     let newArr = [] ; 
//     if(arr[0] % 2 != 0){
//         newArr.push(arr[0])
//     }

//     newArr = newArr.concat(collectOdd(arr.slice(1))) ;
//     return newArr

// }

// console.log(collectOdd([1,2,3,4,5,6,7,8,9]))

// let collectOdd = (arr)=>{
//     let newArray = [] ;
//     if(arr.length == 0 ) return [];  
//     if(arr[0] % 2 == 1){
//         newArray.push(arr[0])
//     }
//     return newArray.concat(collectOdd(arr.slice(1))) ; 
    
// }

// console.log(collectOdd([1,2,3,4,5,6,7,8,9]))




// let power = (base,expo) =>{
//     if(expo == 1 ) return base ; 
//     return base * power(base,expo-1)
// }

// console.log(power(2,10))


// let power = (num,expo) =>{
//     if(expo == 0) return 1 ; 
//     return num * power(num,expo-1) ;
// }

// console.log(power(2,10))


// let factoirial = (num) =>{
//     if(num == 0) return 1 ;
//     return num* factoirial(num-1) ; 
// }

// console.log(factoirial(5))


//  nth no of fabonici series
// let faboniciSeries = (num)=>{
//     if(num<=2) return 1 ; 
//     return faboniciSeries(num-1) + faboniciSeries(num-2)
// }

// console.log(faboniciSeries(50))

// let fabonaciSeries = (num) =>{
//     if(num <=2) return 1; 
//     return  fabonaciSeries(num-1) + fabonaciSeries(num-2) ;
     
// }

// console.log(fabonaciSeries(10))

// let stringReverse = (str)=>{
//     if(str.length == 1) return str.slice(-1) ;

//      return str.slice(-1) + stringReverse(str.slice(0,-1)) 
// }

// console.log(stringReverse('mobile'))

// let stringReverse = (str) =>{
//     if(str.length == 0) return ''
//     return  stringReverse(str.slice(1)) + str[0] ;
// }

// console.log(stringReverse('abcdef'))


// let isPlaindrome = (str)=>{
//     if(str.length == 1) return true ; 
//     if(str.length == 2) return str[0] == str[1] ; 
//     if(str[0]== str.slice(-1)) return isPlaindrome(str.slice(1,-1))
// }


// console.log(isPlaindrome('siss'))



// let isPlaindrome = (str)=>{
//     if(str.length == 1) return true ; 
//     if(str.length == 2) return str[0] == str[1]
//     if(str[0] == str.slice(-1)) {
//         return isPlaindrome(str.slice(1,-1))
//     }
// }

// console.log(isPlaindrome('sfs'))




// let arrayFlatten = (arr) =>{
//     let newArray = []
//     for(i of arr){
//         if(Array.isArray(i)){
//             newArray = newArray.concat(arrayFlatten(i))
//         }

//         newArray.push(i)
//     }
//     return newArray
// }

// console.log(arrayFlatten([1,2,3,[1,2,3,[1,2,3]]]))


// let arrayFlatten = (arr) =>{

//     let newArray = [] ; 
//     for(i of arr){
//         if(Array.isArray(i)){
//             newArray = newArray.concat(arrayFlatten(i)) ;
//         }  
//         else{
//             newArray.push(i)
//         }  
//     }
//     return newArray ; 
     
    
// }


// console.log(arrayFlatten([1,2,3,[4,5,6,[7,8,9]]]))




// arrFlat = (arr) =>{
//     let newArray = []
//     for(i of arr) {
//         if(Array.isArray(i)){
//             newArray = newArray.concat(arrFlat(i)) ; 
//         }else{
//             newArray.push(i) ;
//         }
//     }
//     return newArray ; 
// }

// console.log(arrFlat([1,2,3,[4,5,6,[7,8,9]]]))


// let capatalize = (str)=>{

//     if(str.length == 0) return '';

//     let string  = str.split(" ")
//     let Char = string[0][0].toUpperCase() + string[0].slice(1)
//     Char = Char + " " + capatalize(string.slice(1).join(" "))
//     return Char ; 

// }

// console.log(capatalize("this is siddhrtha"))


// let  strignCapitalise = (str) =>{
//     if(str.length == 0) return ''
//         let string = str.split(" ") ;
//         return string[0][0].toUpperCase() + string[0].slice(1) +" " + strignCapitalise(string.slice(1).join(" ")) ;
// }


// console.log(strignCapitalise('my name is siddhartha pharasi'))
