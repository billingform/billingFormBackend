export const firebase = require('firebase');
firebase.initializeApp({
    projectId: 'report-3012b'
})

export const db = firebase.firestore();