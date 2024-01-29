var missingNumber = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < nums.length + 1; i++) {
        if (i !== nums[i])
            return i;
    }
};
