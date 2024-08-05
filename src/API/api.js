import axios from 'axios';
import { UserData } from './user.model';

const isApi = true;

export async function getUserData(userId) {
    const res = await axios.get(isApi ? `http://localhost:3000/user/${userId}` : '/userData.json')
    const data = res.data.data
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