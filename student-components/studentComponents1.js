// Challenge 1: Composition of Smaller Components

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// Write functions that build the sub-components of the larger student component.
//     h1
//     section
//     aside
// Invoke those functions inside the createStudentComponent function to build the parent <div>.

const createH1 = (student, cls) => {
    return `<h1 class="xx-large ${cls}">${student}</h1>`
}

const createSection = (student) => {
    return `
    <section class="bordered dashed section--padded">
        ${student}
    </section>
    `
}

const createAside = (student) => {
    return `
    <aside class="pushRight">
        ${student}
    </aside>
    `
}

const createStudentComponent = (student, cls) => `
    <div id="student">
        ${createH1(student.name, cls)}
        ${createSection(student.subject)}
        ${createAside(student.info)}
    </div>
`

// Then store a reference to an existing HTML element
const studentContainer = document.querySelector("#container")

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = createStudentComponent(
            student,
            "passing"
        )
    } else {
        studentComponent = createStudentComponent(
            student,
            "failing"
        )
    }
    studentContainer.innerHTML += studentComponent
}