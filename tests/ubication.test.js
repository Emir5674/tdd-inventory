const Ubication = require('../src/Ubication');

describe('Ubication Domain Logic', () => {
    test('should create a valid ubication', () => {
        const ubication = new Ubication('A-1-1', 'Main Warehouse');
        
        expect(ubication.code).toBe('A-1-1');
        expect(ubication.name).toBe('Main Warehouse');
    });

    test('should throw error if ubication code or ubication name are missing', () => {
        expect(() => new Ubication()).toThrow("Code/Name are required");
    });
});