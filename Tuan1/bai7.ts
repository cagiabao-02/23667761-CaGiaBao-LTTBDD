export class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

}
const user = new User("Bảo");
console.log(user.getName());
user.setName("Gia Bảo");
console.log(user.getName());
