const promise = new Promise((resolve, reject) => {
    //script xử lý chỗ này....
    //sau khi xử lý --> trả về kết quả
    const isSuccess = false;
    if(isSuccess) {
        resolve("Successful !")
    } else {
        reject("Failed !")
    }
});

console.log(promise)
promise.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log("Finish!")
})