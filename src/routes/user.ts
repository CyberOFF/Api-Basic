import {Router} from 'express';

import Mural from '../models/mural.model';

const muralRouter = Router();

muralRouter.post ('/mural', async (req,res)=>{
  const mural = await Mural.create(req.body)
  return res.send({mural})
});

muralRouter.get('/mural', async (req,res)=>{
  const mural = await Mural.find()
  return res.send({mural})
});

muralRouter.delete('/mural', async (req,res)=>{
  const { id } = req.body;
  await Mural.findByIdAndDelete(id)
  return res.send({message: 'Deletado com Sucesso!'})
});

muralRouter.put('/mural', async(req,res)=>{
    const { id, message} = req.body;
    await Mural.updateOne({_id:id},{message})//FIltro pelo ID. e atualizar a nova mensagem
    const updateMessage = await Mural.findById(id)
    return res.send({updateMessage})
});


export default muralRouter;
