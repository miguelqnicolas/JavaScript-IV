// class

const initialGrade = 100;
const deduction = Math.floor(Math.random() * 101);
const finalGrade = initialGrade - deduction;

function gradeCalculation() {
    if (finalGrade > 70) {
        return `Congrats! You graduate!`
    } else {
        return `You don't graduate :(. You need atleast a grade of 70. You'll get it next time!`
    }
}

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello, my name is ${this.name} and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} received a perfect score on ${subject}!`;
    }

    passOrFail(student) {
        return `${student.name} has a grade of ${student.grade}. I will deduct ${deduction} points for a final grade of ${finalGrade}.`;
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects; // array
        this.grade = initialGrade;
    }

    listsSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge() {
        return `${this.name} has begun the sprint challenge for ${subject}.`;
    }

    graduate() {
        return gradeCalculation();
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

// objects

const miguel = new Student({
    name: 'Miguel'
});

const joscelyn = new Instructor({
    name: "Joscelyn",
    specialty: "Super Smash Bros",
    favLanguage: "JavaScript",
    catchPhrase: "Gotta Catch 'Em All"
});

console.log(miguel);
console.log(joscelyn);
console.log(joscelyn.passOrFail(miguel));
console.log(miguel.graduate());