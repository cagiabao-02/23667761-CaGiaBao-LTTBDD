export class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }
    //hàm nạp tiền
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Account balance: ${this.balance}`);
        
    }
    //hàm rút tiền
    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;
        console.log(`Account balance: ${this.balance}`);
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);