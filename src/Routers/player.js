const express = require("express");
const PlayerRanking = require("../Models/playersSchema");
const router = new express.Router();

//create record through front end or postman following the schema and model
router.post("/players", async(req, res)=>{
    try{
        const newPlayer = new PlayerRanking(req.body);
        //console.log(newPlayer);
        const addRecord = await newPlayer.save();
        res.send(addRecord);
    }catch(error){
        console.error(error);
        res.status(400).send(error);
    }
})
//read/get the whole collection
router.get("/players", async(req, res)=>{
    try{
        const players = await PlayerRanking.find({}).sort({ranking: 1});
        //console.log(players);
        res.send(players);
    }catch(error){
        res.status(400).send(error);
    }
})
//get/read single player data
router.get("/players/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
        const player = await PlayerRanking.findById(_id);
        //console.log(player);
        res.send(player);
    }catch(error){
        res.status(400).send(error);
    }
})
//to update any section of data
router.patch("/players/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedPlayer = await PlayerRanking.findByIdAndUpdate(
            _id,
            req.body,
            { new: true }
        );

        if (!updatedPlayer) {
            //console.log("Player not found");
            return res.status(404).send("Player not found");
        }

        //console.log("Updated player:", updatedPlayer);
        res.send(updatedPlayer);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
})

//to delete data
router.delete("/players/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
        const player = await PlayerRanking.findByIdAndDelete(_id);
        //console.log(player);
        res.send(player);
    }catch(error){
        res.status(400).send(error);
    }
})

module.exports = router;