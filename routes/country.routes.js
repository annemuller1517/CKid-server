

const router = require("express").Router();
const Country = require("../models/Country.model");
const UserModel = require("../models/User.model");


router.post("/country", (req, res, next) => {
    console.log("heeyy")
    const {country, city, lat, lon} = req.body
    let userId = req.session.loggedInUser._id

    Country.create({userId, country, city, lat, lon})
    .then((response) => {
        res.status(200).json(response)
   })
   .catch((err) => {
        res.status(500).json({
             error: 'Something went wrong',
             message: err
        })
   })  


  
});



// UserModel
// .findOne({_id: userId })
// .populate("placesVisited") // key to populate
// .then(user => {
//    res.json(user); 
// });


// --> populate when you want the list of all the countries 


// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
