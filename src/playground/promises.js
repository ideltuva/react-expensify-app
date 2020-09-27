const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            message: 'This is my resolved data',
            description: 'Another message'
        });
        // reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my promise');
        }, 5000);
    });
}).then((str) => {
    console.log('Does this run?', str);
}).catch((error) => {
    console.log('error:', error);
});

console.log('after');