
-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------


//1614. Maximum nesting depth of paranthesis

var maxDepth = function(s) {
    let currDepth = 0;
    let maxDepth = 0;

    for(char of s){
        switch (char){
            case "(":
            currDepth++;
            if(currDepth>maxDepth){
                maxDepth++;
            }
            break;
            case ")":
            currDepth--;
            break;
            default:
            break;
        }
    }
    return maxDepth;
};

-----------------------------------------------------------------------------

//3028. Ant on the boundary

var returnToBoundaryCount = function(nums) {
    let count = 0;
    let sum = 0;
    for(let num of nums){
        sum += num;
        if(sum === 0){
            count++;
        }
    }
    return count;
};

-----------------------------------------------------------------------------


//3131. Find the integer added to array one

var addedInteger = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let j = nums2[0] - nums1[0];

    for (i = 0; i < nums1.length; i++) {
        if (nums1[i] + j === nums2[i]) {
            return j;
        }
        return j;
    }
};

-----------------------------------------------------------------------------

//1662. Check if two array strings are equalent

var arrayStringsAreEqual = function(word1, word2) {
    word1 = word1.join("");
    word2 = word2.join("");
    return word1 === word2;
};

-----------------------------------------------------------------------------

//744. Find smallest letter greater than target

var nextGreatestLetter = function (letters, target) {
    for (let char of letters) {
        if (char > target) {
            return result = char;
        }
    }
    return letters[0];
};

console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));

-----------------------------------------------------------------------------

//2011. Final value of Variables After Performing Operations

var finalValueAfterOperations = function (operations) {
    count = 0;
    for (let i = 0; i <= operations.length; i++) {
        switch (operations[i]) {
            case "++X":
            case "X++":
                count++;
                break;
            case "--X":
            case "X--":
                count--;
                break;
            default:
                console.log("You have entered wrong operation");

        }
    }
    return count;
};

let operations = ["--X", "X++", "X++"];

console.log(finalValueAfterOperations(operations));

-----------------------------------------------------------------------------

// 2455. Average value of even numbers that are divisible by 3

var averageValue = function(nums) {
    let getEven = nums.filter(num => num%2 ===0);
    let getMult3 = getEven.filter(num => num%3 ===0);
    let sum = getMult3.reduce((acc, curVal) => acc+curVal, 0);
    return getMult3.length>0 ? Math.floor(sum/getMult3.length) :0 ; 
    
};

let num = [1,3,6,10,12,15];
console.log(averageValue(num));