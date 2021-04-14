function filter(array, condition){
  const newArr = []
  try{
    for(let i = 0; i < array.length; i++){
      if(condition(array[i])) {
        newArr.push(array[i])
      }
    }
  } catch (e) {
    console.log(e.message)
  }
  return newArr
}

const arr = [1,2,3,4]
console.log(arr)
console.log(filter(arr, item =>  item>2))
console.log(filter(arr, 3))