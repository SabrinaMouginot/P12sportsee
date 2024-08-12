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
