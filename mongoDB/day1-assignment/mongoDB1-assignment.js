// Question 1
use FacultySystemDB;

// Question 2
db.createCollection("student");
db.student.insertOne({
    firstName: "Yusuf",
    lastName: "Muahmed",
    age: 25,
    faculty: {
        name: "computer science",
        address: "10th of ramadan city"
    },
    grades: [{
        courseName: "CS101",
        grade: 3,
        pass: true
    }],
    isFired: false
});

// Question 3
db.student.insertMany([
    {
        firstName: "Khaled",
        lastName: "Rami",
        age: 20,
        faculty: {
            name: "computer science",
            address: "10th of ramadan city"
        },
        grades: [{
            courseName: "CS101",
            grade: 3,
            pass: true
        }],
        isFired: false        
    }, 
    {
        firstName: "Yusuf",
        lastName: "Muahmed",
        age: 25,
        faculty: {
            name: "Mathematics",
            address: "10th of ramadan city"
        },
        grades: [{
            courseName: "M101",
            grade: 2,
            pass: true
        }],
        isFired: false        
    },
    {
        firstName: "Abdo",
        lastName: "Rami",
        age: 25,
        faculty: {
            name: "Arts",
            address: "Cairo"
        },
        grades: [{
            courseName: "A101",
            grade: 1,
            pass: true
        }],
        isFired: false        
    }
]);

// Question 4
db.student.find();
db.student.find({firstName: "Yusuf"});
db.student.find({$and: [{firstName: "Abdo"}, {lastName: "Rami"}]});
db.student.find({firstName: {$ne: "Abdo"}});
db.student.find({age: {$lt: 21}});
db.student.find({isFired: true});
db.student.find({$and: [{age: {$gte: 21}}, {faculty: {$ne: null}}]});
db.student.find({firstName: "Yusuf"}, {firstName: 1, lastName: 1, isFired: 1, _id: 0});

// Question 5
db.student.updateOne({firstName: "Yusuf"}, {$set: {lastName: "Mukhtar"}});

// Question 6
db.student.deleteMany({isFired: true});

// Question 7
db.student.drop();

// Question 8
db.dropDatabase();

// Question 9
use FacultySystemV2;

db.student.insertOne({
    firstName: "Yusuf",
    lastName: "Muhamed",
    isFired: false,
    facultyId: ObjectId(),
    courses: [
        {courseId: ObjectId()},
        {grade: 3}
    ]
});

db.faculty.insertOne({
    facultyName: "computer science",
    address: "10th of ramadan"
});

db.course.insertOne({
    courseName: "M101",
    finalMark: 90
});


db.student.insertMany([
    {
        firstName: "Mona",
        lastName: "Khaled",
        isFired: false,
        facultyId: ObjectId(),
        courses: [
            {courseId: ObjectId()},
            {grade: 2}
        ]
    },
    {
        firstName: "Rami",
        lastName: "Sabri",
        isFired: false,
        facultyId: ObjectId(),
        courses: [
            {courseId: ObjectId()},
            {grade: 4}
        ]
    },
    {
        firstName: "Abdo",
        lastName: "Ali",
        isFired: false,
        facultyId: ObjectId(),
        courses: [
            {courseId: ObjectId()},
            {grade: 3}
        ]
    }    
]);

db.faculty.insertOne([
    {
        facultyName: "Mathematics",
        address: "Cairo"
    },
    {
        facultyName: "Arts",
        address: "Alexandria"
    },
    {
        facultyName: "Language",
        address: "10th of Ramadan"
    }
]);

db.course.insertOne([
    {
        courseName: "B102",
        finalMark: 100
    },
    {
        courseName: "R201",
        finalMark: 92
    },
    {
        courseName: "XX20",
        finalMark: 100
    }        
]);
