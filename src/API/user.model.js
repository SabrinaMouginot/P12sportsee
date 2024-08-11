export class UserData {
    firstName
    score
    calorieCount
    proteinCount
    carbohydrateCount
    lipidCount

    constructor(firstName, score, calorieCount, proteinCount, carbohydrateCount, lipidCount) {
        this.firstName = firstName
        this.score = (score * 100)
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
}

export class UserSession {
    // Mappage des numéros de jours aux lettres des jours de la semaine
    static daysOfWeekShort = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D',
    };

    constructor(day, sessionLength) {
        this.day = UserSession.daysOfWeekShort[day] || 'Inconnu'; // Assurez-vous que le jour est correctement mappé
        this.sessionLength = sessionLength;
    }
}

export class UserPerformance {
    // Mappage des indices aux libellés personnalisés
    static performanceLabels = {
        1: 'Intensité',
        2: 'Vitesse',
        3: 'Force',
        4: 'Endurance',
        5: 'Energie',
        6: 'Cardio'
    };

    constructor(data) {
        this.performance = data.map(item => ({
            value: item.value,
            type: UserPerformance.performanceLabels[item.kind] || 'Inconnu' // Utilisation des libellés personnalisés
        }));
    }
}


