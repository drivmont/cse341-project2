const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const result = await mongodb.getDatabase().db().collection('pokemon').find();
    result.toArray().then((pokemon) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pokemon);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const pokemonId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('pokemon').find({ _id: pokemonId });
    result.toArray().then((pokemon) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pokemon[0]);
    });
};

const createPokemon = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const pokemon = {
        color: req.body.color,
        name: req.body.name,
        region: req.body.region,
        size: req.body.size,
        strength: req.body.strength,
        type: req.body.type,
        weakness: req.body.weakness
        
    };
    const response = await mongodb.getDatabase().db().collection('pokemon').insertOne(pokemon);
    if (response.acknowledged > 0) {
        res.status(204).send();        
    }
    else {
        res.status(500).json(response.error || 'Some error occurred while updating the pokemon.');
    }
};

const updatePokemon = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const pokemonId = new ObjectId(req.params.id);
    const pokemon = {
        color: req.body.color,
        name: req.body.name,
        region: req.body.region,
        size: req.body.size,
        strength: req.body.strength,
        type: req.body.type,
        weakness: req.body.weakness
    };
    const response = await mongodb.getDatabase().db().collection('pokemon').replaceOne({ _id: pokemonId}, pokemon);
    if (response.modifiedCount > 0) {
        res.status(204).send();        
    }
    else {
        res.status(500).json(response.error || 'Some error occurred while updating the pokemon.');
    }
};

const deletePokemon = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const pokemonId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('pokemon').deleteOne({ _id: pokemonId});
    if (response.deletedCount > 0) {
        res.status(204).send();        
    }
    else {
        res.status(500).json(response.error || 'Some error occurred while updating the pokemon.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createPokemon,
    updatePokemon,
    deletePokemon
}