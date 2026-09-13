//13.  Handle  errors using  try/catch with  async/await.
import { simulateTask } from "./bai12";

// Function tạo Promise bị lỗi sau 1 giây
function failedTask(): Promise<never> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject() dùng để báo Promise thất bại
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}

async function ex13(): Promise<void> {

    try {
        await failedTask();
    } catch (error) {
        if (error instanceof Error) {
            console.log("Câu 13:", error.message);
        }
    }
}

ex13();
  