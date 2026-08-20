const courses = {

    HTML: [
        ["Introduction", "Learn what HTML is and how websites are structured.", "<h1>Hello World!</h1>"],
        ["Basic", "Learn the basic structure of an HTML document.", "<!DOCTYPE html>\n<html>\n<body>\n<h1>Hello</h1>\n</body>\n</html>"],
        ["Elements", "Learn how HTML elements work.", "<h1>Title</h1>\n<p>Paragraph</p>"],
        ["Attributes", "Learn how to add information to HTML elements.", "<a href='https://example.com'>Visit Website</a>"],
        ["Headings", "Learn HTML headings from h1 to h6.", "<h1>Heading 1</h1>\n<h2>Heading 2</h2>"],
        ["Paragraphs", "Learn how to create paragraphs.", "<p>This is a paragraph.</p>"],
        ["Styles", "Learn how to add inline styles.", "<h1 style='color:red'>Hello</h1>"],
        ["Formatting", "Learn bold, italic and highlighted text.", "<b>Bold</b>\n<i>Italic</i>\n<mark>Highlighted</mark>"],
        ["Comments", "Learn how to write HTML comments.", "<!-- This is a comment -->"],
        ["Colors", "Learn how to use colors in HTML.", "<h1 style='color:blue'>Blue Title</h1>"],
        ["Links", "Learn how to create links.", "<a href='#'>Click Here</a>"],
        ["Images", "Learn how to add images.", "<img src='https://via.placeholder.com/250'>"],
        ["Lists", "Learn ordered and unordered lists.", "<ul>\n<li>HTML</li>\n<li>CSS</li>\n</ul>"],
        ["Tables", "Learn how to create tables.", "<table border='1'>\n<tr><td>Hello</td></tr>\n</table>"],
        ["Forms", "Learn how to create forms.", "<form>\n<input placeholder='Name'>\n<button>Submit</button>\n</form>"],
        ["Input Types", "Learn different HTML input types.", "<input type='text'>\n<input type='email'>\n<input type='number'>"],
        ["Buttons", "Learn how to create buttons.", "<button>Click Me</button>"],
        ["Classes", "Learn how HTML classes work.", "<p class='title'>Hello</p>"],
        ["IDs", "Learn how HTML IDs work.", "<h1 id='title'>Hello</h1>"],
        ["Block and Inline", "Learn the difference between block and inline elements.", "<div>Block</div>\n<span>Inline</span>"],
        ["Semantic HTML", "Learn semantic HTML elements.", "<header>Header</header>\n<main>Main</main>\n<footer>Footer</footer>"],
        ["Header", "Learn how to create a website header.", "<header>My Website</header>"],
        ["Navigation", "Learn how to create navigation menus.", "<nav><a href='#'>Home</a></nav>"],
        ["Section", "Learn how to organize content with sections.", "<section><h2>About</h2></section>"],
        ["Article", "Learn how to create articles.", "<article>My Article</article>"],
        ["Footer", "Learn how to create a footer.", "<footer>Copyright 2026</footer>"],
        ["Audio", "Learn how to add audio.", "<audio controls></audio>"],
        ["Video", "Learn how to add video.", "<video controls></video>"],
        ["Iframes", "Learn how to embed another webpage.", "<iframe src='https://example.com'></iframe>"],
        ["HTML Project", "Build your first personal webpage.", "<h1>My Portfolio</h1>\n<p>Welcome to my website!</p>"]
    ],

    CSS: [
        ["Introduction", "Learn what CSS is.", "h1 { color: red; }"],
        ["Syntax", "Learn CSS syntax.", "h1 {\n    color: red;\n}"],
        ["Selectors", "Learn how CSS selectors work.", "p { color: blue; }"],
        ["Colors", "Learn CSS colors.", "h1 { color: purple; }"],
        ["Backgrounds", "Learn CSS backgrounds.", "body { background: lightblue; }"],
        ["Borders", "Learn how to create borders.", "div { border: 2px solid black; }"],
        ["Margins", "Learn CSS margins.", "div { margin: 20px; }"],
        ["Padding", "Learn CSS padding.", "div { padding: 20px; }"],
        ["Width and Height", "Learn width and height.", "div {\n    width: 300px;\n    height: 100px;\n}"],
        ["Box Model", "Learn the CSS box model.", "div {\n    padding: 20px;\n    border: 5px solid black;\n    margin: 20px;\n}"],
        ["Text", "Learn how to style text.", "p {\n    text-align: center;\n}"],
        ["Fonts", "Learn CSS fonts.", "p {\n    font-size: 20px;\n    font-weight: bold;\n}"],
        ["Links", "Learn how to style links.", "a {\n    color: green;\n}"],
        ["Lists", "Learn how to style lists.", "ul {\n    list-style: square;\n}"],
        ["Display", "Learn the display property.", "div {\n    display: inline-block;\n}"],
        ["Position", "Learn CSS positioning.", "div {\n    position: relative;\n    left: 20px;\n}"],
        ["Z-Index", "Learn how layers work.", "div {\n    z-index: 5;\n}"],
        ["Overflow", "Learn how overflow works.", "div {\n    overflow: auto;\n}"],
        ["Opacity", "Learn transparency.", "img {\n    opacity: .5;\n}"],
        ["Combinators", "Learn CSS combinators.", "div p {\n    color: red;\n}"],
        ["Pseudo Classes", "Learn hover and other pseudo classes.", "button:hover {\n    transform: scale(1.1);\n}"],
        ["Pseudo Elements", "Learn before and after.", "p::before {\n    content: '→';\n}"],
        ["Flexbox", "Learn the basics of Flexbox.", ".box {\n    display: flex;\n    justify-content: center;\n}"],
        ["Flex Direction", "Learn Flexbox directions.", ".box {\n    display: flex;\n    flex-direction: column;\n}"],
        ["Flex Wrap", "Learn how Flexbox wrapping works.", ".box {\n    display: flex;\n    flex-wrap: wrap;\n}"],
        ["Grid", "Learn CSS Grid.", ".box {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}"],
        ["Grid Columns", "Learn grid columns.", ".box {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}"],
        ["Gap", "Learn spacing with gap.", ".box {\n    display: flex;\n    gap: 20px;\n}"],
        ["Variables", "Learn CSS variables.", ":root {\n    --main-color: green;\n}"],
        ["Shadows", "Learn box shadows.", "div {\n    box-shadow: 0 5px 20px #888;\n}"],
        ["Gradients", "Learn CSS gradients.", "body {\n    background: linear-gradient(red, blue);\n}"],
        ["Transforms", "Learn CSS transforms.", "div {\n    transform: rotate(10deg);\n}"],
        ["Transitions", "Learn CSS transitions.", "button {\n    transition: .3s;\n}"],
        ["Animations", "Learn CSS animations.", "@keyframes move {\n    from { left: 0; }\n    to { left: 100px; }\n}"],
        ["Media Queries", "Learn responsive media queries.", "@media (max-width:600px) {\n    body { background:red; }\n}"],
        ["Responsive Design", "Learn how to make websites responsive.", "img {\n    max-width: 100%;\n}"],
        ["CSS Project", "Build a modern landing page.", ".hero {\n    text-align: center;\n    padding: 100px;\n}"]
    ],

    JavaScript: [
        ["Introduction", "Learn what JavaScript is.", "alert('Hello World');"],
        ["Syntax", "Learn JavaScript syntax.", "let name = 'Adam';"],
        ["Comments", "Learn JavaScript comments.", "// This is a comment"],
        ["Variables", "Learn JavaScript variables.", "let age = 17;"],
        ["Let and Const", "Learn let and const.", "let x = 5;\nconst y = 10;"],
        ["Data Types", "Learn JavaScript data types.", "let name = 'Adam';\nlet age = 17;\nlet active = true;"],
        ["Operators", "Learn JavaScript operators.", "let result = 10 + 5;"],
        ["Strings", "Learn JavaScript strings.", "let name = 'Adam';\nconsole.log(name);"],
        ["Numbers", "Learn JavaScript numbers.", "let x = 10;\nconsole.log(x * 2);"],
        ["Arrays", "Learn JavaScript arrays.", "let skills = ['HTML', 'CSS', 'JS'];"],
        ["Array Methods", "Learn array methods.", "let numbers = [1,2,3];\nnumbers.push(4);"],
        ["Objects", "Learn JavaScript objects.", "let user = {\n    name: 'Adam',\n    age: 17\n};"],
        ["Functions", "Learn how to create functions.", "function hello() {\n    alert('Hello');\n}\nhello();"],
        ["Parameters", "Learn function parameters.", "function hello(name) {\n    console.log(name);\n}"],
        ["Return", "Learn how functions return values.", "function add(a,b) {\n    return a + b;\n}"],
        ["If Else", "Learn conditions.", "if (age >= 18) {\n    console.log('Adult');\n}"],
        ["Switch", "Learn switch statements.", "switch(day) {\n    case 1:\n        console.log('Monday');\n}"],
        ["For Loop", "Learn for loops.", "for(let i = 0; i < 5; i++) {\n    console.log(i);\n}"],
        ["While Loop", "Learn while loops.", "let i = 0;\nwhile(i < 5) {\n    i++;\n}"],
        ["Break", "Learn how to stop loops.", "for(let i=0;i<10;i++) {\n    if(i === 5) break;\n}"],
        ["Continue", "Learn how to skip loop iterations.", "for(let i=0;i<5;i++) {\n    if(i === 2) continue;\n}"],
        ["Events", "Learn JavaScript events.", "button.onclick = function() {\n    alert('Hello');\n};"],
        ["DOM", "Learn the Document Object Model.", "document.getElementById('title');"],
        ["Change HTML", "Learn how to change HTML.", "document.getElementById('title').innerHTML = 'Hello';"],
        ["Change CSS", "Learn how to change CSS with JavaScript.", "document.body.style.background = 'red';"],
        ["Forms", "Learn how to work with forms.", "document.querySelector('input').value;"],
        ["Validation", "Learn basic form validation.", "if(name === '') {\n    alert('Enter your name');\n}"],
        ["Dates", "Learn JavaScript dates.", "let date = new Date();"],
        ["Math", "Learn JavaScript Math.", "console.log(Math.random());"],
        ["JSON", "Learn how JSON works.", "JSON.stringify({name:'Adam'});"],
        ["Local Storage", "Learn how to store data.", "localStorage.setItem('name','Adam');"],
        ["Classes", "Learn JavaScript classes.", "class User {\n    constructor(name) {\n        this.name = name;\n    }\n}"],
        ["Modules", "Learn JavaScript modules.", "export default hello;"],
        ["Promises", "Learn promises.", "new Promise((resolve) => {\n    resolve();\n});"],
        ["Async", "Learn async functions.", "async function hello() {\n    return 'Hello';\n}"],
        ["Fetch", "Learn how to request data.", "fetch('https://example.com');"],
        ["APIs", "Learn how APIs work.", "fetch('/api/data');"],
        ["JavaScript Project", "Build a simple To-Do application.", "let tasks = [];\ntasks.push('Learn JavaScript');"]
    ],

    Python: [
        ["Introduction", "Learn what Python is.", "print('Hello World')"],
        ["Syntax", "Learn Python syntax.", "if 10 > 5:\n    print('Yes')"],
        ["Variables", "Learn Python variables.", "name = 'Adam'\nage = 17"],
        ["Data Types", "Learn Python data types.", "name = 'Adam'\nage = 17\nactive = True"],
        ["Numbers", "Learn Python numbers.", "x = 10\ny = 5\nprint(x + y)"],
        ["Strings", "Learn Python strings.", "name = 'Adam'\nprint('Hello ' + name)"],
        ["Booleans", "Learn Boolean values.", "online = True"],
        ["Operators", "Learn Python operators.", "x = 10 + 5"],
        ["Lists", "Learn Python lists.", "skills = ['HTML','CSS','Python']"],
        ["List Methods", "Learn Python list methods.", "numbers = [1,2]\nnumbers.append(3)"],
        ["Tuples", "Learn Python tuples.", "skills = ('HTML','CSS')"],
        ["Sets", "Learn Python sets.", "numbers = {1,2,3}"],
        ["Dictionaries", "Learn Python dictionaries.", "user = {'name':'Adam','age':17}"],
        ["If", "Learn Python if statements.", "if age >= 18:\n    print('Adult')"],
        ["Elif", "Learn elif statements.", "if x > 10:\n    print('Big')\nelif x == 10:\n    print('Equal')"],
        ["For Loop", "Learn Python for loops.", "for i in range(5):\n    print(i)"],
        ["While Loop", "Learn Python while loops.", "i = 0\nwhile i < 5:\n    i += 1"],
        ["Break", "Learn break.", "for i in range(10):\n    if i == 5:\n        break"],
        ["Continue", "Learn continue.", "for i in range(5):\n    if i == 2:\n        continue"],
        ["Functions", "Learn Python functions.", "def hello():\n    print('Hello')"],
        ["Arguments", "Learn function arguments.", "def hello(name):\n    print(name)"],
        ["Return", "Learn return values.", "def add(a,b):\n    return a + b"],
        ["Lambda", "Learn lambda functions.", "double = lambda x: x * 2"],
        ["Scope", "Learn variable scope.", "x = 10"],
        ["Modules", "Learn Python modules.", "import math\nprint(math.sqrt(25))"],
        ["Random", "Learn the random module.", "import random\nprint(random.randint(1,10))"],
        ["Dates", "Learn Python dates.", "import datetime\nprint(datetime.datetime.now())"],
        ["Files", "Learn how to work with files.", "file = open('test.txt','w')\nfile.write('Hello')\nfile.close()"],
        ["Try Except", "Learn error handling.", "try:\n    x = int('abc')\nexcept:\n    print('Error')"],
        ["Classes", "Learn Python classes.", "class User:\n    pass"],
        ["Objects", "Learn Python objects.", "class User:\n    def __init__(self,name):\n        self.name = name"],
        ["Inheritance", "Learn class inheritance.", "class Student(User):\n    pass"],
        ["Iterators", "Learn Python iterators.", "numbers = iter([1,2,3])"],
        ["Generators", "Learn Python generators.", "def numbers():\n    yield 1"],
        ["JSON", "Learn Python JSON.", "import json"],
        ["Regular Expressions", "Learn regular expressions.", "import re"],
        ["Virtual Environment", "Learn Python virtual environments.", "python -m venv env"],
        ["Python Project", "Build a simple calculator.", "def add(a,b):\n    return a + b"]
    ]
};


