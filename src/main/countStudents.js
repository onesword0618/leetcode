/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
module.exports = countStudents = function(students, sandwiches) {
 for(let i = 0 ; i < sandwiches.length ; i++){
     let r = students.indexOf(sandwiches[i]);
     if(r != -1) {
         delete students[r];
     } else {
         return students.filter(x => x != -1).length;
     }
 }
 return 0;
};