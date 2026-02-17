class Ubication{
    constructor(code, name){
        if (!code || !name) {
            throw new Error("Code/Name are required");
        }

        this.code = code;
        this.name = name;
    }
}

module.exports = Ubication;