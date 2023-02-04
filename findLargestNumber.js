function findMax(numbers) {
    let max = numbers[0];
    if (numbers[1] > max) {
        max = numbers[1];
    }
    if (numbers[2] > max) {
        max = numbers[2];
    }
    return max;
}
let numbers = [55, 10, 95];
let largest = findMax(numbers);
console.log('The Largest Number is:', largest);
