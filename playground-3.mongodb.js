// Select database
use('sample_supplies');

db.getCollection('sales')
// db.sales.find()

// Query 1. Get all sales bought "In Store"
db.sales.find(
    { purchaseMethod: 'In store', items: { $exists: true } },
    { _id: 0, saleDate: 1, storeLocation: 1, purchaseMethod: 1, items: 1 }
)


// Query 2. Get sales made by Males over 50 years old
db.sales.find(
    {  'customer.gender': 'M', 'customer.age': { $gt: 50 } },
    { _id: 0, saleDate: 1, storeLocation: 1, purchaseMethod: 1, items: 1 , 'customer.gender': 1, 'customer.age': 1}
)