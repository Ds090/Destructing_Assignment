// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.



function removeDuplicatesFromArray(...arr) {

    const uniqueSet = new Set(arr);
  
    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }
  

  console.log(removeDuplicatesFromArray(1,2,2,3,4,4,5));
  