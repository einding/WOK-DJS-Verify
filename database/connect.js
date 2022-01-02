const FirebaseAdmin = require("firebase-admin");
FirebaseAdmin.initializeApp({ 
credential: FirebaseAdmin.credential.cert(require("./accountAccess.json"))
}, console.log(`Firebase');
module.exports.db = FirebaseAdmin.firestore();
