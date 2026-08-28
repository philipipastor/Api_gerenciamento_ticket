export async function jsonHandler(req,res){
    const buffer = []
     
    for await (const chunks of req){
        buffer.push(chunks)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffer).toString())
    } catch (error) {
        req.body = null
    }

    res.setHeader("Content-Type", "application/json")

}