const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const Stripe = require('stripe')
require('dotenv').config()
const stripe = Stripe(process.env.STRIPE_SECRETKEY,{
    
})

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (request, response) => {
    response.send('Hello, world')
})

app.post('/payments/create', async (request, response) => {
    const total = request.query.total    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency ($ => ¢)
        currency: "usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)

// Example endpoint, brought for command in terminal: firebase emulators:start
// http://localhost:5001/clone-1a782/us-central1/api
