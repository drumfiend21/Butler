'use strict';
var router = require('express').Router();
module.exports = router;
var crypto = require('crypto');
var mongoose = require('mongoose');
var textSearch = require('mongoose-text-search');
var fs = require('fs')

var _ = require('lodash');
var body = require('body-parser');
var mongoose = require('mongoose');
var Promise = require('bluebird');

var PhotoModel = mongoose.model('Photo');

var createPhotoPath = function (userId) {
    var hash = crypto.createHash('sha1');
    hash.update(userId);
    hash.update(Date.now().toString());
    return './'+hash.digest('hex')+'.png';
};

router.post('/', function (req, res) {
    
    console.log("photo post route was hit")

    //convert photo dataUrl to Buffer
    var imageStringBase64 = req.body.url.split(',')[1];
    var imageFile = new Buffer(imageStringBase64, 'base64');
    // console.log(imageFile);


    //call createPhotoName(userId)
    var photoPath = createPhotoPath("Siddharth")
    
    //save photo to server file system
    fs.writeFile(photoPath, imageFile, function (err) {
        if (err) console.error(err);
    
        var newPhoto = new PhotoModel();
        newPhoto.path = photoPath
        newPhoto.dominant_color = req.body.dominant_color 
        newPhoto.secondary_colors = req.body.secondary_colors

        //save photo document to database
        newPhoto.save(function(err, photo) {
            console.log("save worked", photo);
            res.sendStatus(200);
        })
    })

    // create new photo document and set props from req body
});




router.get('/photos', function (req, res) {

    var modelParams = {};

    // if (req.query.category) {
    //     modelParams.category = req.query.category;
    // }

    PhotoModel.find(modelParams).then(function (photos) {

        res.send(photos);

    }, function(err){

    });

});