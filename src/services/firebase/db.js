// // Import Firebase
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// // Initialize Firestore
// const db = firebase.firestore();

// // Function to create a new user
// const createUser = async (id, name, email) => {
//     await db.collection('users').doc(id).set({
//         id,
//         name,
//         email,
//         workoutPlans: []
//     });
// }

// // Function to create a new workout plan
// const createWorkoutPlan = async (id, name, exercises, intensity, schedule, user) => {
//     await db.collection('workoutPlans').doc(id).set({
//         id,
//         name,
//         exercises,
//         intensity,
//         schedule,
//         user
//     });

//     // Add the workout plan to the user's workoutPlans array
//     const userDoc = db.collection('users').doc(user);
//     userDoc.update({
//         workoutPlans: firebase.firestore.FieldValue.arrayUnion(id)
//     });
// }

