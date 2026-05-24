const removeFromArray = function(array, ...args) {
    const removed_array = array.filter((item) =>!args.includes(item))
    console.log(removed_array)
    
    // console.log(removed_array)
    // console.log(newArray)
};
removeFromArray([1, 6, 2, 2, 6, 7, 4, 2, 2, 6, 9], 6)
// // Do not edit below this line
module.exports = removeFromArray;
// let newArray = []
// const removeFromArray = function(array, ...args) {
//     array.forEach((item)=> {
//         // console.log(item)
//         // console.log(args)
//         if(!args.includes(item)) {
//             newArray.push(item)
//         }
//     });
//     console.log(newArray)
// };
// removeFromArray([2, 3, 4, 3, 4, 5, 6, 3, 6], 3)