let lessons = [];

for (const language in courses) {

    courses[language].forEach((lesson, index) => {

        lessons.push({
            id: `${language}-${index}`,
            language: language,
            title: lesson[0],
            description: lesson[1],
            code: lesson[2]
        });

    });

}


function buildSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = `
        <button onclick="home()">🏠 Home</button>
        <button onclick="about()">👤 About Me</button>
        <button onclick="startQuiz()">🎯 Challenges</button>
    `;

    for (const language in courses) {

        const heading = document.createElement("h3");

        heading.textContent = language;

        sidebar.appendChild(heading);

        courses[language].forEach((lesson, index) => {

            const button = document.createElement("button");

            button.textContent =
                `${index + 1}. ${lesson[0]}`;

            button.onclick = () => {

                openLesson(`${language}-${index}`);

            };

            sidebar.appendChild(button);

        });

    }

}


function home() {

    document.getElementById("app").innerHTML = `

        <section class="hero">

            <div class="label">
                CODELEARN
            </div>

            <h1>
                Learn Coding 🚀
            </h1>

            <p>
                Learn HTML, CSS, JavaScript and Python
                from beginner to advanced level.
            </p>

            <div class="buttons">

                <button
                    class="big-card"
                    onclick="startQuiz()"
                >
                    <span>🎯</span>
                    <strong>Challenges & Score</strong>
                    <small>Test your coding knowledge</small>
                </button>

                <button
                    class="big-card"
                    onclick="showCourses()"
                >
                    <span>📚</span>
                    <strong>Courses</strong>
                    <small>Explore 100+ coding lessons</small>
                </button>

            </div>

            <button
                class="run"
                onclick="about()"
            >
                👤 About Me
            </button>

        </section>
    `;

}


