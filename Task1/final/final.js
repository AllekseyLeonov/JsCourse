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

function reduce(array, func, value = 0){
  let acc = value
  if(typeof func != "function"){
    console.log("Error:'reduce' function second argument was not a function")
  }
  else if(func.length !== 2){
    console.log("Error:'reduce' function second argument must have two arguments")
  }
  else {
    for (let i = 0; i < array.length; i++) {
      acc = func(acc, array[i])
    }
  }
  return acc
}

const notes = [
  {
    id: 1,
    title: 'Recipe',
    description: 'Ingredients include 2 eggs...',
    pagesCount: 2,
    isMarked: false,
    access: []
  },
  {
    id: 2,
    title: 'Workouts',
    description: '3 sets of squats...',
    pagesCount: 1,
    isMarked: true,
    access: []
  },
  {
    id: 3,
    title: 'Passwords',
    description: 'VISA ...',
    pagesCount: 6,
    isMarked: true,
    access: []
  },
  {
    id: 4,
    title: 'To Do 2021',
    description: '1. Learn JS...',
    pagesCount: 3,
    isMarked: false,
    access: []
  }
]

console.log(map(notes, item => {return {id: item.id, title: item.title} }))
console.log(filter(notes, item => item.isMarked))
console.log(reduce(notes, (num1,num2) => num1 += num2.pagesCount))