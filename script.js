/* =================================
   CODELEARN
   100+ LESSONS
================================= */


/* =================================
   LESSON DATA
================================= */

const courses = {

HTML: [
["Introduction","تعرف على HTML ولشنوة نستعملوه.","<h1>Hello World!</h1>"],
["Basic","البنية الأساسية لصفحة HTML.","<!DOCTYPE html>\n<html>\n<body>\n<h1>Hello</h1>\n</body>\n</html>"],
["Elements","تعلم HTML Elements.","<h1>Title</h1>\n<p>Paragraph</p>"],
["Attributes","تعلم HTML Attributes.","<a href='https://example.com'>Link</a>"],
["Headings","العناوين من h1 إلى h6.","<h1>Heading 1</h1>\n<h2>Heading 2</h2>"],
["Paragraphs","كيفاش تعمل paragraph.","<p>Hello World</p>"],
["Styles","إضافة style داخل HTML.","<h1 style='color:red'>Hello</h1>"],
["Formatting","Bold و italic و mark.","<b>Bold</b>\n<i>Italic</i>\n<mark>Mark</mark>"],
["Comments","كيفاش تعمل comments.","<!-- Comment -->"],
["Colors","الألوان في HTML.","<h1 style='color:blue'>Blue</h1>"],
["Links","إنشاء الروابط.","<a href='#'>Click me</a>"],
["Images","إضافة الصور.","<img src='https://via.placeholder.com/200'>"],
["Lists","القوائم.","<ul><li>HTML</li><li>CSS</li></ul>"],
["Tables","الجداول.","<table border='1'><tr><td>Hello</td></tr></table>"],
["Forms","إنشاء Forms.","<form><input placeholder='Name'><button>Send</button></form>"],
["Input Types","أنواع input.","<input type='text'>\n<input type='email'>\n<input type='number'>"],
["Buttons","الأزرار.","<button>Click Me</button>"],
["Classes","استعمال class.","<p class='title'>Hello</p>"],
["IDs","استعمال id.","<h1 id='title'>Hello</h1>"],
["Block & Inline","الفرق بين block و inline.","<div>Block</div><span>Inline</span>"],
["Semantic HTML","HTML semantic elements.","<header>Header</header>\n<main>Main</main>\n<footer>Footer</footer>"],
["Header","إنشاء Header.","<header>My Website</header>"],
["Navigation","إنشاء navigation.","<nav><a href='#'>Home</a></nav>"],
["Section","تنظيم الصفحة بـ section.","<section><h2>About</h2></section>"],
["Article","استعمال article.","<article>My Article</article>"],
["Footer","إنشاء Footer.","<footer>Copyright 2026</footer>"],
["Audio","إضافة audio.","<audio controls></audio>"],
["Video","إضافة video.","<video controls></video>"],
["Iframes","عرض محتوى داخل iframe.","<iframe src='https://example.com'></iframe>"],
["HTML Project","مشروع صفحة شخصية.","<h1>My Portfolio</h1>\n<p>Welcome!</p>"]
],

CSS: [
["Introduction","تعرف على CSS.","h1 { color: red; }"],
["Syntax","CSS Syntax.","h1 {\n color: red;\n}"],
["Selectors","CSS Selectors.","p { color: blue; }"],
["Colors","CSS Colors.","h1 { color: purple; }"],
["Backgrounds","Backgrounds.","body { background: lightblue; }"],
["Borders","Borders.","div { border: 2px solid black; }"],
["Margins","Margins.","div { margin: 20px; }"],
["Padding","Padding.","div { padding: 20px; }"],
["Width","Width و Height.","div { width: 300px; height: 100px; }"],
["Box Model","CSS Box Model.","div { padding: 20px; border: 5px solid black; margin: 20px; }"],
["Text","Text styling.","p { text-align: center; }"],
["Fonts","Fonts.","p { font-size: 20px; font-weight: bold; }"],
["Links","Styling links.","a { color: green; }"],
["Lists","Styling lists.","ul { list-style: square; }"],
["Display","Display property.","div { display: inline-block; }"],
["Position","Position.","div { position: relative; left: 20px; }"],
["Z-Index","Layering elements.","div { z-index: 5; }"],
["Overflow","Overflow.","div { overflow: auto; }"],
["Opacity","Opacity.","img { opacity: .5; }"],
["Combinators","CSS combinators.","div p { color: red; }"],
["Pseudo Classes","Hover وغيره.","button:hover { transform: scale(1.1); }"],
["Pseudo Elements","Before و After.","p::before { content: '👉'; }"],
["Flexbox","Flexbox basics.",".box { display: flex; justify-content: center; }"],
["Flex Direction","Direction متاع Flex.",".box { display: flex; flex-direction: column; }"],
["Flex Wrap","Flex wrapping.",".box { display: flex; flex-wrap: wrap; }"],
["Grid","CSS Grid.",".box { display: grid; grid-template-columns: 1fr 1fr; }"],
["Grid Columns","Grid columns.",".box { display: grid; grid-template-columns: repeat(3,1fr); }"],
["Gap","المسافة بين العناصر.",".box { display: flex; gap: 20px; }"],
["Variables","CSS Variables.",":root { --green: green; }"],
["Shadows","Box shadow.","div { box-shadow: 0 5px 20px #888; }"],
["Gradients","Gradients.","body { background: linear-gradient(red,blue); }"],
["Transforms","Transform.","div { transform: rotate(10deg); }"],
["Transitions","Transitions.","button { transition: .3s; }"],
["Animations","Animations.","@keyframes move { from {left:0} to {left:100px} }"],
["Media Queries","Responsive design.","@media(max-width:600px){ body{background:red;} }"],
["Responsive Design","Sites تخدم على الهاتف.","img { max-width:100%; }"],
["CSS Project","مشروع Landing Page.",".hero { text-align:center; padding:100px; }"]
],

JavaScript: [
["Introduction","تعرف على JavaScript.","alert('Hello');"],
["Syntax","JavaScript Syntax.","let name = 'Adam';"],
["Comments","Comments.","// Hello"],
["Variables","Variables.","let age = 17;"],
["Let & Const","let و const.","let x = 5;\nconst y = 10;"],
["Data Types","أنواع البيانات.","let name='Adam';\nlet age=17;\nlet ok=true;"],
["Operators","Operators.","let x = 10 + 5;"],
["Strings","Strings.","let name='Adam';\nconsole.log(name);"],
["Numbers","Numbers.","let x = 10;\nconsole.log(x * 2);"],
["Arrays","Arrays.","let skills=['HTML','CSS','JS'];"],
["Array Methods","Array methods.","let x=[1,2,3];\nx.push(4);"],
["Objects","Objects.","let user={name:'Adam',age:17};"],
["Functions","Functions.","function hello(){ alert('Hello'); }\nhello();"],
["Parameters","Function parameters.","function hello(name){ console.log(name); }"],
["Return","Return values.","function add(a,b){ return a+b; }"],
["If Else","Conditions.","if(age>=18){ console.log('Adult'); }"],
["Switch","Switch.","switch(day){ case 1: console.log('Monday'); }"],
["For Loop","For loop.","for(let i=0;i<5;i++){ console.log(i); }"],
["While Loop","While loop.","let i=0;\nwhile(i<5){ i++; }"],
["Break","Break loop.","for(let i=0;i<10;i++){ if(i==5) break; }"],
["Continue","Continue.","for(let i=0;i<5;i++){ if(i==2) continue; }"],
["Events","Events.","button.onclick=function(){ alert('Hi'); };"],
["DOM","DOM.","document.getElementById('title');"],
["Change HTML","تغيير HTML.","document.getElementById('title').innerHTML='Hi';"],
["Change CSS","تغيير CSS.","document.body.style.background='red';"],
["Forms","Forms.","document.querySelector('input').value;"],
["Validation","Form validation.","if(name===''){ alert('Enter name'); }"],
["Dates","Dates.","let d=new Date();"],
["Math","Math.","console.log(Math.random());"],
["JSON","JSON.","JSON.stringify({name:'Adam'});"],
["Local Storage","LocalStorage.","localStorage.setItem('name','Adam');"],
["Classes","Classes.","class User { constructor(name){this.name=name;} }"],
["Modules","Modules.","export default hello;"],
["Promises","Promises.","new Promise((resolve)=>resolve());"],
["Async","Async functions.","async function hello(){}"],
["Fetch","Fetch API.","fetch('https://example.com');"],
["APIs","التعامل مع APIs.","fetch('/api/data');"],
["JavaScript Project","مشروع To-Do List.","let tasks=[];\ntasks.push('Learn JS');"]
],

Python: [
["Introduction","تعرف على Python.","print('Hello World')"],
["Syntax","Python syntax.","if 10 > 5:\n    print('Yes')"],
["Variables","Variables.","name='Adam'\nage=17"],
["Data Types","Data types.","name='Adam'\nage=17\nok=True"],
["Numbers","Numbers.","x=10\ny=5\nprint(x+y)"],
["Strings","Strings.","name='Adam'\nprint('Hello '+name)"],
["Booleans","Boolean.","online=True"],
["Operators","Operators.","x=10+5"],
["Lists","Lists.","skills=['HTML','CSS','Python']"],
["List Methods","List methods.","x=[1,2]\nx.append(3)"],
["Tuples","Tuples.","x=('HTML','CSS')"],
["Sets","Sets.","x={1,2,3}"],
["Dictionaries","Dictionaries.","user={'name':'Adam','age':17}"],
["If","If statement.","if age>=18:\n    print('Adult')"],
["Elif","Elif.","if x>10:\n    print('Big')\nelif x==10:\n    print('Equal')"],
["For Loop","For loop.","for i in range(5):\n    print(i)"],
["While Loop","While loop.","i=0\nwhile i<5:\n    i+=1"],
["Break","Break.","for i in range(10):\n    if i==5: break"],
["Continue","Continue.","for i in range(5):\n    if i==2: continue"],
["Functions","Functions.","def hello():\n    print('Hello')"],
["Arguments","Function arguments.","def hello(name):\n    print(name)"],
["Return","Return.","def add(a,b):\n    return a+b"],
["Lambda","Lambda.","double=lambda x:x*2"],
["Scope","Variable scope.","x=10"],
["Modules","Modules.","import math\nprint(math.sqrt(25))"],
["Random","Random module.","import random\nprint(random.randint(1,10))"],
["Dates","Dates.","import datetime\nprint(datetime.datetime.now())"],
["Files","Files.","file=open('test.txt','w')\nfile.write('Hello')\nfile.close()"],
["Try Except","Errors.","try:\n    x=int('abc')\nexcept:\n    print('Error')"],
["Classes","Classes.","class User:\n    pass"],
["Objects","Objects.","class User:\n    def __init__(self,name):\n        self.name=name"],
["Inheritance","Inheritance.","class Student(User):\n    pass"],
["Iterators","Iterators.","x=iter([1,2,3])"],
["Generators","Generators.","def numbers():\n    yield 1"],
["JSON","JSON.","import json"],
["Regex","Regular expressions.","import re"],
["Virtual Environment","Python environments.","python -m venv env"],
["Python Project","مشروع calculator.","def add(a,b):\n    return a+b"]
]

};


