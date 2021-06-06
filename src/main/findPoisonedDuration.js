/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 module.exports = findPoisonedDuration = function(timeSeries, duration) {
  let timeUnderAttack = 0;
  timeSeries.forEach((time, index) => {
      const nextTime = timeSeries[index + 1];
      const attackEndTime = time + duration;

      if(nextTime && nextTime < attackEndTime) {
          timeUnderAttack = timeUnderAttack + (nextTime - time);
      } else {
          timeUnderAttack = timeUnderAttack + duration;
      }
  })
  return timeUnderAttack;
};