export const firebase = require('firebase');
firebase.initializeApp({
    projectId: 'a-billing-form'
})

export const db = firebase.firestore();