/* =================================
   BUILD LESSONS
================================= */

let lessons = [];

for (const language in courses) {

    courses[language].forEach((item, index) => {

        lessons.push({
            id: `${language}-${index}`,
            language: language,
            title: item[0],
            description: item[1],
            code: item[2]
        });

    });

}


/* =================================
   SIDEBAR
================================= */

function buildSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    sidebar.innerHTML = `
        <button onclick="home()">🏠 Accueil</button>
        <button onclick="about()">👤 À propos de moi</button>
        <button onclick="startQuiz()">🎯 Défis & Score</button>
    `;

    for (const language in courses) {

        const title =
            document.createElement("h3");

        title.textContent =
            language;

        sidebar.appendChild(title);

        courses[language].forEach(
            (lesson, index) => {

                const button =
                    document.createElement("button");

                button.textContent =
                    `${index + 1}. ${lesson[0]}`;

                button.onclick = () => {

                    const found =
                        lessons.find(
                            x =>
                            x.language === language &&
                            x.title === lesson[0]
                        );

                    openLesson(found.id);

                };

                sidebar.appendChild(button);

            }
        );

    }

}


/* =================================
   HOME
================================= */

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
                تعلم البرمجة بطريقة بسيطة وممتعة.
                HTML, CSS, JavaScript و Python.
            </p>

            <div class="buttons">

                <button
                    class="big-card"
                    onclick="startQuiz()"
                >
                    <span>🎯</span>
                    <strong>Défis & Score</strong>
                    <br>
                    اختبر معلوماتك
                </button>

                <button
                    class="big-card"
                    onclick="showCourses()"
                >
                    <span>📚</span>
                    <strong>Les Cours</strong>
                    <br>
                    أكثر من 100 درس
                </button>

            </div>

            <button
                class="run"
                onclick="about()"
            >
                👤 تعرف عليّ
            </button>

        </section>
    `;

}


/* =================================
   COURSES
================================= */

function showCourses() {

    document.getElementById("app").innerHTML = `

        <section class="hero">

            <div class="label">
                COURSES
            </div>

            <h1>
                📚 Choose Your Course
            </h1>

            <p>
                عندك أكثر من 100 درس
                في 4 لغات برمجة.
            </p>

            <div class="buttons">

                <button
                    class="big-card"
                    onclick="openLesson('HTML-0')"
                >
                    <span>🌐</span>
                    <strong>HTML</strong>
                </button>

                <button
                    class="big-card"
                    onclick="openLesson('CSS-0')"
                >
                    <span>🎨</span>
                    <strong>CSS</strong>
                </button>

                <button
                    class="big-card"
                    onclick="openLesson('JavaScript-0')"
                >
                    <span>⚡</span>
                    <strong>JavaScript</strong>
                </button>

                <button
                    class="big-card"
                    onclick="openLesson('Python-0')"
                >
                    <span>🐍</span>
                    <strong>Python</strong>
                </button>

            </div>

        </section>
    `;

}


/* =================================
   ABOUT
================================= */

function about() {

    document.getElementById("app").innerHTML = `

        <section class="about">

            <div class="label">
                ABOUT ME
            </div>

            <h1>
                👋 Salut !
            </h1>

            <div class="about-card">

                <h2>
                    أنا آدم
                </h2>

                <p>
                    نحب البرمجة والتكنولوجيا
                    ونعمل على تطوير مهاراتي
                    في Web Development.
                </p>

                <p>
                    عملت CodeLearn باش نخلي
                    تعلم البرمجة أسهل وأمتع،
                    خاصة للمبتدئين.
                </p>

                <p>
                    🚀 HTML
                    <br>
                    🎨 CSS
                    <br>
                    ⚡ JavaScript
                    <br>
                    🐍 Python
                </p>

            </div>

        </section>
    `;

}


/* =================================
   OPEN LESSON
================================= */

function openLesson(id) {

    const lesson =
        lessons.find(x => x.id === id);

    if (!lesson) return;

    const index =
        lessons.indexOf(lesson);

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

            <div class="box">
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
                    🧪 Try it Yourself
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

            <div class="nav">

                <button
                    onclick="previousLesson(${index})"
                >
                    ← Previous
                </button>

                <button
                    onclick="nextLesson(${index})"
                >
                    Next →
                </button>

            </div>

        </article>
    `;

    window.scrollTo(0,0);

}


