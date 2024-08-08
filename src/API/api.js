import axios from 'axios';
import { UserData, UserActivity } from './user.model';

const isApi = false;

async function fetchData(endpoint, userId) {
    const url = isApi ? `http://localhost:3000/user/${userId}${endpoint}` : '/userData.json';
    const res = await axios.get(url);
    
    return isApi ? res.data.data : res.data;
}

export async function getUserData(userId) {
    const data = await fetchData('', userId);
    const user = Array.isArray(data.USER_MAIN_DATA) ? data.USER_MAIN_DATA.find(user => user.id === parseInt(userId)) : data;
    
    if (!user) {
        throw new Error(`User with ID ${userId} not found`);
    }

    return new UserData(
        user.userInfos.firstName,
        user.score || user.todayScore,
        user.keyData.calorieCount,
        user.keyData.proteinCount,
        user.keyData.carbohydrateCount,
        user.keyData.lipidCount
    );
}

export async function getUserActivities(userId) {
    const data = await fetchData('/activity', userId);

    const activity = Array.isArray(data.USER_ACTIVITY) ? data.USER_ACTIVITY.find(user => user.id === parseInt(userId)) : data;

    if (!activity) {
        throw new Error(`User with ID ${userId} not found`);
    }

    return new UserActivity(
        activity.sessions.day,
        activity.sessions.kilogram,
        activity.sessions.calories
    )
    // return isApi ? data.sessions : data.USER_ACTIVITY.find(activity => activity.userId === parseInt(userId)).sessions;
}

export async function getUserSessions(userId) {
    const data = await fetchData('/average-sessions', userId);
    return isApi ? data.sessions : data.USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(userId)).sessions;
}

export async function getUserPerformances(userId) {
    const data = await fetchData('/performance', userId);
    return isApi ? data.data : data.USER_PERFORMANCE.find(performance => performance.userId === parseInt(userId)).data;
}