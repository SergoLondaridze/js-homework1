//1
const foo1 = (a, b) => {
    if (a == b) {
        return 'ტოლია'
    }
    return 'არ არის ტოლი'
}
let result = foo1('6', 6)
console.log(result);
//2
function toCelsius(a) {
    if (typeof a == 'number') {
        return (a - 32) * (5 / 9)
    } else {
        return false;
    }
}
console.log(toCelsius());
//3
function calculator(a, b, operation) {
    if (typeof a == 'number' && typeof b == 'number') {
        switch (operation) {
            case '+':
                return a + b;
                break;
            case '-':
                return a - b;
                break;
            case '*':
                return a * b;
                break;
            case '/':
                return a / b;
                break;
            default:
                return false
                break;
        }
    } else {
        return false
    }
}
console.log(calculator(2, 8, '/'));