const router = require("express").Router();
const Country = require("../models/Country.model");


router.post("/:city/wordlist", (req, res, next) => {
    let userId = req.session.loggedInUser._id
    let city = req.params
    let countryId=  ""
    console.log(userId)

            Country.find(city)
            .then((response)=> {
                let filteredArray = response.filter((elem)=> {
                    return elem.userId == userId
                })
                countryId = filteredArray[0]._id
                Country.findByIdAndUpdate(countryId,  {$push: {words:req.body}})
                .then((response)=> {
                    console.log(response)
                })  
            })
            .catch((err)=> {
                next(err)
            })
        
});

// router.get("/:city/wordlist", (req, res, next) => {
//     let userId = req.session.loggedInUser._id
//     let city = req.params

//             Country.find(city)
//             .then((response)=> {
//                 let filteredArray = response.filter((elem)=> {
//                     return elem.userId == userId
//                 })
//                 .then((response)=> {
//                     res.status(200).json(response)
//                 })  
//             })
//             .catch((err)=> {
//                 next(err)
//             })
        
// });

router.get("/:city/wordlist", (req, res, next) => {
    let userId = req.session.loggedInUser._id
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

    console.log("body", req.body)

            Country.find(city)
            .then((response)=> {
                let filteredArray = response.filter((elem)=> {
                    return elem.userId == userId
                })
                countryId = filteredArray[0]._id
                Country.findByIdAndUpdate(countryId,  {$set: {words:req.body}})
                .then((response)=> {
                    console.log("RESPONSE", response)
                })  
            })
            .catch((err)=> {
                next(err)
            })
        
});



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)r

module.exports = router;
