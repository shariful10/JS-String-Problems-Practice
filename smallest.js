function lowestNumberOfArray(numbers) {
    let smallest = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (smallest > element) {
            smallest = element;
        }
    }
    return smallest;
}
const smNum = [167, 190, 120, 165, 137];
const small = lowestNumberOfArray(smNum);
console.log("The Smallest number is:", small);
