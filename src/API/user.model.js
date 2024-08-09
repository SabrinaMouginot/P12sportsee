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

    // getAverageCalories() {
    //     const totalCalories = this.sessions.reduce((sum, session) => sum + session.calories, 0);
    //     return totalCalories / this.sessions.length;
    // }
}

export class UserSession {
    constructor(day, sessionLength) {
        this.day = this.convertDayToString(day);
        this.sessionLength = sessionLength;
    }

    //     convertDayToString(day) {
    //         const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    //         return daysOfWeek[day - 1] || 'Inconnu'; // Ajout d'un fallback pour les valeurs non attendues
    //     }
}


export class UserPerformance {
    constructor(data, kind) {
        this.performance = data.map(item => ({
            value: item.value,
            type: kind[item.kind]
        }));
    }

    // getMaxPerformance() {
    //     return this.performance.reduce((max, current) => current.value > max.value ? current : max);
    // }
}
