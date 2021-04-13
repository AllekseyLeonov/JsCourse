function map(arr, func){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(func(arr[i]))
  }
  return newArr
}

let arr = [1,2,3,4]
console.log(arr)

arr = map(arr, i => i+1)
console.log(arr)