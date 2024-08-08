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
    day
    kilogram
    calories

    constructor(day, kilogram, calories) {
        this.day = day;  // Jour de l'activité
        this.kilogram = kilogram;  // Poids en kg
        this.calories = calories;  // Calories brûlées
    }
}

export class UserSession {
    day
    sessionLength

    constructor(day, sessionLength) {
        this.day = day;  // Jour de la semaine (numérique)
        this.sessionLength = sessionLength;  // Durée de la session en minutes
    }
}

export class UserPerformance {
    value
    kind
    
    constructor(value, kind) {
        this.value = value;  // Valeur de la performance
        this.kind = kind;  // Type de performance (ex: cardio, force, etc.)
    }
}
