const router = require("express").Router();
const Country = require("../models/Country.model");


router.post("/:city/wordlist", (req, res, next) => {
    let userId = req.session.loggedInUser._id
    let city = req.params
    let countryId=  ""

    if (!req.body[0].word.length|| !req.body[0].translation) {
        res.status(500)
          .json({
            error: 'Please enter a word and translation'
          });
        return;  
    }

            Country.find(city)
            .then((response)=> {
                let filteredArray = response.filter((elem)=> {
                    return elem.userId == userId
                })
                countryId = filteredArray[0]._id
                Country.findByIdAndUpdate(countryId,  {$push: {words:req.body}})
                .then((response)=> {
                    res.status(200).json(response)
                })  
            })
            .catch((err)=> {
                next(err)
            })
        
});


router.get("/:city/wordlist", (req, res, next) => {

    let city = req.params

            Country.find(city)
            .then((response)=> {
                res.status(200).json(response)
            })
            .catch((err)=> {
                next(err)
            })
        
});


router.patch("/:city/wordlist", (req, res, next) => {
    let userId = req.session.loggedInUser._id
    let city = req.params
    let countryId=  ""

            Country.find(city)
            .then((response)=> {
                let filteredArray = response.filter((elem)=> {
                    return elem.userId == userId
                })
                countryId = filteredArray[0]._id
                Country.findByIdAndUpdate(countryId,  {$set: {words:req.body}})
                .then((response)=> {
                    res.status(200).json(response)
                })  
            })
            .catch((err)=> {
                next(err)
            })
        
});

module.exports = router;
