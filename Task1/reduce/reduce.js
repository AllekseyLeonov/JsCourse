function reduce(array, func, value = 0){
  let accumulator = value
  try{
    for (let i = 0; i < array.length; i++){
      accumulator = func(accumulator, array[i])
    }
  } catch(e){
    console.log(e.message)
  }
  return accumulator
}

const arr = [1,2,3,4]
console.log(arr)
console.log(reduce(arr, 3))
console.log(reduce(arr, (num1,num2) => num1 + num2))