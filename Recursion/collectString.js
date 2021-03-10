let collectStrings = (obj) =>{
    let newArray = [] ; 
    for(key in obj){
        if(typeof obj[key] == 'object') {
            return newArray.concat(collectStrings(obj[key]))
        }
        newArray.push(obj[key]) ;
    }
    return newArray ; 
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(obj))