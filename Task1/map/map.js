function map(arr, func){
  const newArr = []
  try{
    for(let i = 0; i < arr.length; i++){
      newArr.push(func(arr[i]))
    }
  } catch(e){
    console.log(e.message)
  }
  return newArr
}

const arr = [1,2,3,4]
console.log(arr)
console.log(map(arr, item => item+1))
console.log(map(arr, 3))