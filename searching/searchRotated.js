function findMinIdx(rotatedSortedArr) {
  let left = 0;
  let right = rotatedSortedArr.length - 1;

  if (rotatedSortedArr.length === 1) {
    return 0;
  }

  if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
    return 0;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) {
      return mid;
    }

    if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) {
      return mid + 1;
    }

    if (rotatedSortedArr[mid] < rotatedSortedArr[left]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

function binarySearch(nums, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function search(nums, target) {
  const minIdx = findMinIdx(nums);

  const left = binarySearch(nums, target, 0, minIdx - 1);
  const right = binarySearch(nums, target, minIdx, nums.length - 1);

  return Math.max(left, right);
}

// tests

console.log("search([1], 1) returns 0", search([1], 1) === 0);

console.log("search([1, 3], 3) returns 1", search([1, 3], 3) === 1);

console.log("search([3, 1], 3) returns 0", search([3, 1], 3) === 0);

console.log(
  "search([4,5,1,2,3], 1) returns 2",
  search([4, 5, 1, 2, 3], 1) === 2
);

console.log(
  "search([7,8,1,2,3,4,5,6], 2) returns 3",
  search([7, 8, 1, 2, 3, 4, 5, 6], 2) === 3
);

console.log(
  "search([4,5,6,7,0,1,2], 0) returns 4",
  search([4, 5, 6, 7, 0, 1, 2], 0) === 4
);
