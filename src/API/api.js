import axios from 'axios';
import { UserData } from './user.model';

const isApi = false;

async function fetchData(endpoint, userId) {
    const url = isApi ? `http://localhost:3000/user/${userId}${endpoint}` : '/userData.json';
    const res = await axios.get(url);
    
    return isApi ? res.data.data : res.data;
}

// export async function getUserData(userId) {
//     const res = await axios.get(isApi ? `http://localhost:3000/user/${userId}` : '/userData.json')
//     const data = res.data.data

//     console.log("Données reçues :", data);

//     const user = Array.isArray(data) ? data.find(user => user.id === parseInt(userId)) : data;

//     console.log("Utilisateur trouvé :", user);

//     if (!user) {
//         throw new Error(`User with ID ${userId} not found`);
//     }

//     return new UserData(
//         user.userInfos.firstName,
//         user.score || user.todayScore,
//         user.keyData.calorieCount,
//         user.keyData.proteinCount,
//         user.keyData.carbohydrateCount,
//         user.keyData.lipidCount
//     );
// }


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

// export async function getUserActivities(userId) {
//     const res = await axios.get(`http://localhost:3000/user/${userId}/activity`);
//     return res.data.data.sessions;
// }

export async function getUserActivities(userId) {
    const data = await fetchData('/activity', userId);
    return isApi ? data.sessions : data.USER_ACTIVITY.find(activity => activity.userId === parseInt(userId)).sessions;
}

// export async function getUserSessions(userId) {
//     const res = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
//     return res.data.data.sessions;
// }

export async function getUserSessions(userId) {
    const data = await fetchData('/average-sessions', userId);
    return isApi ? data.sessions : data.USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(userId)).sessions;
}

// export async function getUserPerformances(userId) {
//     const res = await axios.get(`http://localhost:3000/user/${userId}/performance`);
//     return res.data.data.data;
// }

export async function getUserPerformances(userId) {
    const data = await fetchData('/performance', userId);
    return isApi ? data.data : data.USER_PERFORMANCE.find(performance => performance.userId === parseInt(userId)).data;
}