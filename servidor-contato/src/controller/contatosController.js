const contatosCollection = require("../model/contatoSchema")

const getAll = (request, response) => {
 contatosCollection.find((error, contatos) => {
  if(error){
    return response.status(500).send(error)
  }else{
    return response.status(200).send(contatos)
  }
})
};

const getByName = (request, response) => {
  const nomeParam = request.params.nome
  const regex = new RegExp(nomeParam)
 // const filtro = {nome: nomeParam}
  const filtro = {nome: regex}
  contatosCollection.find(filtro, (error, contatos) =>{
    if(error){
      return response.status(404).send(error)
    }else{
      return response.status(200).send(contato)
    }
  })
}

const getById = (request, response) =>{
  const idParam = request.params.id
    contatosCollection.findById(idParam,(error, contato) => {
      if(error){
        return response.status(500).send(error)
      }else{
        if(contato){
        return response.status(200).send(contato)
      }else{
        return response.status(404).send('Contato não encontrado')
      }
      }
    })
}
const add = (request, response) => {
  const contatoDoBody = request.body
  const contato = new contatosCollection(contatoDoBody)

  contato.save((error) => {
    //if(error !=null && error != undefined)
    if(error){
      return response.status(400).send(error)
    }else{
      return response.status(201).send(contato)
    }
  
  })
}

const updateById = (request, response) => {
  const updateParam = request.params.id
  const updateBody = request.body
  const options = {new: true}
  // console.log(updateParam)
  contatosCollection.findByIdAndUpdate(updateParam, updateBody, options, (error, contato) => {
    if(error){
      return response.status(304).send(error)
    }else{
      if(contato){
        return response.status(200).send(contato)
      }else{
        return response.SendStatus(404)
      }
    }
  })
}

const deleteById = (request, response) => {
  const deletParam = request.params.id
  contatosCollection.findByIdAndDelete(deletParam, (error, contato) =>{
  if(error){
    return response.status(500).send(error)
  }else{
    if(contato){
    return response.status(200).send(contato)
  }else{
    return response.status(404).send('Contato não encontrado')
  }
  }
})
}

module.exports = {
  getAll,
 getByName,
 getById,
  add,
  deleteById,
  updateById
}
