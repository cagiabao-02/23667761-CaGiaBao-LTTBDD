//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
// Promise<never> : Promise này không trả về một kết quá thành công mà là rejected.
function failedTask(): Promise<never> {

    return new Promise((resolve, reject) => {
        // dùng setTimeout() để thực hiện đoạn code sau một khoảng thời gian nhất định
        // 1000 = 1000 milliseconds = 1 seconds
        setTimeout(() => {
        reject(new Error("Something went wrong"));
        }, 1000);
    });
  }

  failedTask().catch((error: Error) => {
    console.log("Câu 3:", error.message);
});