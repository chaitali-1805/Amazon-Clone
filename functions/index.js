const functions = require('firebase-functions');
const express = require("express");
const cos = require("cors");
const stripe = require("stripe")('sk_test_51I0ZukBacOkbaJJMg6a7f4PR3T5n2TdZY4V9Iz9cf8pNiXEP3SVnqbco04WBn5xLOeZ8dL3LEImdvaugcOzcIB2N00IbavGNiI')

//API

//App config
const app = express();


// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => res.status(200).send('hello world'))

// Listen command
exports.api = functions.https.onRequest(app)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
