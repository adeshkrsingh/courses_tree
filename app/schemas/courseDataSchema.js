//Require Mongoose
var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;;

const topicSchema = new Schema({
    topic_id:  { type: ObjectId },
    duration: { type: Number, default: 0 },
    images: [],
    topic_type: { type: String, default: 'classroom' },
    is_public: { type: Boolean, default: false },
    key: { type: String, default: null },
    resources: [],
    articles: [],
    semantic_type: { type: String, default: 'topic' },
    title: { type: String, default: null },
    summary: { type: String, default: null },
    keywords: [],
    version: { type: String, default: '1.0.0' },
    updated_at: { type: Date, default: Date.now }
});


const lessonsSchema = new Schema({
    lesson_id:  { type: ObjectId },
    duration: { type: Number, default: 0 },
    images: [],
    lesson_type: { type: String, default: 'classroom' },
    is_public: { type: Boolean, default: false },
    key: { type: String, default: null },
    resources: [],
    semantic_type: { type: String, default: 'lesson' },
    title: { type: String, default: null },
    summary: { type: String, default: null },
    keywords: [],
    topics: [topicSchema],
    version: { type: String, default: '1.0.0' },
    updated_at: { type: Date, default: Date.now }
});

var courseDataSchema = new Schema({
    key:  { type: String, default: null },
    title:  { type: String, default: null },
    locale:  { type: String, default: null },
    semantic_type:  { type: String, default: 'course' },
    version:  { type: String, default: '1.0.0' },
    lessons: [],
    summary: { type: String, default: null },
    keywords: [],
    lessons: [lessonsSchema],
    deleted_at: { type: String, default: null },
    updated_at: { type: Date, default: Date.now }
});


// Compile model from schema
module.exports = mongoose.model('coursedata', courseDataSchema);