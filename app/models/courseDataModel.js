var BaseModel = require('./baseModel');
var CourseDataSchema = require('../schemas/courseDataSchema');

class CourseDataModel extends BaseModel {
    constructor() {
        super(CourseDataSchema)
    }
    getCoursesList() {
        console.log('get Courses list called')
    }
    getLessonsList() {
        console.log('get Lessons list executed')
    }
}


module.exports = new CourseDataModel;