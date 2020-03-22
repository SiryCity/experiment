const functions = require('firebase-functions');
const nuxtServer = require('./nuxt-server');

exports.nuxtServer = functions.https.onRequest(nuxtServer)