import axios from 'axios';
import { UserData } from './user.model';

const isApi = true;

export async function getUserData(userId) {
    const res = await axios.get(isApi ? `http://localhost:3000/user/${userId}` : '/userData.json')
    const allData = res.data.data;

    // Recherche de l'utilisateur par ID dans le fichier JSON
    const data = isApi ? allData : allData.find(user => user.id === parseInt(userId));

    if (!data) {
        throw new Error('Utilisateur non trouvé');
    }

    return new UserData(data.userInfos.firstName, data.score || data.todayScore, data.keyData.calorieCount, data.keyData.proteinCount, data.keyData.carbohydrateCount, data.keyData.lipidCount)
}

export async function getUserActivities(userId) {
    const res = await axios.get(`http://localhost:3000/user/${userId}/activity`)

    return res.data.data.sessions
}

export async function getUserSessions(userId) {
    const res = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)

    return res.data.data.sessions
}

export async function getUserPerformances(userId) {
    const res = await axios.get(`http://localhost:3000/user/${userId}/performance`)

    return res.data.data.data
}