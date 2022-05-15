const axios = require("axios")
const { response } = require("express")
const {Episodes} = require("../db")



async function getEpisodes(req, res, next){
    try {
        let episodes= (await axios("https://rickandmortyapi.com/api/episode")).data.results
        .map(e=>{
            return {
                 id: e.id,
                name: e.name
            }})
       return episodes     
    } catch (error) {
        next(error)
    }
}


async function sendEpisodes(req, res, next){

    try {
        let episodes= await Episodes.findAll()
        res.send(episodes)        
    } catch (error) {
        next(error)
    }

}


async function chargeEpisodes(){
    let episodes=await getEpisodes()
return Episodes.bulkCreate(episodes)
        .then(response=> console.log("episodios cargados"))
        .catch(error=> console.log(error))

}




module.exports= {
    getEpisodes,
    chargeEpisodes,
    sendEpisodes
}