class WorkerCompany {
    firstName: string; 
    lastName: string;
    age: number;
    isMember: boolean;

    constructor(firstName: string, lastName: string, age: number, isMember: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMember = isMember;
    }

    sayHello() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

const workerCompany = new WorkerCompany('John', 'Doe', 30, true);
console.log(workerCompany);
workerCompany.sayHello();    

const workerCompany2 = new WorkerCompany('Jane', 'Smith', 25, false);
console.log(workerCompany2);
workerCompany2.sayHello();  