function showCourses() {

    document.getElementById("app").innerHTML = `

        <section class="hero">

            <div class="label">
                COURSES
            </div>

            <h1>
                Choose Your Course
            </h1>

            <p>
                Start learning with our coding courses.
            </p>

            <div class="buttons">

                <button
                    class="big-card"
                    onclick="openLesson('HTML-0')"
                >
                    <span>🌐</span>
                    <strong>HTML</strong>
                    <small>Build website structure</small>
                </button>

                <button
                    class="big-card"
                    onclick="openLesson('CSS-0')"
                >
                    <span>🎨</span>
                    <strong>CSS</strong>
                    <small>Design beautiful websites</small>
                </button>

                <button
                    class="big-card"
                    onclick="openLesson('JavaScript-0')"
                >
                    <span>⚡</span>
                    <strong>JavaScript</strong>
                    <small>Make websites interactive</small>
                </button>

                <button
                    class="big-card"
                    onclick="openLesson('Python-0')"
                >
                    <span>🐍</span>
                    <strong>Python</strong>
                    <small>Learn programming</small>
                </button>

            </div>

        </section>
    `;

}


function about() {

    document.getElementById("app").innerHTML = `

        <section class="about">

            <div class="label">
                ABOUT ME
            </div>

            <h1>
                👋 Hello!
            </h1>

            <div class="about-card">

                <h2>
                    Welcome to CodeLearn
                </h2>

                <p>
                    My name is Adam. I am interested in
                    programming, technology and web development.
                </p>

                <p>
                    I created CodeLearn to make learning
                    programming simple, organized and fun.
                </p>

                <p>
                    My main technologies are:
                    HTML, CSS, JavaScript and Python.
                </p>

                <p>
                    🚀 My goal is to build real projects
                    and become a better developer.
                </p>

            </div>

        </section>
    `;

}


