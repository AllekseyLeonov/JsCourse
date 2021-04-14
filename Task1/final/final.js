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