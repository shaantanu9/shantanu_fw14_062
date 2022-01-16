//         
//////////////////////  Start GP

// findGp(3)

// function findGp(n) {



// }

//////////////////////  End GP


// //////////////////////  Start Print No

// print(213);

// function print(n) {
//     noarr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten']

//     if(n==0) {return};
//     if(n<0) {return};

//     lastDigit = n%10
//     n = (n/10).toFixed();
// //    n = n.toFixed()

//     // console.log(noarr[lastDigit])  
//     console.log('n====> ', n)  
//     // console.log(lastDigit)

//     print(n)  
//     console.log(lastDigit)
//     console.log(noarr[lastDigit])
//     return;
// }


////////////////////////  End Print No


//////////////////////// Stair ways 

// console.log(stairway(8))

// function stairway(n){

// if(n<0){return 0;}
// if(n==0){return 1;}

// return stairway(n-1)+ stairway(n-2)

// }

//////////////////////// End


// //////////////////////// Start Binary Search

// // arr = [
// //    1,  1,   2,   2,  2,  2,  3,  3,
// //    3,  4,   4,   5,  5,  6,  6,  7,
// //    8, 12,  12,  23, 44, 54, 54, 55,
// //   65, 99, 223, 645
// // ]

// arr = [1,2,3,4,5,6,7,12,23,24,26,27,28,32,33,35,43,44,56]
// console.log(binary(arr, 57, 0, arr.length-1))

// function binary(arr,n,start,end){

// if(start>end) return false;

// let mid=Math.floor((start + end)/2);

// if (n==arr[mid]) return true; 

// if(arr[mid]>n){ return binary(arr,n,start,mid-1); }
// else{ return binary(arr,n,mid+1,end);}

// }


//////////////////////// End 

/////////////////////////// Start Binary Binary

// // // let arr = [1, 3, 5, 7, 8, 9];
// arr = [1,2,3,4,5,6,7,12,23,24,26,27,28,32,33,35,43,44,56]

// let x = 27;

// console.log(recursiveFunction(arr, x, 0, arr.length-1))

// function recursiveFunction(arr, x, start, end) {
      
//     if (start > end) return false;
//     let mid=Math.floor((start + end)/2);
  
//     if (arr[mid]===x) return true;
         
//     if(arr[mid] > x)
//         return recursiveFunction(arr, x, start, mid-1);
//     else
//         return recursiveFunction(arr, x, mid+1, end);
// }

// /////////////////////////////// End Binary


//////////////////// End

/////////////////////// BubbleSort Start

//   function bubbleSort(arr, n)
// {
//     if (n == 1)
//         return;
     
//     for (var i = 0; i < n - 1; i++){
//         if (arr[i] > arr[i + 1]){
//         [arr[i], arr[i+1]]= [arr[i+1], arr[i]];
//         }
//     }
//     bubbleSort(arr, n - 1);
// }
  
// var arr = [9,8,7,6,5,4,3,2,1 ]
// console.log(arr)

// bubbleSort(arr, arr.length);

// console.log(arr)

//    for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i] + " ");
//     }

/////////////////////// BubbleSort End


// ////////////////////// Start quickSort

// function quickSortRecursive(arr, start, end) {
//     // Base case or terminating case
//     if (start >= end) {
//         return;
//     }
    
//     // Returns pivotIndex
//     let index = partition(arr, start, end);
    
//     // Recursively apply the same logic to the left and right subarrays
//     quickSort(arr, start, index - 1);
//     quickSort(arr, index + 1, end);
// }

// array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
// quickSortRecursive(array, 0, array.length - 1)

// console.log(array)

// ////////////////End quickSort



///////////////////// Start Quick Sort


// var items = [5,3,7,6,2,9,53,23,233,65,43,1,2,87,98,54,343,232,23,32,12,34];

// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             [items[i], items[j]] = [items[j],items[i]];
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]



// //////////////////// End Quick Sort


// /////////////////////Start Quick Sort

// a1 = [1,3,5,7,9,11,13]
// a2 = [2,4,6,8,10,12,14,16,18,20,22,24,26]

// q(a1,a2)

// function q(a1,a2){

//     ans = [];left = 0; right = 0; curr = 0;

