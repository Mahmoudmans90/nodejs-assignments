var majorityElement = function (nums) {
  let obj = {};
  for (let index = 0; index < nums.length; index++) {
    if (obj[nums[index]]) {
      obj[nums[index]]++;
    } else {
      obj[nums[index]] = 1;
    }
    if (obj[nums[index]] > nums.length / 2) {
      return nums[index];
    }
  }
};
