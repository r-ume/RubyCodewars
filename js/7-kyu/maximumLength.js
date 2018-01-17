// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//
// #Example:
//
//   s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(s1, s2) --> 13

var pry = require('pryjs');

function mxdiflg(array1, array2){
  const length_array1 = array1.map(element => element.length);
  const length_array2 = array2.map(element => element.length);

  return Math.abs(Math.max.apply(null, length_array1) - Math.max.apply(null, length_array2));
}

function best_mxdiflg(array1, array2){
  const length_array1 = array1.map(element => element.length);
  const length_array2 = array2.map(element => element.length);

  return Math.max(Math.max(...length_array1) - Math.min(...length_array2), Math.max(...length_array2) - Math.min(...length_array1));
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(best_mxdiflg(s1, s2));
