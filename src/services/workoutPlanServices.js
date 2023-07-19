import { db } from './firebase/db.js';

export const createWorkoutPlan = async (workoutPlan) => {
    const workoutPlanRef = db.collection('workoutPlans').doc(workoutPlan.id);
    await workoutPlanRef.set(workoutPlan);
}

export const getWorkoutPlan = async (id) => {
    const workoutPlanRef = db.collection('workoutPlans').doc(id);
    const workoutPlanSnap = await workoutPlanRef.get();

    if (workoutPlanSnap.exists) {
        return workoutPlanSnap.data();
    } else {
        return null;
    }
}

export const updateWorkoutPlan = async (id, updates) => {
    const workoutPlanRef = db.collection('workoutPlans').doc(id);
    await workoutPlanRef.update(updates);
}

export const deleteWorkoutPlan = async (id) => {
    const workoutPlanRef = db.collection('workoutPlans').doc(id);
    await workoutPlanRef.delete();
}
