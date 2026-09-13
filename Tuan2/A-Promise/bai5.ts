//5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.

export function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
        // Promise trả về kết quả thành công sau khi hết thời gian
        resolve("Task done");
  
        }, time);
    });
}

simulateTask(2000).then((result) => {
    console.log("Câu 5:", result);
});
