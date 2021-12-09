const Country = require("../models/Country.model");

const router = require("express").Router();

router.get("/country/:lat/:lon", (req, res, next) => {
    const {lat, lon} = req.params

    Country.create({lat, lon})
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

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
