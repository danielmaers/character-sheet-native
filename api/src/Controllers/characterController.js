const axios = require("axios")
const URL="https://rickandmortyapi.com/api/"
const {Characters, Episodes} = require("../db")



async function getCharacters (req, res){
    try {
        let characters= (await axios.get(`${URL}character`)).data.results
        .map(e=>{
            return {
                id: e.id,
                name: e.name,
                status: e.status,
                species: e.species,
                image: e.image,
                episode: e.episode
            }
        })

        let dbCharacters= (await Characters.findAll()).concat(characters)
        //console.log("dbCharacters",dbCharacters)
        res.send(dbCharacters)
        
    } catch (error) {
        console.log(error)
    }
}

function getCharacterById(req, res){
    
    const {id} = req.params
    axios.get(`${URL}character/${id}`)
    .then(response=>{
        let character={
                        id: response.data.id,
                        name: response.data.name,
                        status: response.data.status,
                        species: response.data.species,
                        image: response.data.image,
                        episode: response.data.episode
                    }
        

        res.send(character)
    })
    .catch(error=> console.log(error))
    
    
}

function createCharacter(req, res, next){
    const {name, status, species, img, episode}= req.body
    let character={name, status, species, img}
    Characters.create(character)
    .then(resp=> {
        resp.addEpisodes(episode)
        res.send("Personaje creado essitossamente")
    })    
    .catch(error=> console.log(error))
}



module.exports= {
    getCharacters,
    getCharacterById,
    createCharacter
}