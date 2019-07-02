const RetryPromise = require('./retry-promise');

let number = 8;

const executor = function(resolve, reject) {
    number--;
    if (number > 5) {
        reject(number);
        return;
    }
    resolve(number);
};

new RetryPromise(executor).retry(9)
    .then((result) => {
        console.log(`resolve(${result})`)
    })
    .catch((result) => {
        console.log(`reject(${result})`)
    });
