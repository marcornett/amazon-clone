const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)
require('dotenv').config()

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (request, response) => {
    response.send('Hello, world')
})

app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    // TODO: solve issue with stripe authorization token
    console.log('Request params:', request.params)
    console.log('Payment request received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency ($ => cents)
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })
})

exports.api = functions.https.onRequest(app)

// Example endpoint, brought for command in terminal: firebase emulators:start
// http://localhost:5001/clone-1a782/us-central1/api
