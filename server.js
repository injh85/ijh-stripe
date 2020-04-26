// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const ejs = require("ejs");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.json());

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs');

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  //response.sendFile(__dirname + "/views/index.html");
  response.render(__dirname + '/views/index');
});

// Homepage
app.get("/index.html", (request, response) => {
  response.render(__dirname + '/views/index');
});

// Checkout Form
app.get("/checkout.html", async (request, response) => {
  let pk = process.env.STRIPE_PUBLISHABLE_KEY;
  let amount = request.query.amount;
  let currency = request.query.currency;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    // Verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'}
  });
  
  ejs.renderFile(__dirname + '/views/checkout.ejs', {stripe_publishable_key: pk, stripe_client_secret: paymentIntent.client_secret}, {}, function(err, str){
      // str => Rendered HTML string
     if (err) {
      console.log(err);
     } else {
      console.log(str);
     }
    response.send(str);
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});