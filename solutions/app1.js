const removeDuplicatesFromArray = mixedArray =>
  mixedArray.filter((item, index, array) => array.indexOf(item) === index);

export default removeDuplicatesFromArray


// const test = ['bolha', 'kukac', 'muci','fa', 'kukac', 'fa', 'alma','kukac'];

// console.log(removeDuplicatesFromArray(test));