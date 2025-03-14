const timesheetEntries = [
    {
        joiningDate: '2011-01-08',
        project: 'CTRF',
        designation: 'Manager'
    },
    {
        date: '2024-01-09',
        project: 'CTRF',
        designation: 'Developer'
    },
    {
        date: '2024-01-10',
        project: 'CTRF',
        designation: 'Tester'
    },
];

// Grouping by 'project' property using reduce
const groupedByReduce = timesheetEntries.reduce((previousValue, currentValue) => {
    const key = currentValue.project;

    if (!previousValue[key]) {
        previousValue[key] = [];
    }
    previousValue[key].push(currentValue);
    return previousValue;
}, {});

console.log(groupedByReduce);

const groupedByObject = Object.groupBy(timesheetEntries, (entries, index) => {
    return entries.project;
});

console.log(groupedByObject);

const groupedByMap = Map.groupBy(timesheetEntries, (entries, index) => {
    return entries.project;
});

console.log(groupedByMap);


// LeetCode - https://leetcode.com/problems/group-by/
// Array.prototype.groupBy = function (fn) {
//     return this.reduce((acc, curr) => {
//         const key = fn(curr)
//         if (!acc[key]) {
//             acc[key] = [];
//         }
//         acc[key]?.push(curr);
//         return acc;
//     }, {});
// };


