function filter(arr, condition){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(condition(arr[i])){
      newArr.push(arr[i])
    }
  }
  return newArr
}

let arr = [1,2,3,4]
console.log(arr)

arr = filter(arr, i => i>2)
console.log(arr)