function openLesson(id) {

    const lesson = lessons.find(x => x.id === id);

    if (!lesson) return;

    const index = lessons.indexOf(lesson);

    document.getElementById("app").innerHTML = `

        <article class="lesson">

            <div class="label">
                ${lesson.language}
            </div>

            <h1>
                ${lesson.title}
            </h1>

            <p class="lesson-intro">
                ${lesson.description}
            </p>

            <div class="info-box">

                <strong>
                    📖 Explanation
                </strong>

                <br><br>

                ${lesson.description}

            </div>

            <h2>
                💻 Example
            </h2>

            <pre><code>${escapeHTML(lesson.code)}</code></pre>

            <div class="editor">

                <h2>
                    🧪 Try It Yourself
                </h2>

                <textarea id="editor">${lesson.code}</textarea>

                <button
                    class="run"
                    onclick="runCode()"
                >
                    ▶ Run
                </button>

                <iframe id="output"></iframe>

            </div>

            <div class="navigation">

                <button onclick="previousLesson(${index})">
                    ← Previous
                </button>

                <button onclick="nextLesson(${index})">
                    Next →
                </button>

            </div>

        </article>
    `;

    window.scrollTo(0, 0);

}


function nextLesson(index) {

    if (index < lessons.length - 1) {

        openLesson(lessons[index + 1].id);

    }

}


