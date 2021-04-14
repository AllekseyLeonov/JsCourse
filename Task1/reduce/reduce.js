function reduce(array, func, value = 0){
  let accumulator = value
  if(typeof func != "function"){
    console.log("Error:'reduce' function second argument was not a function")
  }
  else if(func.length !== 2){
    console.log("Error:'reduce' function second argument must have two arguments")
  }
  else {
    for (let i = 0; i < array.length; i++) {
      accumulator = func(accumulator, array[i])
    }
  }
  return accumulator
}

const arr = [1,2,3,4]
console.log(arr)
console.log(reduce(arr, (num1,num2) => num1 + num2))
console.log(reduce(arr, (num1,num2,num3) => num1 + num2 + num3))