export class UserSession {
    // Mappage des numéros de jours aux lettres des jours de la semaine
    static daysOfWeekShort = { //static permet d'accéder à la propriété directement via la classe.
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D',
    };

    constructor(day, sessionLength) {
        this.day = UserSession.daysOfWeekShort[day] || 'Inconnu';
        this.sessionLength = sessionLength;
    }
}