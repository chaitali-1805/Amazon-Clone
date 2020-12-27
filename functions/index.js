const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51I0ZukBacOkbaJJMg6a7f4PR3T5n2TdZY4V9Iz9cf8pNiXEP3SVnqbco04WBn5xLOeZ8dL3LEImdvaugcOzcIB2N00IbavGNiI"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        description: 'Customer Overseas Order',
        shipping: {
            name: 'Hello customer',
            address: {
                line1: '400 rosy street',
                postal_code: '75001',
                city: 'Paris',
                state: 'Paris',
                country: 'France',
            },
        },
        payment_method_types: ['card'],
        amount: total, // subunits of the currency
        currency: "usd",

    });


    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //     type: 'card',
    //     card: cardElement,
    // });

    // if (error) {
    //     console.log('[error]', error);
    // } else {
    //     console.log('[PaymentMethod]', paymentMethod);
    // }

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);



// Example endpoint
// http://localhost:5001/clone-6a438/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
