// Challenge 2: Generic HTML Function

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

// Look at the three functions you created to build an h1, a section, and an aside. Notice that each one follows the same pattern of accepting a single argument - a string - and outputting a single HTML component. Since there is a pattern, you can consider writing a single function that generalizes the creation of an HTML component even further.

// Create one function that will generate any HTML component, with any content. It should be defined with three arguments.

// The type of HTML component to make
// The content of the component
// The value of the class attribute

const element = (componentType, student, cls) => `<${componentType} class="${cls}">${student}</${componentType}>`

const createStudentComponent = (student) => {
    return `
    <div id="student">
        ${element("h1", student.name, "xx-large passing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>
    `
}

// Then store a reference to an existing HTML element
const studentContainer = document.querySelector("#container")

students.forEach(student => {
    let studentComponent = ""
    studentComponent = createStudentComponent(student)
    studentContainer.innerHTML += studentComponent
});
