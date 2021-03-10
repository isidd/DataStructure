let reverse = (str)=>{
    if(str.length == 1) return str[0] ;
    let ele = str[0] ; 
    return reverse(str.slice(1)) + ele ;
}

console.log(reverse("tacocat"))