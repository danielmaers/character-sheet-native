const { Router } = require('express');
const { sendEpisodes } = require('../Controllers/episodeController');

const router = Router();

router.get("/",sendEpisodes)

module.exports= router