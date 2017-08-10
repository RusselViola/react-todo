import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

  let firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Russel',
      age: 29
    }
  });

  firebaseRef.child('user').on('value', (snapshot) => {
    console.log('User ref changed', snapshot.val());
  });

  firebaseRef.child('user').update({name: 'Mike'});

  firebaseRef.child('app').update({name: 'Something else'});
