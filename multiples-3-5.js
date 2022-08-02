// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.





function solution(number){
    
    const range = (start, end, length = end - start + 1) =>
      Array.from({ length }, (_, i) => start + i)
  
  
    var rangeNum = range(1, (number - 1))
    var result = 0;
    for (var i = 0; i < rangeNum.length; i++){
      if (rangeNum[i] % 3 === 0 || rangeNum[i] % 5 === 0) {
        result += rangeNum[i]
      }
    }
    return result;
  }