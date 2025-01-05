use("CrudDb")

console.log(db)

db.createCollection(
    "courses"
)

db.courses.insertOne({
    name:"Harrys web dev free course",
    price:0,
    assignmenets:12,
    projects:45
})
db.courses.insertMany(
    [
        {
          "name": "Harry's web dev free course",
          "price": 0,
          "assignments": 12,
          "projects": 45
        },
        {
          "name": "React Mastery",
          "price": 99,
          "assignments": 10,
          "projects": 8
        },
        {
          "name": "Fullstack Bootcamp",
          "price": 199,
          "assignments": 25,
          "projects": 15
        },
        {
          "name": "Python for Beginners",
          "price": 49,
          "assignments": 8,
          "projects": 5
        },
        {
          "name": "Machine Learning Essentials",
          "price": 149,
          "assignments": 20,
          "projects": 10
        },
        {
          "name": "JavaScript Advanced Concepts",
          "price": 79,
          "assignments": 15,
          "projects": 7
        },
        {
          "name": "UI/UX Design Principles",
          "price": 119,
          "assignments": 18,
          "projects": 12
        },
        {
          "name": "DevOps Fundamentals",
          "price": 89,
          "assignments": 10,
          "projects": 6
        },
        {
          "name": "Cybersecurity Basics",
          "price": 59,
          "assignments": 7,
          "projects": 4
        },
        {
          "name": "Data Science with R",
          "price": 129,
          "assignments": 15,
          "projects": 9
        }
      ])

      let price0=db.courses.find({price:0})
      console.log(price0) 