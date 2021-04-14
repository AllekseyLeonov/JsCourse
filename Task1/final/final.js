function map(arr, func){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(func(arr[i]))
  }
  return newArr
}

function filter(arr, condition){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(condition(arr[i])){
      newArr.push(arr[i])
    }
  }
  return newArr
}

function reduce(arr, func, value = 0){
  let acc = value
  for(let i = 0; i < arr.length; i++){
    acc = func(acc, arr[i])
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

console.log(map(notes, i => {return {id: i.id, title: i.title} }))
console.log(filter(notes, i => i.isMarked))
console.log(reduce(notes, (a,b) => a += b.pagesCount))