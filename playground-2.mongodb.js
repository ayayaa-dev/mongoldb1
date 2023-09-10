// Select the database to use.
use('sample_mflix');

// Get Collections
db.getCollection('comments')
db.getCollection('movies')
db.getCollection('sessions')
db.getCollection('theaters')
db.getCollection('users')

// Query 1. Get movies released in a certain year or later.

db.movies.estimatedDocumentCount()
// db.movies.find(
//     {year: {$gte: 1999}},
//     {_id: 1, title: 1, genre: 1, year: 1, countries: 1, runtime: 1, languages: 1}
// )

// Query 2. Get list of theatres in a certain city.
// Query 3. Get movies with greater than or equal to rating n.
// Query 4. Get user with a session.
// Query 5. Count comments for each user.