function previousLesson(index) {

    if (index > 0) {

        openLesson(lessons[index - 1].id);

    }

}


function runCode() {

    const code =
        document.getElementById("editor").value;

    document.getElementById("output").srcdoc = code;

}


function searchLessons() {

    const value =
        document.getElementById("search")
        .value
        .toLowerCase();

    if (!value) {

        home();
        return;

    }

    const results =
        lessons.filter(lesson =>
            lesson.title
            .toLowerCase()
            .includes(value)
        );

    document.getElementById("app").innerHTML = `

        <section class="lesson">

            <div class="label">
                SEARCH
            </div>

            <h1>
                Search Results
            </h1>

            <br>

            ${
                results.length
                ?
                results.map(lesson => `

                    <button
                        class="search-result"
                        onclick="openLesson('${lesson.id}')"
                    >
                        ${lesson.language}
                        →
                        ${lesson.title}
                    </button>

                `).join("")
                :
                "<p>No lessons found.</p>"
            }

        </section>
    `;

}


function toggleDark() {

    document.body.classList.toggle("dark");

}


const questions = [

    [
        "What is HTML used for?",
        ["Website structure", "Website design", "Databases", "Game development"],
        0
    ],

    [
        "What is CSS used for?",
        ["Website structure", "Website design", "Databases", "Python"],
        1
    ],

    [
        "What makes websites interactive?",
        ["HTML", "CSS", "JavaScript", "SQL"],
        2
    ],

    [
        "Which keyword creates a function in Python?",
        ["function", "def", "func", "create"],
        1
    ],

    [
        "Which tag creates the largest HTML heading?",
        ["<h1>", "<h6>", "<head>", "<title>"],
        0
    ],

    [
        "Which CSS property changes text color?",
        ["background", "color", "font", "text"],
        1
    ],

    [
        "Which keyword creates a JavaScript variable?",
        ["let", "make", "variable", "create"],
        0
    ],

    [
        "Which brackets create a Python list?",
        ["()", "[]", "{}", "<>"],
        1
    ],

    [
        "Which CSS layout system is used for rows and columns?",
        ["Flexbox", "Grid", "Float", "Position"],
        1
    ],

    [
        "What can a JavaScript array store?",
        ["Multiple values", "Only text", "Only numbers", "CSS"],
        0
    ]

];


