import { db } from './firebase/db.js';

export const createMuscleGroup = async (muscleGroup) => {
    const muscleGroupRef = db.collection('muscleGroups').doc(muscleGroup.id);
    await muscleGroupRef.set(muscleGroup);
}

export const getMuscleGroup = async (id) => {
    const muscleGroupRef = db.collection('muscleGroups').doc(id);
    const muscleGroupSnap = await muscleGroupRef.get();

    if (muscleGroupSnap.exists) {
        return muscleGroupSnap.data();
    } else {
        return null;
    }
}

export const updateMuscleGroup = async (id, updates) => {
    const muscleGroupRef = db.collection('muscleGroups').doc(id);
    await muscleGroupRef.update(updates);
}

export const deleteMuscleGroup = async (id) => {
    const muscleGroupRef = db.collection('muscleGroups').doc(id);
    await muscleGroupRef.delete();
}
