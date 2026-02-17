const Ubication = require('../src/ubication');
const UbicationService = require('../src/services/ubication.service');

describe('Testing Ubication Service', () => {
    let ubicationService;

    beforeEach(() => {
        ubicationService = new UbicationService();
    });

    test('should create a new ubication using the service', () => {
        const ubication = ubicationService.createUbication('A-1-1', 'Main Warehouse');

        expect(ubication).toBeInstanceOf(Ubication);
        expect(ubication).toEqual({
            code: 'A-1-1',
            name: 'Main Warehouse'
        });
    });

    test('should return all created ubications', () => {
        ubicationService.createUbication('A-1-1', 'Main Warehouse');
        ubicationService.createUbication('B-1-1', 'Secondary Warehouse');

        const ubications = ubicationService.getAllUbications();

        expect(ubications).toHaveLength(2);
        expect(ubications[0].code).toBe('A-1-1');
        expect(ubications[1].code).toBe('B-1-1');
    });

    test('should return ubication by code', () => {
        ubicationService.createUbication('A-1-1', 'Main Warehouse');

        const ubication = ubicationService.getUbicationByCode('A-1-1');

        expect(ubication).toBeInstanceOf(Ubication);
        expect(ubication.name).toBe('Main Warehouse');
    });

    test('should return null when ubication code does not exist', () => {
        const ubication = ubicationService.getUbicationByCode('Z-9-9');

        expect(ubication).toBeNull();
    });

    test('should throw error when trying to create duplicated ubication code', () => {
        ubicationService.createUbication('A-1-1', 'Main Warehouse');

        expect(() => ubicationService.createUbication('A-1-1', 'Duplicate Warehouse')).toThrow('Ubication code already exists');
    });

    test('should throw error if code or name are missing', () => {
        expect(() => ubicationService.createUbication()).toThrow('Code/Name are required');
    });
});