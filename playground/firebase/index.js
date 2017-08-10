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

  let notesRef = firebaseRef.child('notes');

  notesRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
  });
  notesRef.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
  });
  notesRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
  });

  let newNoteRef = notesRef.push({
    text: 'Walk the dog!'
  });
  console.log('Todo id', newNoteRef.key);

  let todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
  });

  todosRef.push({
    text: 'Todo 1'
  });
  todosRef.push({
    text: 'Todo 2'
  });
