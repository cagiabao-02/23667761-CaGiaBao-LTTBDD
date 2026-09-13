//10. Use .finally() to log "Done" when a Promise finishes (success or failure).

import { simulateTask } from "./bai5";

simulateTask(1000).then((result) => {
    console.log("Câu 10:", result);
}).catch((error) => {
    console.log("Câu 10 - Lỗi:", error);
}).finally(() => {
    console.log("Done");
    
})