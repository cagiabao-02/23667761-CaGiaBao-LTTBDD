//7. Use Promise.race() to return whichever Promise resolves first.
import { simulateTask } from "./bai5";

Promise.race([
    simulateTask(3000),
    simulateTask(1000),
    simulateTask(2000)
]).then((result) => {
    console.log("Câu 7:", result);
});