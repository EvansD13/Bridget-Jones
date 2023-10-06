const db = require("../database/connect")

function getDateTime(){
    const y = new Date().getFullYear()
    const m = new Date().getMonth()
    const d = new Date().getDate()

    const today = `${d}-${m + 1}-${y}`
    let hour = new Date().getHours()
    if (hour < 10){
        time = `0${hour}`
    }
    let mins = new Date().getMinutes()
    if (hour < 10){
        time = `0${hour}`
    }

    const time = `${hour}:${mins}`
    console.log(today)
    return [today, time]
}

function timeCorrect(time){
    if (time < 10){
        console.log(time)
        time = `0${time}`
        console.log(time)
    return time
    }
}
class Entry {
    constructor ({entry_id, entry_date, entry_time, entry_text, category}){
        this.id = entry_id;
        this.entry_date = entry_date
        this.entry_time = entry_time
        this.entry_text = entry_text
        this.category = category
    }

    static async getAll(){
        const response = await db.query("SELECT * FROM diary ORDER BY entry_date DESC;")
        if (response.rows.length === 0){
            throw new Error("Can't find your diary!")
        }
        return response.rows.map(g => new Entry(g))
    }
    static async getOneById(id) {
        console.log(id)
        const response = await db.query("SELECT * FROM diary WHERE entry_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.")
        }
        return new Entry(response.rows[0]);
    }

    static async createEntry(data){
       const temporal  = getDateTime()
       const today = temporal[0]
       const time = temporal[1]

        const { entry_text, category } = data
        const query = "INSERT INTO diary (entry_date, entry_time, entry_text, category) VALUES ($1, $2, $3, $4) RETURNING *;"
        const values = [today, time, entry_text, category]

        const response = await db.query(query, values)
        const entryID = response.rows[0].entry_id
        const newEntry = await Entry.getOneById(entryID)

        return newEntry
    }

    async updateEntry(data){
        console.log([data, this.id])
        const query = 'UPDATE diary SET entry_text = $1 WHERE entry_id = $2 RETURNING *'
        const values = [data, this.id]
        const response = await db.query(query, values)
        if (response.rows.length != 1){
            throw new Error("Unable to update diary entry!")
        }
        return new Entry(response.rows[0]);
    }
    async deleteEntry(){
        const query = 'DELETE FROM diary WHERE entry_id = $1 RETURNING *'
        const response = await db.query(query, [this.id])
        if (response.rows.length != 1){
            throw new Error("Unable to delete entry!")
        }
        return new Entry(response.rows[0])

    }
}

module.exports = Entry