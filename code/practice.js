// Returns the sum of two numbers
function sum(a, b) {
    return a + b;
}

// Capitalizes the first letter of a word
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverses a string 
function reverseString(str) {
    const original = [];
    const reversed = [];

    for (let i = 0; i < str.length; i++) {
        original.push(str.charAt(i));
    }

    for (let i = 0; i < str.length; i++) {
        reversed.push(original.pop());
    }

    return reversed.join("");
}

const calculator = {
    add: (a, b) => {
        return a + b;
    },

    subtract: (a, b) => {
        return a - b;
    },

    multiply: (a, b) => {
        return a * b;
    },

    divide: (a, b) => {
        return a / b;
    }
}

export {
    sum,
    capitalize,
    reverseString,
    calculator
} 
