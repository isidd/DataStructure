
    let piviotFunction = (arr,start=0,end=arr.length+1) =>{
        var piviot = arr[start] ;
        var swapIndex = start ;  
        for(i=start+1;i<arr.length;i++){
            if(piviot > arr[i]){
                swapIndex++ ; 
                [arr[i] , arr[swapIndex]] = [arr[swapIndex], arr[i]]
            }
        }
        [arr[start],arr[swapIndex]] = [arr[swapIndex],piviot] ;
        return swapIndex ; 
    }

let quickSort = (arr,left=0,right=arr.length-1) =>{
    if(left<right){
        let pivotIndex = piviotFunction(arr,left,right) ;
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr ;
}

console.log(quickSort([9,8,2,1,5,7,6,3]))