let findElementForIndex = (arr,element)=>{
    let index = -1
    arr.forEach((val,idx)=>{
        if(val==element) index = idx ;
    })
    return index ; 
}

console.log(findElementForIndex(['sidd','pharasi','a','b','mountains'],'mountains'))