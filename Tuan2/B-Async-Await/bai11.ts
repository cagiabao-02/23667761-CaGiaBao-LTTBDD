// 11. Convert Exercise 1 into async/await

import { HelloPromise } from "../A-Promise/bai1";


// Dùng async/await để chờ Promise hoàn thành
async function run() {
    const result = await HelloPromise;

    console.log("Kết quả:", result);
}

run();