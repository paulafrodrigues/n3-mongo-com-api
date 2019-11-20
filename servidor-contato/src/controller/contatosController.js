const contatosColletction = require("../model/contatoSchema")

const getAll = (request, response) => {
  
 // response.status(200).send(contatosCollection.agenda)
 contatosColletction.find((error, contatos) => {
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
  contatosColletction.find(filtro, (error, contatos) =>{
    if(error){
      return response.status(404).send(error)
    }else{
      return response.status(200).send(contato)
    }
  })
}

const getById = (request, response) =>{
  const idParam = request.params.id
    contatosColletction.findById(idParam,(error, contato) => {
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
  const contato = new contatosColletction(contatoDoBody)

  contato.save((error) => {
    //if(error !=null && error != undefined)
    if(error){
      return response.status(400).send(error)
    }else{
      return response.status(201).send(contato)
    }
  
  })
}

const deleteById = (request, response) =>{
  const deletParam = request.params.id
  contatosColletction.findByIdAndDelete(deletParam, (error, contato) =>{
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
  deleteById
}
