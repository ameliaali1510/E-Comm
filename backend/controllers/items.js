const Game = require("../models/game");

const getGames = async (req, res) => {
    try {
        const items = await Game.find({});
        res.json({
            message: "All games",
            games: items
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

const getGame = async (req, res) => {
    try {
        const { id } = req.params;
        const game = await Game.findById(id);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

const createGame = async (req, res) => {
    try {
        const { name, price, image } = req.body;
        const gameObj = new Game({
            name,
            price,
            image
        });
        const newGame = await gameObj.save();
        res.status(200).json(newGame);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        const game = await Game.findByIdAndDelete(id);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

module.exports = {
    createGame,
    getGames,
    deleteGame,
    getGame
}
