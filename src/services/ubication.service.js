const Ubication = require('../ubication');

class UbicationService {
    constructor() {
        this.ubications = [];
    }

    createUbication(code, name) {
        const alreadyExists = this.ubications.some((ubication) => ubication.code === code);

        if (alreadyExists) {
            throw new Error('Ubication code already exists');
        }

        const ubication = new Ubication(code, name);
        this.ubications.push(ubication);

        return ubication;
    }

    getAllUbications() {
        return [...this.ubications];
    }

    getUbicationByCode(code) {
        return this.ubications.find((ubication) => ubication.code === code) || null;
    }
}

module.exports = UbicationService;