const arr = [1,2,3,2,3,2,2,3,3,1,5,3,2]
const arr2 = [1,2,3,4,4,1,2,3,3,6]

function findAlone(arr) {
    for (let i = 0; i < arr.length; i++)
    {
        let count = 0
        for (let j = 0; j < arr.length; j++){
            if (arr[j] === arr[i]){
                count++
            } 
            if (count > 1){
                break 
            } 
        }
        if (count === 1){
            return arr[i]
        } 
    }
}

console.log(findAlone(arr))
console.log(findAlone(arr2))

//если бы была гарантия, что количество повторяющихся символов было чётным,
// то можно было бы красиво решить это через XOR с меньшей сложностью алгоритма