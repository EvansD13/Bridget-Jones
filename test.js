const y = new Date().getFullYear()
const m = new Date().getMonth()
const d = new Date().getDate()

const today = `${d}-${m + 1}-${y}`
let mins = new Date().getMinutes()
if (mins < 10){
    mins = `0${mins}`
}

const time = `${new Date().getHours()}:${mins}`

console.log(today, time)