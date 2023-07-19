import { db } from './firebase/db.js';

export const createUser = async (user) => {
    const userRef = db.collection('users').doc(user.id);
    await userRef.set(user);
}

export const getUser = async (id) => {
    const userRef = db.collection('users').doc(id);
    const userSnap = await userRef.get();

    if (userSnap.exists) {
        return userSnap.data();
    } else {
        return null;
    }
}

export const updateUser = async (id, updates) => {
    const userRef = db.collection('users').doc(id);
    await userRef.update(updates);
}

export const deleteUser = async (id) => {
    const userRef = db.collection('users').doc(id);
    await userRef.delete();
}