//     while(left<a1.length && right<a2.length){

//         if(a1[left]>a2[right]){
//             ans[curr]=a2[right];
//             right++
//         }
//         else{
//             ans[curr]=a1[left];
//             left++;
//         }
//         curr++
//     }

// console.log(ans);
//     while(right<a2.length){

//         ans[curr]=a2[right]
//         right++
//         curr++
//     }

//     while(left<a1.length){

//         ans[curr]=a1[left];
//         left++
//         curr++
//     }
// console.log(ans);

// }


// //////////////////// End Sort

// ///////////////// Start  Array sum

// arr= [1,2,3]

// console.log(findSum(arr,arr.length))

// // function findSum(A, N)
// //     {
// //         if (N <= 0){return 0};
// //         return (findSum(A, N - 1) + A[N - 1]);
// //     }

// function findSum(arr, n){
//     if(0>=n){return 0;}
//     return findSum(arr,n-1)+(arr[n-1])
// }


///////////////////////End

// ///////////////// Start EtoPower
// USe == for Compare in if, get Wrong

// function fact(k){
//     if(k==0) {return 1;}
//     return k*fact(k-1);
// }

// function e2(x,n){

//     if(n==0){return 1;}
//     return ((1/fact(n))*(x**n))+(e2(x,n-1));
// }

// console.log(e2(4,2))
// // console.log(fact(5))


// ///////////////// End EtoPower

// ////////////// GP and Recussion
// // S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n)

// // See the Sequence of the PArameter that declear in
// // main and what you are passing in recussion relation function

// console.log(findGp(3,5))

// function findGp(n,r){

// console.log(n,r)

// if(n<=0){return 1;}
// return (1/(r**n))+findGp(n-1,r)

// }

//////////////// End Gp and Reccusion

// ////////////// Start Bubble Sort

// arr = [100,99,98,97,96,95,94,93,92,91,90]

// console.log(arr);

// bsort(arr, arr.length-1)

// console.log(arr);

// function bsort(arr, n){

//     if(n==0){return true}

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             [arr[i], arr[i+1]] = [arr[i+1],arr[i]]
//         }
//     }

//     return bsort(arr,n-1);
// }

///////////// End Bubble Sort

// ////////////// Start Famous No
// // https://oj.masaischool.com/contest/2733/problem/05

// // 143 3 => 3
// arr = 123
// console.log(famousNo(arr,3))

// function famousNo(arr,n, count=0){
//     arr = String(arr).split('').map(Number);
//     sum = 0;
//     for(x in arr){
//         // if(arr[x]==9){continue} //=> if no is 99999 this not work
//         sum+=arr[x];
//     }
//     if(count==0){
//     sum*=n;
//     count++;
//     }
//     // console.log("sum=>", sum)

//     if(sum>10){return famousNo(sum,n,count)}
//     else{ return sum;}

// }

// // /////////////// End Famous No


// ///////////////////// Start a^b Power of a to b

// console.log(power(2,4))

// function power(a,b){

//     if(b==0){return 1}
//     return a*(power(a,b-1));

// }


// ///////////////////// End a^b Power of a to b

// ///////////////////// Start height of building and earining

// arr = [3,5,3,2,4,2,3,6,7,5,3]
// wage = 3; // wage per client visit
// earning(arr, wage)

// function earning(arr,wage){

//     count=0;
//     min = 0
//     for(x in arr){
//         if(min<arr[x]){ min=arr[x]; count++; console.log(arr[x])}
//     }

//     console.log(count*wage)

// }


/////////////////////// End height of Building

// ///////////////// convert no  to Binary Start

// n = 15;
// // n = 128;
// console.log(toBinary(n));

// function toBinary(n){
//     if(n==1){return 1;}
//     return (toBinary(Math.floor(n/2))+""+n%2);
// }

// ////////////////////// End Binary

//////////////////// Start GCD




//////////////// End GCD


///////////// SubSequence Start

input = 'abcd'; output=""

sub(input,output)

function sub(input, output)
{

    if (input.length==0) {
        console.log(output);
        return;
    }

    sub(input.substring(1), output + input[0]);
    sub(input.substring(1), output);
}

//////////// End SubSequence