let countDown = (value,callback)=>{

        console.log(value)
        if(value<1){
            console.log('We are finised here..!')
            return ;
        }
        value--
        countDown(value) 

}

countDown(10,(result)=>{
    console.log(result)
})