function power(a,r){
    if(r==1) return a ;
    
    return a*power(a,r-1) ;
}

console.log(power(2,3))

// 2,3 -> 8
// 2*2*2