var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://wheelie:bskS2YknzNzI4Auu@wheelie0-shard-00-00-dmwmz.mongodb.net:27017,wheelie0-shard-00-01-dmwmz.mongodb.net:27017,wheelie0-shard-00-02-dmwmz.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Wheelie0-shard-0&authSource=admin');

var Product = require('./model/product');
var WishList = require('./model/wishlist');

app.use(cors());

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(request, response) {
    var product = new Product();
    product.make = request.body.make;
    product.model = request.body.model;
    product.year = request.body.year;
    product.transmission = request.body.transmission;
    product.odometer = request.body.odometer;
    product.startingprice = request.body.startingprice;
    product.reserve = request.body.reserve;
    product.endsin = request.body.endsin;
    product.primarycolour = request.body.primarycolour;
    product.interiorcolour = request.body.interiorcolour;
    product.writtenoff = request.body.writtenoff;
    product.plateno = request.body.plateno;
    product.regoexpirymonth = request.body.regoexpirymonth;
    product.regoexpiryyear = request.body.regoexpiryyear;
    product.soldwithroadworthy = request.body.soldwithroadworthy;
    product.vinno = request.body.vinno;
    product.contactno = request.body.contactno;
    product.producttitle = request.body.producttitle;
    product.productdesc = request.body.productdesc;
    
    console.log(product);
    product.save(function(err, savedProduct) {
       if (err) {
           response.status(500).send({error:"Could not save product"});
       } else {
           response.send(savedProduct);
       }
    });
});

app.get('/product', function(request, response) {

    Product.find({},function(err, products) {
        if (err) {
            response.status(500).send({error: "Could not fetch products"});
        } else {
            response.send(products);
        }
    });
});

app.post('/profile', function(request, response) {
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedProduct) {
       if (err) {
           response.status(500).send({error:"Could not save product"});
       } else {
           response.send(savedProduct);
       }
    });
});

app.get('/profile', function(request, response) {

    Product.find({},function(err, products) {
        if (err) {
            response.status(500).send({error: "Could not fetch products"});
        } else {
            response.send(products);
        }
    });
});

app.get('/wishlist', function(request, response) {
   WishList.find({}).populate({path:'products', model: 'Product'}).exec(function(err, wishLists) {
       if (err) {
           response.status(500).send({error:"Could not fetch wishlists"});
       } else {
           response.status(200).send(wishLists);
       }
   })
});

app.post('/wishlist', function(request, response) {
    var wishList = new WishList();
    wishList.title = request.body.title;

    wishList.save(function(err, newWishList) {
       if (err) {
           response.status(500).send({error: "Could not create wishlist"});
       } else {
           response.send(newWishList);
       }
    });
});

app.put('/wishlist/product/add', function(request, response) {
   Product.findOne({_id: request.body.productId}, function(err, product) {
       if (err) {
           response.status(500).send({error:"Could not add item to wishlist"});
       } else {
           WishList.update({_id:request.body.wishListId}, {$addToSet:{products: product._id}}, function(err, wishList) {
               if (err) {
                   response.status(500).send({error:"Could not add item to wishlist"});
               } else {
                   response.send("Successfully added to wishlist");
               }
           });
       }
   })
});

app.listen(3004, function() {
    console.log("Wheelie API running on port 3004...");
});