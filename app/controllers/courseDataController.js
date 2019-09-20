var CourseDataModel = require('../models/courseDataModel');

class CourseDataController {
    getCoursesList() {
        CourseDataModel.getCoursesList();
    }
    insertNewCourseList() {
        CourseDataModel.getCoursesList();
    }
    editCourseListItem() {
        CourseDataModel.getCoursesList();
    }
    updateCourseListItem() {
        console.log('update courses list item')
    }
    softDeleteCourseItem() {
        console.log('soft delete course item executed')
    }
    activateCourseListItem() {
        console.log('activate course list item')
    }
    purchaseCourseItem() {
        console.log('purchase course item executed')
    }
    
    getCoursesList() {
        CourseDataModel.getCoursesList();
    }
    getCoursesList() {
        CourseDataModel.getCoursesList();
    }
    getLessonsList() {
        console.log('get Lessons list')
    }
    getTopicsList() {
        console.log('get Topics list')
    }
    getArticleList() {
        console.log('get Article List ')
    }
}

module.exports  = new CourseDataController;