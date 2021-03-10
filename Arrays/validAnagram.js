// Write a fn() for checking anagram
// "" , "" => true
// 'aza , 'aaz => false
// 'anagram' , 'nanagram => true

let validAnagram = (string1,string2,callback) =>{

    if(string1.length != string2.length) return callback(false) ;
    
    let object1 = new Array()
    let object2 = new Array()

    for(let i of string1) object1[i] = object1[i] + 1 || 1 ; 
    for(let i of string2) object2[i] = object2[i] + 1 || 1 ; 
0
    for(let i in object1) {
        if(!(i in object2)) return callback(false) ;
        if(!(object1[i] == object2[i])) return callback(false) ;
    }

    callback(true) ;
}

validAnagram('anagram','nagaram',(result)=>{
    console.log(result)
})
