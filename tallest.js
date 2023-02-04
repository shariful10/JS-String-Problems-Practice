function maxNumberOfArray(numbers){
    let largest = numbers[0];
    for (let index = 0; index < numbers.length; index ++) {
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [167, 190, 120, 165, 137];
const tallest = maxNumberOfArray(heights);
console.log('Tallest Person is:', tallest);