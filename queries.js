/* Add all the required libraries*/
//var fs = require('fs'),
    mongoose = require('mongoose');
    Schema = mongoose.Schema;
    Listing = require('./ListingSchema.js');
    config = require('./config.js');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
//mongoose.set('useFindAndModify', false);

var findLibraryWest = function() {
    //findOne function
    Listing.findOne({ 'name': 'Library West' }, function (err, data) {
        if (err) {
            return handleError(err);
        }
        console.log(data);
    });

};
var removeCable = function() {
    Listing.findOneAndRemove({ 'code': 'CABL' }, function (err, data) {
        if (err){
            return handleError(err);
        }
        console.log(data);
    });
};
var updatePhelpsMemorial = function() {
    //I hope this is the correct address we are supposed to use.
    Listing.findOneAndUpdate({'name': 'Phelps Laboratory'}, { 'address': '1953 Museum Rd, Gainesville, FL 32603' }, function (err, data) {
    });
    Listing.findOne({ 'name': 'Phelps Laboratory'}, function (err, data) {
    });
};
var retrieveAllListings = function() {
    //empty brackets mean all listings
    Listing.find({},function(err,data){
        console.log(data);
    });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();