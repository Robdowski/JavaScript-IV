// CODE here for your Lambda Classes

class Person{
    constructor(att){
        this.name = att.name
        this.age = att.age
        this.location = att.location
    }
    speak(){
        return `Hello, my name is ${this.name} and I'm from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(att){
        super(att)
        this.specialty = att.specialty
        this.favLang = att.favLang
        this.catchPhrase = att.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student} recieves a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(att){
        super(att)
        this.prevBG = att.prevBG
        this.className = att.className
        this.favSubjects = att.favSubjects
        this.grade = att.grade
    }
    listSubjects(){
        return this.favSubjects.forEach(i => console.log(i))
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprint(subject){
        return `${this.name} has begun a sprint on ${subject}.`
    }
    graduate(){
        return this.grade > 70 ? "You've Graduated! Go get a job!" : "Sorry, we're going to have to hold you back."
    }
}

class TeamLead extends Instructor{
    constructor(att){
        super(att)
        this.GradClass = att.GradClass
        this.favInstructor = att.favInstructor
    }
    standup(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel, standy times!`
    }
    debug(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
    gradeAssignment(student){
        let score = parseInt((Math.random() * 100), 10)
        return `${this.name} just graded ${student.name}'s assignment. His score is ${score}!`
    }
}


const britt = new Instructor({
    name: "Brit Hemming",
    age: "None of my business",
    location: "Canada",
    specialty: "CSS",
    favLang: "HTML5",
    catchPhrase: "I'm going to use my dog Ada for this next example."
})

console.log(britt.speak())
console.log(britt.demo("JavaScript"))
console.log(britt.grade("Robert", "JavaScript"))


const robert = new Student({
    name: "Robert Carter",
    age: 28,
    location: "Tulsa",
    prevBG: "Finance",
    className: "Web23",
    favSubjects: ["Python", "Computer Science", "JavaScript"],
    grade: 99
})

console.log(robert.listSubjects())
console.log(robert.PRAssignment("JavaScript"))
console.log(robert.sprint("Python"))

const cford = new TeamLead({
    name: "Christian Ford",
    age: 21,
    location: "Tay-Hass",
    specialty: "React",
    favLang: "English, duh",
    catchPhrase: "Alright y'all I'm gonna be right back one second.",
    GradClass: "WebPT Something",
    favInstructor: "Dr. Pepper",
})

console.log(cford.standup("Slackfdfdfiab"))
console.log(cford.debug(robert, "JavaScript"))


// STRETCH

console.log(robert.grade)
console.log(robert.graduate())
console.log(cford.gradeAssignment(robert))

