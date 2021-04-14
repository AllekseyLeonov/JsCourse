function filter(array, condition){
  const newArr = []
  if(typeof condition != "function"){
    console.log("Error:'filter' function second argument was not a function")
  }
  else if(condition.length !== 1){
    console.log("Error:'filter' function second argument must have one argument")
  }
  else {
    for(let i = 0; i < array.length; i++){
      if(condition(array[i])) {
        newArr.push(array[i])
      }
    }
  }
  return newArr
}

const arr = [1,2,3,4]
console.log(arr)
console.log(filter(arr, item =>  item>2))
console.log(filter(arr, 3))
console.log(filter(arr, (item,i) =>  item>2))