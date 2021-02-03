import {Router} from 'express';

import Mural from '../models/mural.model';

const muralRouter = Router();

muralRouter.post ('/mural', async (req, res)=>{
  console.log(req.body)
  const mural = await Mural.create(req.body)

  const { name, message } = req.body



  return res.status(200).json({
    message: "Mensagem Criada com sucesso",
    data: {  message }
  })
});

muralRouter.get('/mural', async (req,res)=>{
  const mural = await Mural.find();

  return res.status(200).json({
    message:"Listagem de Conteúdo",
    mural
  });

});

muralRouter.delete('/mural', async (req,res)=>{
  const { id } = req.body;
  await Mural.findByIdAndDelete(id)
  return res.status(200).json({message: 'Deletado com Sucesso!'})
});

muralRouter.put('/mural', async(req,res)=>{
    
    const { id, message} = req.body;
    await Mural.updateOne({_id:id},{message})//FIltro pelo ID. e atualizar a nova mensagem
    const updateMessage = await Mural.findById(id)
    return res.status(200).json({message:"Mensagem Atualizada com Sucesso", updateMessage})
});


export default muralRouter;


  // console.log("parametros de URL", req.params.comida)
  // console.log("Parametros de query", req.query)
  // console.log("Corpo da requisicao", req.body)
  // console.log("Cabeçario da requisição", req.headers.authorization)