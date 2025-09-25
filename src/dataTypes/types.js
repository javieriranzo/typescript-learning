"use strict";
// All fields must be completed.
let customerWithAllFields = {
    firstName: "Javier",
    lastName: "Iranzo",
    age: 33,
    isMember: true
};
console.log(customerWithAllFields);
console.log("Change frist name to Juan");
customerWithAllFields.firstName = "Juan";
console.log(customerWithAllFields);
let customerWithOptionalFields = {
    firstName: "Javier",
    lastName: "Iranzo",
    age: 33
};
console.log(customerWithOptionalFields);
console.log("Change isMember to true");
customerWithOptionalFields.isMember = true;
console.log(customerWithOptionalFields);
let customerWithNullableFields = {
    firstName: "Javier",
    lastName: "Iranzo",
    age: 33,
    isMember: null
};
console.log(customerWithNullableFields);
console.log("Change isMember to true");
customerWithNullableFields.isMember = true;
console.log(customerWithNullableFields);
let customerWithFieldsReadonly = {
    firstName: "Javier",
    lastName: "Iranzo",
    age: 33,
    isMember: true
};
console.log(customerWithFieldsReadonly);
console.log("Change age to 34");
customerWithFieldsReadonly.age = 34;
console.log(customerWithFieldsReadonly);
// The following lines would cause errors because firstName and lastName are readonly.
// console.log("Change frist name to Juan")
// customerWithFieldsReadonly.firstName = "Juan";