let questionIndex = 0;
let score = 0;


function startQuiz() {

    questionIndex = 0;
    score = 0;

    showQuestion();

}


function showQuestion() {

    const question =
        questions[questionIndex];

    document.getElementById("app").innerHTML = `

        <section class="quiz">

            <div class="label">
                CODING CHALLENGE
            </div>

            <h1>
                🎯 Coding Challenge
            </h1>

            <div class="score">
                Score: ${score}/10
            </div>

            <div class="question">

                <h2>
                    Question ${questionIndex + 1}/10
                </h2>

                <p>
                    ${question[0]}
                </p>

                <br>

                ${
                    question[1].map((answer, index) => `

                        <button
                            class="answer"
                            onclick="answerQuestion(${index})"
                        >
                            ${answer}
                        </button>

                    `).join("")
                }

            </div>

        </section>
    `;

}


function answerQuestion(answer) {

    const correct =
        questions[questionIndex][2];

    if (answer === correct) {

        score++;

    }

    questionIndex++;

    if (questionIndex >= questions.length) {

        showResult();

    } else {

        showQuestion();

    }

}


function showResult() {

    let message;

    if (score >= 9) {

        message = "🔥 Excellent work!";

    } else if (score >= 7) {

        message = "👏 Very good!";

    } else if (score >= 5) {

        message = "👍 Good job!";

    } else {

        message = "💪 Keep learning!";

    }

    document.getElementById("app").innerHTML = `

        <section class="quiz">

            <div class="label">
                RESULT
            </div>

            <h1>
                🏆 ${message}
            </h1>

            <div class="score">
                Final Score: ${score}/10
            </div>

            <button
                class="run"
                onclick="startQuiz()"
            >
                🔄 Try Again
            </button>

            <button
                class="run"
                onclick="showCourses()"
            >
                📚 Courses
            </button>

        </section>
    `;

}


function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}


buildSidebar();
home();