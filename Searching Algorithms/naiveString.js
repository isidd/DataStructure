let naiveString = (string1 , string2) =>{
    let pointer = 0 ; 
    let checker = 0 ; 

    while(checker < string2.length){
        let Str1CharCheck = string1[pointer] ;
        let Str2CharCheck = string2[checker] ; 
        if(Str1CharCheck == Str2CharCheck){
            pointer++
            if(pointer == string1.length) return true ; 
        }else{
            pointer = 0 ; 
        }
        checker++
    }
    return false

}

console.log(naiveString('thaa','siddhartha'))