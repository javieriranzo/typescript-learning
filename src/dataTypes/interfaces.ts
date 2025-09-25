interface Customer {
    firstName: string;
    lastName: string;
    age: number;
    isMember: boolean | null;
}

function sendCurriculumVitae(customer: Customer) {
    console.log(`This si the CV of ${customer.firstName} ${customer.lastName}, age ${customer.age}, member: ${customer.isMember}`);
}