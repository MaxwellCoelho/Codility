/*
Task description:

A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
    
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

   function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
    
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    
the function should return 0.

Write an efficient algorithm for the following assumptions:

   - N is an integer within the range [1..100,000];
   - each element of array A is an integer within the range [1..1,000,000,000].

Solution:
*/

function solution(A) {
   let sequence = new Set(A.sort());

   if (A.length == 1 && A[0] == 1) {
      return 1;
   }

   if (A.length > sequence.size) {
      return 0;
   }

   for (let n of sequence) {
      if (n > 1 && !sequence.has(n - 1)) {
         return 0;
      }
   }

   return 1;
}
