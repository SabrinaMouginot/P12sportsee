export class UserData {
    firstName
    score
    calorieCount
    proteinCount
    carbohydrateCount
    lipidCount

    constructor(firstName, score, calorieCount, proteinCount, carbohydrateCount, lipidCount) {
        this.firstName = firstName
        this.score = (score * 100).toFixed(0)
        this.calorieCount = calorieCount
        this.proteinCount = proteinCount
        this.carbohydrateCount = carbohydrateCount
        this.lipidCount = lipidCount
    }
}

export class UserActivity {
    constructor(sessions) {
        this.sessions = sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }

    getAverageCalories() {
        const totalCalories = this.sessions.reduce((sum, session) => sum + session.calories, 0);
        return totalCalories / this.sessions.length;
    }
}

export class UserSession {
    constructor(sessions) {
        this.sessions = sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength
        }));
    }
}


export class UserPerformance {
    constructor(data, kind) {
        this.performance = data.map(item => ({
            value: item.value,
            type: kind[item.kind]
        }));
    }
}