/* =================================
   NEXT / PREVIOUS
================================= */

function nextLesson(index) {

    if (index < lessons.length - 1) {

        openLesson(
            lessons[index + 1].id
        );

    }

}

function previousLesson(index) {

    if (index > 0) {

        openLesson(
            lessons[index - 1].id
        );

    }

}


/* =================================
   RUN
================================= */

function runCode() {

    const code =
        document.getElementById("editor").value;

    document.getElementById("output").srcdoc =
        code;

}


/* =================================
   SEARCH
================================= */

function searchLessons() {

    const value =
        document.getElementById("search")
        .value
        .toLowerCase();

    const results =
        lessons.filter(lesson =>
            lesson.title
            .toLowerCase()
            .includes(value)
        );

    if (!value) return;

    document.getElementById("app").innerHTML = `

        <h1>
            🔎 Search results
        </h1>

        <br>

        ${results.map(lesson => `

            <button
                class="answer"
                onclick="openLesson('${lesson.id}')"
            >
                ${lesson.language}
                →
                ${lesson.title}
            </button>

        `).join("")}

    `;

}


/* =================================
   DARK MODE
================================= */

function toggleDark() {

    document.body.classList.toggle("dark");

}


/* =================================
   QUIZ
================================= */

const questions = [

    ["HTML is used for?", 
        ["Structure","Design","Database","Games"],0],

    ["CSS is used for?",
        ["Structure","Design","Database","Python"],1],

    ["JavaScript makes websites?",
        ["Interactive","Blue","Offline","Smaller"],0],

    ["Python uses which keyword for functions?",
        ["function","def","func","create"],1],

    ["HTML heading starts with?",
        ["<h1>","<p>","<head>","<title>"],0],

    ["CSS color property changes?",
        ["Text color","Width","Height","Position"],0],

    ["JavaScript variable can use?",
        ["let","make","variable","newvar"],0],

    ["Python list uses?",
        ["[]","{}","()","<>"],0],

    ["CSS Flexbox starts with?",
        ["display:flex","flex:on","box:flex","display:box"],0],

    ["JavaScript arrays store?",
        ["Multiple values","Only text","Only numbers","CSS"],0]

];


