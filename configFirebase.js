var admin = require("firebase-admin");

var serviceAccount = require("./voicewaves-169ab-firebase-adminsdk-knrfw-8550bc1fc6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.auth = admin.auth();