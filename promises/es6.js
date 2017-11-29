//uz ziadny callback hell, aj ked dnes su uz omnoho popularnejsie rozne obserable rxjs a hen podobne tomu
//uloha prepisme funkciu na arrow

function spravaPoTimeoute (msg, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){ resolve(`Hello ${msg}!`)}, timeout)
    })
}
spravaPoTimeoute("prvá po 1000ms", 1000)
.then(function(msg) {
    return msgAfterTimeout(msg + " druhá po 2000ms", 2000)
})
.then(function(msg) {
    console.log(`done after 3000ms:${msg}`)
});