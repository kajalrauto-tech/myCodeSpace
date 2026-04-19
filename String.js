function sortString(str){
    let store = new Array(256).fill(0)
    let n = str.length
    let sortedArray = []
    for(let i=0; i<n; i++){
        let index = str.charCodeAt(i)
        store[index] += 1
    }
    for(let i=0; i<256; i++){
        for(let j=0; j<store[i]; j++){
            let ch = String.fromCharCode(i)
            sortedArray.push(ch)
        }
    }
    return sortedArray.join('')
}
// console.log(sortString('kajal'))

function anagram(str1,str2){
    let n1 = str1.length
    let n2 = str2.length
    if(n1!==n2){return false}
    let store = new Array(256).fill(0)
    for(let i=0; i<n1; i++){
        let index1 = str1.charCodeAt(i)
        let index2 = str2.charCodeAt(i)
        store[index1] += 1
        store[index2] -= 1
    }
    for(let j=0; j<256; j++){
        if(store[j] !== 0){
            return false
        }
    }
    return true
}
console.log(anagram('ward', 'draw'))

function leftRepeatingItem(str){
    let store = new Array(256).fill(0)
    let n = str.length
    for(let i=0; i<n; i++){
        let index = str.charCodeAt(i)
        store[index] = store[index]+1
    }
    for(let i=0; i<n; i++){
        let index = str.charCodeAt(i)
        if(store[index]>1){
            return str[i]
        }
    }
    return -1
}
leftRepeatingItem('jajajajjil')

function leftMostRepeating(str){
    let n = str.length
    let store = new Array(256).fill(false)
    let ltRepeatingCh = n
    for(let i=n-1; i>=0; i--){
        let index = str.charCodeAt(i)
        if(store[index] === true){
            ltRepeatingCh = i
        }else{store[index] = true}
    }
    return ltRepeatingCh === n ? '' : str[ltRepeatingCh]
}
leftMostRepeating('jhhjghg')

function leftMostNonRepeating(str){
    let n = str.length
    let store = new Array(256).fill(0)

    // Step 1: Count frequency
    for(let i=0; i<n; i++){
        store[str.charCodeAt(i)]++
    }

    // Step 2: Find leftmost non-repeating
    for(let i=0; i<n; i++){
        if(store[str.charCodeAt(i)] === 1){
            return str[i]
        }
    }

    return -1
}

// console.log(leftMostNonRepeating("geeksforgeeks"))

function isSubsequence(str1,str2){
    let n1 = str1.length
    let n2 = str2.length
    let i = 0
    let j = 0
    while(i<n1 && j<n2){
        if(str1[i] === str2[j]){
            ++j
        }
        ++i
    }
    return j === n2
}
isSubsequence('ABCCDEF','ABC')

function isPalindrome(str){
    let n = str.length
    let oddCount = 0
    let store = new Array(256).fill(0)

    for(let i=0; i<n; i++){
        index = str.charCodeAt(i)
        store[index]+=1
    }

    for(let i=0; i<256; i++){
        if(store[i] % 2 !== 0){
            oddCount++
        }
    }

    return oddCount<=1
}
isPalindrome('madam')