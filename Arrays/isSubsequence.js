// Write a fn() takes two string and check if the chracters of the fisrt string appears somewhere in the second string in order 
// fn('hello' , 'hello world') => true
// fn('sing','string') => true
// fn('abc','bca') => false

let isSubsequence = (string1, string2, callback) => {

let count = 0 ;

    for(j in string2){
        if(string1[j] == string2[j]) count ++ ;
        console.log(string1[j] , string2[j])
        if(count == string1.length) return callback(true)
    }
    return callback(false) ; 
}

isSubsequence('hello' , 'hello world', (result) => {
    console.log(result)
})


