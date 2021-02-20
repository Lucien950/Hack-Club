console.timer()

const getRide = (arg)=>{
    return new Promise((resolve, reject) => {
        if (arg){
            setTimeout(()=>{
                resolve("✅ Ride Gotten")
            }, 1000)
        }else{
            setTimeout(()=>{
                resolve("✅ Ride Denied")
            }, 1000)
        }
    })
}


const getRides = async () =>{
    const ride1 = getRide(true)
    const ride2 = getRide(true)
    const ride3 = getRide(true)
    return Promise.all([ride1, ride2, ride3])
}

getRides.then(result=>{
    console.log("🚗 Rides Gotten")
    console.timeLog()
    console.log(result)
})

console.log("🛑 End of Program")
console.timeLog()