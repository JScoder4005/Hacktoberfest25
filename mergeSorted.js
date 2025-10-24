function mergeSortedArrays(arr1, arr2) {
  let i = 0, j = 0;
  const merged = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
    else merged.push(arr2[j++]);
  }
  return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}

console.log(mergeSortedArrays([1,3,5], [2,4,6])); // [1,2,3,4,5,6]
