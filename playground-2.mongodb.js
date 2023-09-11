// Select the database to use.
use('sample_mflix');

// Get Collections
db.getCollection('movies')
db.getCollection('comments')
db.getCollection('sessions')
db.getCollection('theaters')
db.getCollection('users')

// Query 1. Get movies released in a certain year or later.

// db.movies.estimatedDocumentCount()
// db.movies.aggregate([
//     {$match: {year: {$lte: 1921}}},
//     {$project: {_id: 0, title: 1, genre: 1, year: 1, countries: 1, runtime: 1, languages: 1}},
// ])



// Query 2. Get list of theatres in a certain city.

// db.theaters.find(
//     {"location.address.city": "New York"},
//     {_id: 0, name: 1, state: 1, location: 1}
// )



// Query 3. Get movies with greater than or equal to rating n.

// db.movies.aggregate([{
//     $match: {"imdb.rating": {$gte: 8}}
// }])
// .projection({_id: 0, title: 1, genre: 1, year: 1, countries: 1, runtime: 1, languages: 1, "imdb.rating": 1})

// Query 4. Get all comments from one user.

// db.comments.aggregate([
//     {$match: {name: "Mace Tyrell"}},
//     {$project: {_id: 0, name: 1, text: 1, date: 1}}
// ])


// Query 5. Count comments for each user.

// db.comments.aggregate([
//     {
//         $group: {
//             _id: "$name",
//             count: {$sum: 1}
//         }
//     },
//     {$sort: {count: -1}},
// ])
// ------- failed attempt -------
    // {
    //     $lookup: {
    //         from: "users",
    //         localField: "_id",
    //         foreignField: "_id",
    //         as: "user"
    //     },
    // },
    // {
    //     $count: "_id"
    // },
    // {$group: {_id: "$user", count: {$sum: 1}}},
    // {$project: {_id: 0, name: 1, count: 1}},
    // {$sort: {count: -1}}