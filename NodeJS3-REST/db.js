const PASSWORD = require('./credentials').PASSWORD
const mongoose = require('mongoose')

const DB = `mongodb+srv://sanchittanwar1:${PASSWORD}@cluster0.bzn1zyg.mongodb.net/my_db?retryWrites=true&w=majority`

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Server connected')
}).catch(err => {
    console.log('Error connecting to DB: ', err)
})


// Schema (class)
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: {type: Date, default: Date.now},
    lastUpdated: {type: Date, default: Date.now},
    isPublished: Boolean,
    rating: Number,
    something: [{
        somethingElse: String
    }
    ]
})

// Model (constructor)
const Course = mongoose.model('Course', courseSchema)

// Create a document
async function createCourse() {
    // object
    const course = new Course({
        name: 'Java',
        creator: 'Ahmed',
        isPublished: true,
        rating: 4.2,
        something: [{somethingElse: 'abc'}]
    })

    const courseCreated = await course.save()
    console.log(courseCreated)
}

// createCourse()

// > | gt
// >= | gte
// < | lt
// <= | lte

// Get a document
async function getcourse() {
    // const course = await Course.find({something: {$elemMatch: {somethingElse: 'abc'}}})
    const course = await Course.find({rating: {$lt : 4.5}})
    console.log(course)
}

// getcourse()

async function deleteRecord(id) {
    const course = await Course.findByIdAndDelete(id)
    console.log(course)
}

// deleteRecord('658471ba49eb7e60afe13b19')


// Update record
async function updateRecord(id) {
    const course = await Course.findById(id)

    if(!course) {
        return;
    }

    // course.creator = 'Pranav'
    // course.name = 'Python'
    course.rating = 5.0
    course.lastUpdated = Date.now

    const updatedCourse = await course.save()
    console.log(updatedCourse)
}

updateRecord('658470207cb545bafc3ab116')