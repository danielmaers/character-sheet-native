const { Router } = require('express');
const {getCharacters, getCharacterById, createCharacter} = require("../Controllers/characterController")

const router = Router();

router.get("/",getCharacters)

router.get("/:id",getCharacterById)

router.post("/",createCharacter)




module.exports= router