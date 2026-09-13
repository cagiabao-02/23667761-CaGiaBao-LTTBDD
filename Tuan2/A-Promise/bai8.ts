//8. Create a Promise chain: square the number 2, then double it, then add 5.
Promise.resolve(2).then((number) => {
    return number * number;
}).then((number) => {
    return number * 2;
}).then((number) => {
    return number + 5;
}).then((result) => {
    console.log("Câu 8:", result);
});