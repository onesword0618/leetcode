/**
 * @param {number} n
 * @return {number}
 */
module.exports = n => {
    const primes = countPrimes(n);
    return (factorial(primes) * factorial(n - primes)) % 1000000007n;
};

const factorial = n =>
    n <= 1 ? 1n : (BigInt(n) * factorial(n - 1)) % 1000000007n;

const countPrimes = function (n) {
    const nums = [...Array(n + 1).keys()].slice(2);

    for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
        if (nums[i]) {
            for (let j = i + nums[i]; j <= n; j += nums[i]) {
                nums[j] = undefined; // Sieve of Eratosthenes
            };
        };
    };
    return nums.filter(n => n).length;
};