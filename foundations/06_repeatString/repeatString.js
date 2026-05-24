
const repeatString = function(str, val) {
    num = 0
    let repeat_str = " "
    if (val < 0){
        console.log("ERRor")
    }else{
        while (num < val) {
            repeat_str += str
            console.log("vxdfhsss")

            num++;
        }
    };
    console.log(repeat_str)
};

repeatString("hey", 4)
// Do not edit below this line
module.exports = repeatString;
