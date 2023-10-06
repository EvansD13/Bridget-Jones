const db = require("../database/connect")

class Entry {
    constructor ({entry_id, entry_date, entry_time, entry_text, category}){
        this.id = entry_id;
        this.entry_date = entry_date
        this.entry_time = entry_time
        this.entry_text = entry_text
        this.category = category
    }

    static async getAll(){
        const response = await db.query("SELECT * FROM diary ORDER BY entry_date")
        if (response.rows.length === 0){
            throw new Error("Can't find your diary!")
        }
        return response.rows.map(g => new Entry(g))
    }
}

module.exports = Entry