function reduce(arr, func, value = 0){
  let acc = value
  for(let i = 0; i < arr.length; i++){
    acc = func(acc, arr[i])
  }
  return acc
}

let arr = [1,2,3,4]
console.log(arr)
console.log(reduce(arr, (a,b) => a + b))