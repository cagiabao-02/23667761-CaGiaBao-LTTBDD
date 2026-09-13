//9. Write a Promise that reads an array after 1 second and filters even numbers.
function getEvenNumbers(): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
  
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
        // number % 2 === 0
        const evenNumbers = numbers.filter((number) => {
            return number % 2 === 0;
        });
        resolve(evenNumbers);
  
        }, 1000);
    });
  }
  
getEvenNumbers().then((result) => {
    console.log("Câu 9:", result);
});