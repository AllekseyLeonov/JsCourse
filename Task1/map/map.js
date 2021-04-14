function map(arr, func){
  const newArr = []
  if(typeof func != "function"){
    console.log("Error:'map' function second argument was not a function")
  }
  else{
    for(let i = 0; i < arr.length; i++){
      newArr.push(func(arr[i]))
    }
  }
  return newArr
}

const arr = [1,2,3,4]
console.log(arr)
console.log(map(arr, item => item+1))
console.log(map(arr, 3))