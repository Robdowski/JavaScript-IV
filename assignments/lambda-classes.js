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
    }
    listSubjects(){
        for (i=0; i<this.favSubjects.length; i++){
            console.log(this.favSubjects[i])
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprint(subject){
        return `${this.name} has begun a sprint on ${subject}.`
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
}









