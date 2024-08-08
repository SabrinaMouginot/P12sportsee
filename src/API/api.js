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

// export async function getUserActivities(userId) {
//     const data = await fetchData('/activity', userId);
//     const activity = Array.isArray(data.USER_ACTIVITY) ? data.USER_ACTIVITY.find(user => user.userId === parseInt(userId)) : data;

//     if (!activity) {
//         throw new Error(`Activities for user with ID ${userId} not found`);
//     }

//     // Utilisation temporaire pour tester
//     const sessions = activity.sessions;
//     const mappedSessions = sessions.map(session => {
//         return new UserActivity(
//             session.day,
//             session.kilogram,
//             session.calories
//         );
//     });

//     return mappedSessions;  // retourne le tableau final
// }

export async function getUserActivities(userId) {
    const data = await fetchData('/activity', userId);
    
    // Trouver les activités pour l'utilisateur spécifique
    const activity = Array.isArray(data.USER_ACTIVITY) 
        ? data.USER_ACTIVITY.find(user => user.userId === parseInt(userId)) 
        : data;

    if (!activity) {
        throw new Error(`Activities for user with ID ${userId} not found`);
    }

    // Créer une instance de UserActivity avec toutes les sessions
    const userActivity = new UserActivity(activity.sessions);

    // Si ton graphique attend un tableau de sessions, retourne simplement userActivity.sessions
    return userActivity.sessions;
}


export async function getUserSessions(userId) {
    const data = await fetchData('/average-sessions', userId);
    return isApi ? data.sessions : data.USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(userId)).sessions;
}

export async function getUserPerformances(userId) {
    const data = await fetchData('/performance', userId);
    return isApi ? data.data : data.USER_PERFORMANCE.find(performance => performance.userId === parseInt(userId)).data;
}