const router = require("express").Router();
const Country = require("../models/Country.model");

router.get("/:country/:city/:lat/:lon/details", (req, res, next) => {
        let {country, city, lat, lon} = req.params
    
    Country.findOne({city})
    .then((response)=> {
        res.status(200).json(response)
    })
    .catch((err)=> {
        next(err)
    })
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
