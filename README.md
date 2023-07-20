# **Workout-App 🏋️‍♂️**

This is a workout planning application built with React.js, Firebase for user authentication, and Wger for workout data. It allows users to create a weekly workout plan and schedule their exercises for different muscle groups.


## **Prerequisites 📋**

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of Node.js and NPM
* You have a Windows/Linux/Mac machine


## **Libraries and APIs Used 📚**
* React.js - JavaScript library for building user interfaces
* React Router - Standard routing library for React
* React Bootstrap - Bootstrap 4 components for React
* Axios - Promise-based HTTP client for the browser and Node.js
* Firebase - Platform developed by Google for creating mobile and web applications
* Wger API - Open source web application that manages and tracks/logs your exercises and personal workouts, weight and diet plans

## **Getting Started 🚀**
To get a local copy of this project up and running, follow these steps:

1. **Clone the repository:**

`git clone https://github.com/Cesar6060/my-workout-app.git`

2. **Navigate into the cloned repository:**

`cd my-workout-app`

3. **Install the project dependencies:**

`npm install`

## **Configuration**

## **Configuration 🛠️**

Before you start the application, you'll need to set up Firebase and configure your environment:

1. **Create a Firebase project:**

    * Go to the Firebase Console (https://console.firebase.google.com/) and create a new project.
    * Enable the necessary Firebase services (Authentication, Firestore, Analytics, etc.) based on your app's requirements.
    * Obtain your Firebase configuration values (apiKey, authDomain, projectId, etc.) from the Firebase project settings.

2. **Set up Firestore Database:**

    * In your Firebase Console, navigate to Firestore Database and create a new database.
    * Start in test mode so you can read and write from the database during development.
    * Choose a location for your Cloud Firestore data.

3. **Set up Firebase configuration:**

    * Rename the .env.example file in the project root directory to .env.
    * Open the .env file and replace the placeholder values with your Firebase configuration values.



## **Starting The Application**

 To start the application, run the following command in the project directory:

`npm start`

The app should open in a new browser tab. If it doesn't, visit http://localhost:3000.

