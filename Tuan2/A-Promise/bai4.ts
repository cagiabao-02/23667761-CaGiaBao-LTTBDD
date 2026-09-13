//4. Use .then() and .catch() to handle a Promise that returns a random number.
// Promise<number> : hàm này trả về một Promise và kết quả cuối cùng của Promise là một number.
function randomNumber(): Promise<number> {

    return new Promise((resolve, reject) => {
  
      // Math.random() sẽ tạo một số ngẫu nhiên từ 0 đến nhỏ hơn 1
      const number = Math.random();
      if (number >= 0.5) {
        resolve(number);
  
      } else {
        reject(new Error("Random number is less than 0.5"));
      }
    });
}

randomNumber().then((result) => {
    console.log("Câu 4 - Thành công:", result); 
}).catch((error: Error) => {
      console.log("Câu 4 - Lỗi:", error.message);
});