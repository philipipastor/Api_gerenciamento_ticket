export function remove({req,res,database}){
    const { id } = req.params

    database.remove("tickets", id)
    res.end()
}