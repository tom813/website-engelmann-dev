import excuteQuery from "../../../lib/db";

const handler = async (req, res) => {
    try{
        const result = await excuteQuery("SELECT url FROM seo")

        return res.json(result)
    } catch(e){
        res.status(500).json({message: e.message})
    }
}

export default handler