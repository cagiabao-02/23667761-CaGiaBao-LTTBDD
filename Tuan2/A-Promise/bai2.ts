//2. Write a function that returns a Promise resolving with the number 10 after 1 second.
// Promise<number> : hàm này trả về một Promise và kết quả cuối cùng của Promise là một number.
function GetNumber(): Promise<number> {
    // Promise ban đầu có trạng thái pending - đang chờ.
    return new Promise((resolve) => {
    // dùng setTimeout() để thực hiện đoạn code sau một khoảng thời gian nhất định
    // 1000 = 1000 milliseconds = 1 seconds
    setTimeout(() => {
        resolve(10);
  
      }, 1000);
    });
  }
  GetNumber()
  // .then() nhận kết quả khi Promise hoàn thành thành công, result sẽ là 10.
    .then((result) => {
  
      console.log("Câu 2:", result);
    });