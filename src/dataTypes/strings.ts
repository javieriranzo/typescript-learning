// Strings: Data type for string values

// Strings can be written with single or double quotes in Typescritp 
const singleQuoteString: string = 'Hello, World this is a string with single quotes.';
const doubleQuoteString: string = "Hello, World this is a string with double quotes.";

// Template literals (backticks) allow for multi-line strings and embedding expressions
const programerName: string = 'Alice';
const programerAge: number = 30;
const templateLiteralString: string = `Hello, ${programerName}!
Welcome to the world of TypeScript strings. You are ${programerAge} years old.`;

// Strings can include special characters using escape sequences
const stringWithSpecialChars: string = "This is a string with special characters:\nNew Line,\tTab, and a backslash \\";

console.log("String with single quote: " + singleQuoteString);
console.log("String with double quote: " + doubleQuoteString);
console.log("Template literal string: " + templateLiteralString);
console.log("String with special characters: " + stringWithSpecialChars);