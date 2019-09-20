var CourseDataModel = require('../models/courseDataModel');

class CourseDataController {
    getSample() {
        CourseDataModel.getCoursesList();
    }
}

module.exports  = new CourseDataController;