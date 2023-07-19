import { db } from './firebase/db.js';

export const createSchedule = async (schedule) => {
    const scheduleRef = db.collection('schedules').doc(schedule.id);
    await scheduleRef.set(schedule);
}

export const getSchedule = async (id) => {
    const scheduleRef = db.collection('schedules').doc(id);
    const scheduleSnap = await scheduleRef.get();

    if (scheduleSnap.exists) {
        return scheduleSnap.data();
    } else {
        return null;
    }
}

export const updateSchedule = async (id, updates) => {
    const scheduleRef = db.collection('schedules').doc(id);
    await scheduleRef.update(updates);
}

export const deleteSchedule = async (id) => {
    const scheduleRef = db.collection('schedules').doc(id);
    await scheduleRef.delete();
}