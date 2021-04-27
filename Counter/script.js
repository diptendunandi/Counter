let counter = document.querySelector(".counter");
let followers = document.querySelector(".followers");
let c = 1;
setInterval(() => {
    if (c < 1000) {
        c++;
        counter.innerText = c;

    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers in Website";
}, 4500);