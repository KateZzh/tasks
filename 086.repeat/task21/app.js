// Напишите функцию longestCommonSubstring, которая принимает две строки и
// возвращает наибольшую общую подстроку этих строк.

const longestCommonSubstring = (str1, str2) => {
  const arr1 = str1.split(' ');
  const arr2 = str2.split(' ');

  let arr = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      arr.push(arr2[i]);
    }
  }

  const longestStr = arr.sort((a, b) => b.length - a.length)[0];

  return longestStr;
};

console.log(longestCommonSubstring('apple banana orange pineapple', 'banana pineapple'));
