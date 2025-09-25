// All fields must be completed.

type CustomerWithAllFields = {
    firstName: string;
    lastName: string;
    age: number;
    isMember: boolean;
}

let customerWithAllFields: CustomerWithAllFields = {
    firstName: "Javier",
    lastName: "Iranzo",
    age: 33,
    isMember: true
}

console.log(customerWithAllFields);

console.log("Change frist name to Juan")
customerWithAllFields.firstName = "Juan";

console.log(customerWithAllFields);

// Fields with ":?" are optional.

type CustomerWithOptionalFields = {
    firstName: string;
    lastName: string;
    age: number;
    isMember?: boolean;
}

let customerWithOptionalFields: CustomerWithOptionalFields = {
    firstName: "Javier",
    lastName: "Iranzo",
    age: 33
}

console.log(customerWithOptionalFields);

console.log("Change isMember to true")
customerWithOptionalFields.isMember = true;

console.log(customerWithOptionalFields);

// Fields with "| null" can be null.

type CustomerWithNullableFields = {
    firstName: string;
    lastName: string;
    age: number;
    isMember: boolean | null;
}

let customerWithNullableFields: CustomerWithNullableFields = {
    firstName: "Javier",
    lastName: "Iranzo",
    age: 33,
    isMember: null
}

console.log(customerWithNullableFields);

console.log("Change isMember to true")
customerWithNullableFields.isMember = true;

console.log(customerWithNullableFields);

// Readonly fields cannot be changed after initialization.  

type customerWithFieldsReadonly = {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    isMember: boolean;
}

let customerWithFieldsReadonly: customerWithFieldsReadonly = {
    firstName: "Javier",
    lastName: "Iranzo",
    age: 33,
    isMember: true
}

console.log(customerWithFieldsReadonly);

console.log("Change age to 34")
customerWithFieldsReadonly.age = 34;

console.log(customerWithFieldsReadonly);

// The following lines would cause errors because firstName and lastName are readonly.

// console.log("Change frist name to Juan")
// customerWithFieldsReadonly.firstName = "Juan";


