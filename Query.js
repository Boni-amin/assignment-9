use('pixel')
db.createCollection('Admin');

db.Admin.drop();
db.Admin.insertOne({
    "name":"Aurnobb",
    "position":"HA",
    "_id":"jfhsagfjnsbf"

});
db.deleteOne({
    "_id":ObjectId("jfhsagfjnsbf")
});