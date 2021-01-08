/**
 * @param {number[][]} accounts
 * @return {number}
 */
module.exports = maximumWealth = accounts => {
 let max = 0;
	let totalBalance = 0;
	for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];

		for (let j = 0; j < account.length; j++) {
   const balance = account[j];
			totalBalance += balance;
		}

		if (totalBalance > max) max = totalBalance;
			totalBalance = 0;
	}
	return max;
};