/* // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144. fibo[3] = fibo[2] + fibo[1]
 * * fibo[4] = fibo[3] + fibo[1]
* fibo[5] = fibo[4] + fibo[1]
* fibo[50] =
 * fibo[49] + fibo[1]
* fibo[487] = fibo[486] + fibo[1]
* fibo[n] = fibo[n-1] +
 * fibo[n-1]
* fibo[i] = fibo[i-1] + fibo[i-1]
 */

const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo);
