function doubleTheNumber(n)
{
    return new Promise(function(resolve,reject)
    {
        resolve(n*2);
    })
}
doubleTheNumber(4).then(function(result){
    doubleTheNumber(5).then(function(result1){
        doubleTheNumber(6).then(function(result2){
            console.log(result+result1+result2)
        })
    })
})