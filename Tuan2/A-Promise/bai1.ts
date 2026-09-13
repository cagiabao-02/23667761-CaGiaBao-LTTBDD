//1. Create a Promise that returns the string "Hello Async" after 2 seconds.
// new Promise() để tạo một Promise mới.
// Promise có 3 trạng thái chính là: Pending - đang chờ, Fulfilled - thành công, Rejected - thất bại.
// Ở hàm này Promise sẽ bắt đầu ở trạng thái Pending.
export const HelloPromise = new Promise<string>((resolve) => {

    // dùng setTimeout() để thực hiện đoạn code sau một khoảng thời gian nhất định
    // 2000 = 2000 milliseconds = 2 seconds
    setTimeout(() => {
  
      // resolve() để thông báo công việc đã hoàn thành thành công.
      resolve("Hello Async");
  
    }, 2000);
  });
  
  
  // .then() để nhận kết quả khi Promise hoàn thành thành công.

  HelloPromise.then((result) => {
    console.log("Kết quả:", result);
  });