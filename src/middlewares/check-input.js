import { body } from "express-validator"

export const checkInput = (req,res,next) => {
    const {judul, status} = req.body;

    if( !judul || !status ){
        return res.send({
            messager:"Please input the field"
        })
    }

    next()
}