let questionIndex = 0;
let score = 0;


/* =================================
   QUIZ START
================================= */

function startQuiz() {

    questionIndex = 0;
    score = 0;

    showQuestion();

}


function showQuestion() {

    const q =
        questions[questionIndex];

    document.getElementById("app").innerHTML = `

        <section class="quiz">

            <div class="label">
                CODING CHALLENGE
            </div>

            <h1>
                🎯 Challenge
            </h1>

            <div class="score">
                Score:
                ${score}/10
            </div>

            <div class="question">

                <h2>
                    ${questionIndex + 1}/10
                </h2>

                <p>
                    ${q[0]}
                </p>

                <br>

                ${q[1].map(
                    (answer,index) => `

                    <button
                        class="answer"
                        onclick="answer(${index})"
                    >
                        ${answer}
                    </button>

                `
                ).join("")}

            </div>

        </section>

    `;

}


/* =================================
   ANSWER
================================= */

function answer(index) {

    const correct =
        questions[questionIndex][2];

    if (index === correct) {

        score++;

    }

    questionIndex++;

    if (
        questionIndex >=
        questions.length
    ) {

        showResult();

    } else {

        showQuestion();

    }

}


/* =================================
   RESULT
================================= */

function showResult() {

    let message;

    if (score >= 9) {

        message = "🔥 Excellent !";

    } else if (score >= 7) {

        message = "👏 Très bien !";

    } else if (score >= 5) {

        message = "👍 Pas mal !";

    } else {

        message = "💪 Continue à apprendre !";

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
                Score final:
                ${score}/10
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


/* =================================
   ESCAPE
================================= */

function escapeHTML(text) {

    return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;");

}


/* =================================
   START
================================= */

buildSidebar();
home();