// Write a fn() for Formin sub array length for the target value
// ([2,3,1,2,4,3],7) => 2 -> [4,3]
// ([4,2,1,6,2],4) => 13

let maxLength = (string) =>{
    let start = 0 ; 
    let longest = 0 ; 
    let seen = {}
    for(i in string){
        let character = string[i] ; 
        if(seen[character]){
            start = Math.max(start,i)
            seen = {}
        }

            longest = Math.max(longest,i-start+1) ; 

            seen[character] = i+1 ;
    }
    return longest ;
}

console.log(maxLength('abcabcdabcdabcdef'))