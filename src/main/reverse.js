const reverse = arg => {
    const limit = 2147483648; // -2,147,483,648 ～ 2,147,483,647
    const k = arg < 0 ? -1 : 1;
    const n = Number(String(Math.abs(arg)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};
module.exports = reverse;