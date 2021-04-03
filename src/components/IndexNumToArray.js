const indexNumToArray = (arrayToBeOrdNum) => arrayToBeOrdNum.map((x)=>arrayToBeOrdNum.indexOf(x));

export default indexNumToArray






// function equivalentExchangeRandomize(array){
//     let newArray = []
//     // let copy = array.slice()
//     let copy = [...array]
//     for (let i = copy.length; 0 < copy.length; i--)
//       newArray.push(copy.splice(Math.floor(Math.random()*copy.length),1))
//     return newArray
//   }
  // takes the index of any inputed array and turns the indexes into array elements
//   const indexNumToArray = (arrayToBeOrdNum) => arrayToBeOrdNum.map((x)=>arrayToBeOrdNum.indexOf(x));
  //similar to indexNumToArray, but starts from 1, more useful for iteration
//   const arrayElementCounter = (arrayToCount) => arrayToCount.map((x)=> arrayToCount.indexOf(x)+1);
  
//   //takes any array of numbers and uses the numbers as the indexes for the target array's elements of the same index
// //   const useAlteredIndexForTargetArray = (targetArray, indexes) => indexes.map(indexes => targetArray[indexes]);
//   //makes it possible to only use first X elements from an array... if the first arg is undefined it slices all
//   const firstFewFromAnArray = (yourAmount, yourArray) => yourArray.slice(0,yourAmount);
  
//   //general function for interating through an array by event with a final value of an empty string
//   function iterateByEvent(array){
//     let x = -1
//     return function(){
//       x+=1
//       return x<array.length? array[x]: ''
//     }
//   }