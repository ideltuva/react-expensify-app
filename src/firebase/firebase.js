import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };





// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses').push({
//             description: 'Apple',
//             amount: 1095,
//             note: 'Started living heatlhy',
//             createdAt: moment(0).subtract(4, 'days').valueOf()
// });


// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Gum',
//     amount: 120095,
//     note: 'Orbit gum',
//     createdAt: moment(0).subtract(7, 'days').valueOf()    
// });

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'Gum',
//         amount: 120095,
//         note: 'Orbit gum',
//         createdAt: moment(0).add(2, 'days').valueOf()    
//     });
// }, 3500);


// database.ref('notes/-MIA6vUCLvBbHXw37_Vz').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React & Angular'
// });

// const firebaseNotes = {
//     notes: {
//         dassanda: {
//             title: 'First note',
//             body: 'This is my note'
//         }, 
//         das12211sanda: {
//             title: 'Second note',
//             body: 'This is my note'
//         }       
//     }
// };

// const notes = [{
//     id: '12', 
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '13', 
//     title: 'Second note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);



// database.ref().on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// });

// setTimeout(() => {
//     database.ref('job/title').set('Manager');
// }, 3500);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });




// database.ref().set({
//     name: 'Ignas Deltuva', 
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Vilnius',
//         country: 'Lithuania'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// // database.ref('isSingle').set(null);

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Kursenai'
// });

// const adaRef = database.ref('isSingle');
// adaRef.remove()
//     .then(() => {
//         console.log('Remove succeeded.');
//     }).catch((e) => {
//         console.log('Remove failed.', e);
//     });
