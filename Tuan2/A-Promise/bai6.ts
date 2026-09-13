//6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
// Promise.all() sẽ chạy nhiều Promise cùng lúc
// Có 3 task:
// Task 1 -> 1 giây
// Task 2 -> 2 giây
// Task 3 -> 1.5 giây
// Các task bắt đầu gần như cùng lúc

import { simulateTask } from "./bai5";

Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500)
]).then((results) => {
    console.log("Câu 6:", results);
}).catch((error) => {
    console.log("Câu 6 - Lỗi:", error);
});