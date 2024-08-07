import axios from 'axios';
import { UserData } from './user.model';

const isApi = true;

export async function getUserData(userId) {
    const res = await axios.get(isApi ? `http://localhost:3000/user/${userId}` : '/userData.json')
    const data = res.data.data

    console.log("Données reçues :", data);

    const user = Array.isArray(data) ? data.find(user => user.id === parseInt(userId)) : data;

    console.log("Utilisateur trouvé :", user);

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
    
//     return new UserData(data.userInfos.firstName, data.score || data.todayScore, data.keyData.calorieCount, data.keyData.proteinCount, data.keyData.carbohydrateCount, data.keyData.lipidCount)
}


export async function getUserActivities(userId) {
    const res = await axios.get(`http://localhost:3000/user/${userId}/activity`);
    return res.data.data.sessions;
}

export async function getUserSessions(userId) {
    const res = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
    return res.data.data.sessions;
}

export async function getUserPerformances(userId) {
    const res = await axios.get(`http://localhost:3000/user/${userId}/performance`);
    return res.data.data.data;
}
