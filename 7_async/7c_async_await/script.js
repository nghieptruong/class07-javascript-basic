const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
setTimeout(() => {
    console.log("2");
}, 1000)
console.log(fetchPromise)

fetchPromise.then(
    (response) => {
        const jsonResponse = response.json();
        console.log(jsonResponse);
        jsonResponse.then((data) => {
            console.log(JSON.stringify(data));
        })
    }
)