//14. Write an async function  that takes a number,  waits  1 second, and returns  the number  × 3.

async function multiplyByThree(number: number): Promise<number> {
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
    });

    return number * 3;
}

async function ex14(): Promise<void> {
  
    const result = await multiplyByThree(5);

    console.log("Câu 14:", result);
}


ex14();