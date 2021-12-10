const router = require("express").Router();
const Words = require("../models/Words.model");
const Country = require("../models/Country.model");


router.post("/:city/wordlist", (req, res, next) => {
    let userId = req.session.loggedInUser._id
    let city = req.params

    
    //     req.body.map((elem)=> {
    //         Country.updateOne({city:city}, { $push: { words: elem } })
    //         .then((country)=> {
    //             console.log("eheyye")
    //         })
    //         .catch((err)=> {
    //             next(err)
    //         })
    // })
 
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
