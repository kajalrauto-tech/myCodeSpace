function countDistinct(arr){
    // arr.sort((a,b)=>a-b)
    let n = arr.length
    // let map = new Map()
    // for(let i=0; i<n;i++){
    //     map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    // }
    // return map.size
    let set = new Set()
    for(let i=0; i<n; i++){
        set.add(arr[i])
    }
    return set.size
}

function countFrequency(arr){
    let n = arr.length
    let map = new Map()
    // for(let i=0; i<n;i++){
    for(let num of arr){
        map.set(num, (map.get(num) || 0) + 1)
    }
    return map
}
countFrequency([1,2,3,4,4,5,5])

function findIntersection(arr1, arr2){
    let map = new Map()
    let intersectionArray = []
    for(let num of arr1){
        map.set(num, (map.get(num) || 0) + 1)
    }
    for(let num of arr2){
        if(map.get(num) > 0){
            intersectionArray.push(num)
            map.set(num, map.get(num) -1)
        }
    }
    return intersectionArray
}
findIntersection([1, 2, 2, 3, 4], [2, 2, 3, 5])

function union(arr1,arr2){
    // let cumArr = [...arr1, ...arr2]
    // let set = new Set()
    // for(let num of cumArr){
    //     set.add(num)
    // }
    // return [...set]
    return [...new Set([...arr1, ...arr2])]
}
union([1,2,2,3,3,4], [4,5,6])

function pairSum(arr,target){
    let set = new Set()
    for(let num of arr){
        let compliment = target-num
        if(set.has(compliment)){
            return [compliment, num]
        }
        set.add(num)
    }
    return -1
}
pairSum([10,3,9,7], 10)

// longest span and longest consecutive integer subsequence
