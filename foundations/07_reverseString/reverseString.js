const reverseString = function(word) {
    word_reverse = " "
    for (num = 1; num <= word.length; num++) {
        neg_index = -num;
        word_index = word.at(neg_index)
        word_reverse += word_index

    }
    console.log(word_reverse)
};
reverseString("malik")
// Do not edit below this line
module.exports = reverseString;
