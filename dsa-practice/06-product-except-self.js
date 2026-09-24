/*You are given an integer array nums.You need to return an array where every item at index 
i is the product of all the numbers in the array except the number at index i.
The Catch: You must write an algorithm that runs in $O(n)$ time,
and you cannot use the division operator.*/

function   productExceptSelf(nums) {

        let n = nums.length  ; 
        let result = new Array(n);

            let prefix = 1 ;

            for(let i = 0 ; i< n ; i++){
                result[i] = prefix ;
                prefix *= nums[i] ;
            }

            let postfix = 1 ;

            for(let i = n-1 ; i>=0 ; i--){
                result[i] *= postfix ; 
                postfix *= nums[i];
            }

            return result ;

    
    }

    let nums = [1, 2, 3, 4]
    console.log(productExceptSelf(nums));
    