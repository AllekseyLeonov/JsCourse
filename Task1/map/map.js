function map(arr, func){
  const newArr = []
  if(typeof func != "function"){
    console.log("Error:'filter' function second argument was not a function")
  }
  for(let i = 0; i < arr.length; i++){
    newArr.push(func(arr[i]))
  }
  return newArr
}

const arr = [1,2,3,4]
console.log(arr)
console.log(map(arr, item => item+1))