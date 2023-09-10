// Select the database to use.
use('sample_guides');

// get collection
db.getCollection('planets')
// db.planets.find().sort({orderFromSun: 1})

// Query 1. Get planets with a specific mainAtmosphere

// db.planets.find(
//     {mainAtmosphere: "CH4"},
//     {name: 1, mainAtmosphere: 1}
// )

// Query 2. Get planets with min/max temperature

// db.planets.find(
//     {"surfaceTemperatureC.min": {$ne: null}, "surfaceTemperatureC.max": {$ne: null}},
//     {name: 1, surfaceTemperatureC: 1}
// )

// Query 3. Get planets whose orderFromSun is greater than or equals to n. Ordered by orderFromSun

// db.planets.find(
//     {orderFromSun: {$gte: 5}},
//     {name: 1, orderFromSun: 1}
// ).sort({orderFromSun: 1}) // ASC
// .sort({orderFromSun: -1}) == DESC


// Query 4. Get planets that start on M and have max temperature lower than 50C

// db.planets.find(
//     {name: /^M/, "surfaceTemperatureC.max": {$lt: 50}},
//     {name: 1, surfaceTemperatureC: 1}
// )


// Query 5. Get planets that have rings, orderFromSun is greater than n and have mean temperature lower than -139C but greater than -150C. Ordered by orderFromSun

// db.planets.find(
//     {hasRings: true, orderFromSun: {$gt: 3}, "surfaceTemperatureC.mean": {$gt: -150, $lt: -139}},
//     {name: 1, hasRings: 1, orderFromSun: 1, "surfaceTemperatureC.mean": 1}
// ).sort({orderFromSun: 1}) // ASC