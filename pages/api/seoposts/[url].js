import excuteQuery from "../../../lib/db";

const handler = async (req, res) => {
    const { url } = req.query 

    try {
        if (!url){
            return res.status(400).json({message: 'id required'})
        }
        const result = await excuteQuery("SELECT * FROM seo WHERE url = ?", url)
        return res.status(200).json(result)
    } catch (e){
        return res.status(500).json({message: e.message})
    }
}

export default handler