import axios from 'axios';
import { UserData } from './user.model';
import { UserActivity } from './activity.model';
import { UserSession } from './session.model';
import { UserPerformance } from './performance.model';

const isApi = true;

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

    // Trouver les activités pour l'utilisateur spécifique
    const activity = Array.isArray(data.USER_ACTIVITY)
        ? data.USER_ACTIVITY.find(user => user.userId === parseInt(userId))
        : data;

    if (!activity) {
        throw new Error(`Activities for user with ID ${userId} not found`);
    }

    // Créer une instance de UserActivity avec toutes les sessions
    const userActivity = new UserActivity(activity.sessions);

    // Si le graphique attend un tableau de sessions, retourne simplement userActivity.sessions
    return userActivity.sessions;
}


export async function getUserSessions(userId) {
    const data = await fetchData('/average-sessions', userId);

    // Trouver les sessions pour l'utilisateur spécifique
    const session = Array.isArray(data.USER_AVERAGE_SESSIONS)
        ? data.USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(userId))
        : data;

    if (!session || !session.sessions) {
        throw new Error(`Sessions for user with ID ${userId} not found or are empty`);
    }

    // Créer une instance de UserSession avec toutes les sessions

    return session.sessions.map(s => new UserSession(s.day, s.sessionLength));
}

export async function getUserPerformances(userId) {
    const data = await fetchData('/performance', userId);

    const performanceData = Array.isArray(data.USER_PERFORMANCE)
        ? data.USER_PERFORMANCE.find(user => user.userId === parseInt(userId))
        : data;

    if (!performanceData) {
        throw new Error(`Performance data for user with ID ${userId} not found`);
    }

    // Créer une instance de UserPerformance avec les performances de l'utilisateur
    const userPerformance = new UserPerformance(performanceData.data, performanceData.kind);

    return userPerformance.performance; // Retourner le tableau des performances
}