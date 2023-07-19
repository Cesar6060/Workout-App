import { db } from './firebase/db.js';

export const createIntensityLevel = async (intensityLevel) => {
    const intensityLevelRef = db.collection('intensityLevels').doc(intensityLevel.id);
    await intensityLevelRef.set(intensityLevel);
}

export const getIntensityLevel = async (id) => {
    const intensityLevelRef = db.collection('intensityLevels').doc(id);
    const intensityLevelSnap = await intensityLevelRef.get();

    if (intensityLevelSnap.exists) {
        return intensityLevelSnap.data();
    } else {
        return null;
    }
}

export const updateIntensityLevel = async (id, updates) => {
    const intensityLevelRef = db.collection('intensityLevels').doc(id);
    await intensityLevelRef.update(updates);
}

export const deleteIntensityLevel = async (id) => {
    const intensityLevelRef = db.collection('intensityLevels').doc(id);
    await intensityLevelRef.delete();
}
