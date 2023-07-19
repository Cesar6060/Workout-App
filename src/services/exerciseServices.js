import { db } from './firebase/db.js';

export const createExercise = async (exercise) => {
    const exerciseRef = db.collection('exercises').doc(exercise.id);
    await exerciseRef.set(exercise);
}

export const getExercise = async (id) => {
    const exerciseRef = db.collection('exercises').doc(id);
    const exerciseSnap = await exerciseRef.get();

    if (exerciseSnap.exists) {
        return exerciseSnap.data();
    } else {
        return null;
    }
}

export const updateExercise = async (id, updates) => {
    const exerciseRef = db.collection('exercises').doc(id);
    await exerciseRef.update(updates);
}

export const deleteExercise = async (id) => {
    const exerciseRef = db.collection('exercises').doc(id);
    await exerciseRef.delete();
}
