class BaseModel {
    constructor(schemaUsed) {
        this.schemaUsed = schemaUsed;
    }

    findAll() {
        console.log('find All executed')
    }
    find() {
        console.log('find Executed')
    }
}

module.exports = new BaseModel;