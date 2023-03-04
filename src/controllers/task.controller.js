import Task from "../models/task.js";


export const createTask = (req,res) => {
    const { judul, deskripsi, status } = req.body;

    const task = new Task({
        judul, deskripsi, status
    })

    task.save()
    .then(data => {
        res.send({
            message:"Success save data",
            data: data
        }).status(200)
    }).catch(err => {
        console.log(`error message : ${err}` )
    })
}


export const getAllTask = (req,res) => {
    Task.find()
    .then(data => {
        res.send({
            message:"all data task",
            data:data
        })
    }).catch(err => {
        console.log(`error message : ${err}`)
    })
}


export const findTask = (req, res) => {
    const { id } = req.params;

    Task.findOne({
        where: { id },
        attributes: ['id','judul', 'deskripsi', 'status']
    }).then(data =>{
        if(!data){
            return res.send({message:"task not found"}).status(401)
        }
        res.send({
            message:"find data success",
            data: data 
        }).status(200)
    }).catch(err =>{
        console.log(err)
    })
}


export const updateTask = (req, res) => {
    const { id } = req.params;
    const { judul, deskripsi, status} = req.body;

    if(!id){
        return res.send({
            message:"id not found"
        })
    }

    Task.update({
        judul,
        deskripsi,
        status
    },{ where: { id } })
    .then(()=> {
        res.send({
            message:"data success updated"
        }).status(200)
    }).catch(err => {
        console.log(`error message : ${err}`)
    })
}


export const deleteTask = (req, res) => {
    const {id} = req.body;

    if(!id){
        return res.send({
            message:"id not found"
        })
    }

    Task.destroy({
        wher:{ id }
    }).then(()=> {
        res.send({ message:"deleted success"})
    }).catch(()=>{
        console.log(err)
    })
}