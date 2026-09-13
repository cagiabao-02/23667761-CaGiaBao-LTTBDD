//12. Write an async function that calls simulateTask(2000) and logs the result.
export function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
}


async function callSimulate(): Promise<void> {
    const result = await simulateTask(2000);
  
    console.log("Câu 12:", result);
}
  
callSimulate();