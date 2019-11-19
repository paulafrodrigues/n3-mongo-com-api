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

module.exports = {
  getAll,
  add
}
