function binarySearch(arr,target){
    let start = 0
    let end = arr.length-1
    while(start<=end){
        let mid = Math.floor(start+(end-start)/2)
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]<target){
            start=mid+1
        }else{
            end=mid-1
        }
    }  
    return -1 
}
// console.log(binarySearch([1, 3, 5, 7, 9],3))

// function binarySearchRecursively(arr,start,end,target){
//     if(start>end){return -1}
//         let mid = Math.floor(start+(end-start)/2)
//         if(arr[mid]===target){
//             return mid
//         }else if(arr[mid]<target){
//             start=mid+1
//         }else{
//             end=mid-1
//         }
//     return binarySearchRecursively(arr,start,end,target)
// }
// console.log(binarySearchRecursively([1,3,5,7,9],0,4,3))

// better version...above one mutates existeing variables

function binarySearchRecursively(arr, start, end, target){

    // Base case: not found
    if(start > end){
        return -1;
    }

    let mid = Math.floor(start + (end - start) / 2);

    // Found
    if(arr[mid] === target){
        return mid;
    }

    // Search right half
    if(arr[mid] < target){
        return binarySearchRecursively(arr, mid + 1, end, target);
    }

    // Search left half
    return binarySearchRecursively(arr, start, mid - 1, target);
}

// console.log(binarySearchRecursively([1,3,5,7,9], 0, 4, 3));
function firstOccurence(arr,target){
    let start = 0
    let end = arr.length-1
    let first = -1
    while(start<=end){
    let mid = Math.floor(start+(end-start)/2)
    if(arr[mid]===target){
        first = mid
        end=mid-1
    }else if(arr[mid]>target){
        end=mid-1
    }else{
        start=mid+1
    }
    }
    return first
}
// console.log(firstOccurence([1,2,2,2,3,4,5],2))

function findXInInfiniteArray(arr,target){
    let start = 0
    end = 1
    while (arr[end]<target){
        start = end
        end = end*2
    }
    while(start<=end){
        let mid = Math.floor(start+(end-start)/2)
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]>target){
            end = mid-1
        }else{
            start = mid+1
        }
    }
    return -1
}
// console.log(findXInInfiniteArray([1,2,3,4,5,6,7,8,9], 5))

function smallestPivot(arr){
    let start = 0
    let end = arr.length-1
    while(start<end){
        let mid = Math.floor(start+(end-start)/2)
        if(arr[mid]>arr[end]){
            start = mid+1
        }else{
            end = mid
        }
    }
    return arr[start]
}
// console.log(smallestPivot([4,5,6,7,0,1,2]))

function findPeakElement(arr){
    let start = 0
    let end = arr.length-1
    while(start<end){
        let mid=Math.floor(start+(end-start)/2)
        if(arr[mid]<arr[mid+1]){
            start = mid+1
        }else{
            end=mid
        }
    }
    return arr[start]
}
// console.log(findPeakElement([1,2,3,1]))

function pairSum(arr){
    let start = 0
    let end = arr.length-1
    while(start<end){
        if(arr[start]+arr[end]===target){
            return [start,end]
        }
    }

}
console.log(pairSum([1,2,3,4],6))