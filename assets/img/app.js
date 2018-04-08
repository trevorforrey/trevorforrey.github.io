var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyD4DmO_AQLFoLo-BteDSRr38uluBL0hsXk",
  authDomain: "etchasketch-11c91.firebaseapp.com",
  databaseURL: "https://etchasketch-11c91.firebaseio.com",
  projectId: "etchasketch-11c91",
  storageBucket: "etchasketch-11c91.appspot.com",
  messagingSenderId: "445914375130"
};
firebase.initializeApp(config);

let database = firebase.database();
console.log("up and running");

function exampleWrite(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

function exampleRead(userId) {
  return firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
    console.log('snap value: ' + snapshot.val() + ' , email: ' + snapshot.val().email);
  });
}

exampleWrite(007, 'Trevor', 'hello@gmail.com');
exampleRead(007);
exampleWrite(007, 'Trevor', 'goodbye@gmail.com');

let topRef = firebase.database().ref("/drawBoard/topLeft");
topRef.on("value", function(snapshot) {
  let newColor = snapshot.val();
  document.getElementById('topLeft').setAttribute('style', 'background-color: ' + newColor + ';');
});
