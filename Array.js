// Jai Sri Ganesh
// Om Swastik Om

function reverseAnArray(arr){
    let n = arr.length
    for(let i=0; i<Math.floor(n/2);i++){
        let temp = arr[i]
        arr[i]=arr[n-1-i]
        arr[n-1-i]=temp
    }
    return arr
}

// console.log(reverseAnArray([1,2,3,4]))

// [1,2,3,4,4,5]
// [1,2,3,4,5]
// remove duplicates from sorted array
function removeDuplicates(arr){
    let n = arr.length
    let x = 0
    for(let i=1; i<n;i++){
        if(arr[x] !== arr[i]){
            arr[++x]=arr[i]
        }
    }
    return arr.slice(0,x)
}
// console.log(removeDuplicates([1,2,3,4,4,6,7]))

function reverseArray(arr,start,end){
    while(start<end){
        let temp = arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
    return arr
}
function leftRotateAnArray(arr,lt){
    let n = arr.length
    reverseArray(arr,0,lt-1)
    reverseArray(arr,lt,n-1)
    reverseArray(arr,0,n-1)
    return arr
}

// console.log(leftRotateAnArray([1,2,3,4,5], 2))

//[16,17,4,3,5,2]

function leaders(arr){
    let n = arr.length
    let leader = arr[n-1]
    // console.log(leader)
    for(let i=n-2; i>=0;i--){
        if(arr[i]>leader){
            // console.log(arr[i])
            leader = arr[i]
        }
    }
}
leaders([16,17,4,3,5,2])

function maxDiff(arr){
    let n = arr.length
    let maxDiff = -Infinity
    let currHighest = arr[n-1]
    for(let i=n-2; i>=0; i--){
        maxDiff = Math.max(currHighest-arr[i], maxDiff)
        if(currHighest<arr[i]){
            currHighest = arr[i]
        }
    }
    return maxDiff
}
// console.log(maxDiff([2,3,10,6,4,8,1]))


// arr = [3, 0, 2, 0, 4]

function trapWater(arr){
    let n = arr.length

    let postMax = new Array(n)
    let preMax = new Array(n)

    // Initialize
    postMax[n-1] = arr[n-1]
    preMax[0] = arr[0]

    // Build suffix max
    for(let i = n-2; i >= 0; i--){
        postMax[i] = Math.max(postMax[i+1], arr[i])
    }

    // Build prefix max
    for(let i = 1; i < n; i++){
        preMax[i] = Math.max(preMax[i-1], arr[i])
    }

    // Calculate water
    let total = 0
    for(let i = 1; i < n-1; i++){
        let waterLevel = Math.min(postMax[i], preMax[i])
        total += waterLevel - arr[i]
    }

    return total
}

// console.log(trapWater([3,0,2,0,4]))

function consecutiveOnes(arr){
    let count = 0
    let maxCount = 0
    let n = arr.length
    for(let i=0; i<n; i++){
        if(arr[i]===1){
            ++count
            maxCount = Math.max(maxCount, count)
        }else{
            count = 0
        }
    }
    return maxCount
}
// console.log(consecutiveOnes([0,1,0,1,1,1]))

function maxSumSubArray(arr){
    let n = arr.length

    let maxSum = arr[0]
    let currSum = 0

    let start = 0
    let end = 0
    let tempStart = 0

    for(let i = 0; i < n; i++){

        if(currSum === 0){
            tempStart = i
        }

        currSum += arr[i]

        // ✅ FIRST update max
        if(currSum > maxSum){
            maxSum = currSum
            start = tempStart
            end = i
        }

        // ✅ THEN reset
        if(currSum < 0){
            currSum = 0
        }
    }

    return { maxSum, start, end }
}

// console.log(maxSumSubArray([-2,-3,4,-1,-2,1,5,-3]))


function majorityElement(arr){
   let n = arr.length
   let countStore = {}
   for(let i=0; i<n; i++){
    countStore[arr[i]] !== undefined ? countStore[arr[i]] = ++countStore[arr[i]] : countStore[arr[i]] = 1
   }
   for(let key in countStore){
        if(countStore[key]>n/2){
            return key
        }
   }
   return -1
}
// console.log(majorityElement([2,2,1,3,1,1,3,1,1]))

function majorityEle(arr){
    let majorityElement
    let count = 0
    let n = arr.length
    for(let i=0; i<n; i++){
        if(count === 0){
            majorityElement = arr[i]
        }
        if(arr[i] === majorityElement){
            count++
        }else{
            count--
        }
    }

    let counter = 0
    for(let i=0; i<n; i++){
        if(arr[i] === majorityElement){
            ++counter
        }
    }
    return counter>n/2 ? majorityElement : -1
}
majorityEle([2,2,1,3,1,1,3,1,1])

function maxSumSubArrayOfSizeK(arr,k){
    let sum = 0
    let n = arr.length
    for(let i=0; i<k; i++){
        sum+=arr[i]
    }
    let maxSum = sum
    for(let i=k; i<=n-k; i++){
        sum = sum + arr[i+2] - arr[i-1]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}
// console.log(maxSumSubArrayOfSizeK([2, 1, 5, 1, 3, 2],3))


function subArrayWithGivenSum(arr,target){
    let n = arr.length
    let start = 0
    let sum = 0
    for(let end = 0; end<n; end++){
        sum += arr[end]
        while (sum>target){
            sum = sum - arr[start]
            ++start
        }
        if(sum === target){
            return [start,end]
        }
    }
    return -1
}

// console.log(subArrayWithGivenSum([1, 4, 0, 0, 3, 10, 5],7))

function nBonacci(n, m){
    let arr = new Array(m).fill(0)

    // Base case
    arr[n - 1] = 1
    let sum = 1

    for(let i = n; i < m; i++){
        arr[i] = sum
        // sliding window update
        sum = sum + arr[i] - arr[i - n]
    }

    return arr
}

// console.log(nBonacci(3, 6))

function maxDistinctElementsInWindow(arr,k){
    let n = arr.length
    let mapStore = new Map()
    for(let i=0; i<k; i++){
        mapStore.set(arr[i], (mapStore.get(arr[i]) || 0) + 1)
    }
    let count = mapStore.size
    let maxCount = count
    for(let i=k; i<n; i++){
        mapStore.set(arr[i], (mapStore.get(arr[i]) || 0) + 1)
        mapStore.set(arr[i-k], mapStore.get(arr[i-k])-1)
        if(mapStore.get(arr[i-k]) === 0){
            mapStore.delete(arr[i-k])
        }
        count = mapStore.size
        maxCount = Math.max(count,maxCount)
    }
    return maxCount
}
// console.log(maxDistinctElementsInWindow([1, 2, 1, 3, 4, 2, 3],4))

function prefixSum(arr){
    let sum = 0
    let prefixSumStore = []
    let n = arr.length

    for(let i=0; i<n; i++){
        sum += arr[i]
        prefixSumStore[i] = sum
    }
    return prefixSumStore
}
// console.log(prefixSum([1,2,3,4]))

function equilibrium(arr){
    let total = 0
    let n = arr.length
    for(let i=0; i<n; i++){
        total+=arr[i]
    }
    let leftSum = 0
    for(let i=0; i<n; i++){
        if(leftSum === total - leftSum - arr[i]){
            return i
        }
        leftSum += arr[i]
    }
    return -1
}
// console.log(equilibrium([1,2,3,4,3,2,1]))

function equalPartsOfArray(arr,k){
    let total = 0
    let n = arr.length
    for(let i=0; i<n; i++){
        total+=arr[i]
    }
    if(total%k !== 0) {return false}
    let target = total/k
    let sum = 0
    let counter = 0
    for(let i=0; i< n; i++){
        sum+=arr[i]
        if(sum === target){
            sum = 0
            ++counter
        }
    }
    return k === counter
}
// equalPartsOfArray([1,2,0,3,3],3)

function equalNumberOfZeroAndOne(arr){
    let n = arr.length
    let sum = 0
    let maxSize = 0
    let mapStore = new Map()
    mapStore.set(0, -1)
    for(let i=0; i<n; i++){
        arr[i] === 0 ? --sum : ++sum
        if(!mapStore.has(sum)){
            mapStore.set(sum, i)
        }else{
            maxSize=Math.max(maxSize,i-mapStore.get(sum))
        }
    }
    return maxSize
}
console.log(equalNumberOfZeroAndOne([1,1,1,0,0,0,0,1,1,1]))