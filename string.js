//1281. Subtract Product from Sum
var subtractProductAndSum = function(n) {
    
    let digit = n.toString().split("").map(Number);

    let product = digit.reduce((acc, currNum) => acc * currNum, 1);
    let sum = digit.reduce((acc, currNum) => acc + currNum, 0);
    return product - sum;
};
//eg:
console.log(subtractProductAndSum(345));


//1. Two Sum
let twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        git;
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

//eg:
let num1 = [2, 7, 11, 15];
console.log(twoSum(num1, 9));

let num2 = [3, 2, 4];
console.log(twoSum(num2, 6));

let num3 = [3, 3];
console.log(twoSum(num3, 6));
