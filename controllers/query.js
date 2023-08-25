


export const getQuery = async (req, res)=>{
    

    try{
        res.status(200).json("Hola como va?")
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

// export const createPlataforma = async(req, res) =>{
    
//     const platform = req.body;
        
//     const newPlatform = new Plataforma(platform);
    

//     try{
//         await newPlatform.save();
//         res.status(201).json(newPlatform)
//     }catch(error){
//         res.status(409).json({message: error.message})
//     }

// }

// export const deletePlataforma = async (req, res)=>{
    
//     const id = req.params.id;
//     await Plataforma.findByIdAndRemove(id)
//     res.json({message: 'Plataforma deleted succesfully', id: id})

// }

// export const updatePlataforma = async (req, res) =>{

//     const plataforma = req.body.edited_platform;
//     const filter = {_id: plataforma._id}
//     var plataformaToUpdate = await Plataforma.findOneAndUpdate(filter, plataforma, {new: true})

//     try{                            
//         res.status(201).json(plataformaToUpdate)
            
//     }catch(error){
//         res.status(409).json({message: error.message})
//     }

// }