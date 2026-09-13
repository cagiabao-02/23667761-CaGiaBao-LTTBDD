//15.  Call  multiple  async functions  sequentially  using  await.

import { simulateTask } from "./bai12";

async function ex15(): Promise<void> {
  
    // Task 1 chạy trước
    const result1 = await simulateTask(1000);
    console.log("Task 1:", result1);


    // Task 2 chỉ chạy sau khi Task 1 hoàn thành
    const result2 = await simulateTask(1000);
    console.log("Task 2:", result2);


    // Task 3 chỉ chạy sau khi Task 2 hoàn thành
    const result3 = await simulateTask(1000);
    console.log("Task 3:", result3);
}

ex15();