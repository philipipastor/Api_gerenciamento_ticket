import fs from "node:fs/promises"

const dataBase_path = new URL("db.json", import.meta.url)

export class Database{
    #database = {}
    
    constructor(){
        fs.readFile(dataBase_path, "utf8")
        .then((data) => { this.#database = JSON.parse(data) })
        .catch(() => { this.#persist() })
    }

    #persist(){
        fs.writeFile(dataBase_path, JSON.stringify(this.#database))
    }

    insert(table,data) {
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()
    }

    select(table){
        let data = this.#database[table] ?? []
        return data
    }

}