const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const courses = {
  java: {
    icon: 'J', accent: 'java-accent', label: 'Java full stack', title: 'Java Full Stack Developer', duration: '24 weeks', level: 'Beginner friendly',
    description: 'Master Java, Spring Boot, REST APIs, databases, frontend development and AI applications.',
    modules: [
      { title: 'Module 1', name: 'Core Java Essentials', description: 'Syntax, OOP, collections, exceptions and Java 8', units: ['Java platform: JDK, JRE and JVM','Project setup and your first Java program','Variables, data types and type casting','Operators, expressions and user input','Conditions, loops and control flow','Methods, parameters and method overloading','Arrays, strings and common utility classes','Classes, objects, constructors and encapsulation','Inheritance, polymorphism and abstraction','Interfaces, packages and access modifiers','Collections: List, Set, Map and iterators','Exceptions, lambdas, streams and Optional'] },
      { title: 'Module 2', name: 'Spring Boot & REST APIs', description: 'Build secure, production-style Java web services', units: ['Spring Framework and dependency injection','Creating a Spring Boot application','Application properties and project profiles','Controllers, services and repository layers','Building REST endpoints and request mappings','DTOs, validation and global exception handling','Spring Data JPA and entity relationships','Pagination, sorting and custom queries','Spring Security fundamentals','JWT authentication and role-based authorization','API documentation and testing with Postman'] },
      { title: 'Module 3', name: 'Database & Frontend', description: 'Connect MySQL with a responsive web interface', units: ['Relational database concepts and MySQL setup','Tables, keys and database normalization','SQL queries, joins, indexes and transactions','Connecting MySQL to Spring Boot','HTML semantics and accessible page structure','CSS layouts with Flexbox and Grid','Responsive design and media queries','JavaScript variables, functions and arrays','DOM manipulation and event handling','Fetch API, promises and async/await','Form validation and error messages','Frontend and REST API integration'] },
      { title: 'Module 4', name: 'AI Application Development', description: 'Build an AI chatbot with Java and Spring Boot', units: ['Generative AI and large language model basics','Prompt design for reliable application outputs','Configuring Gemini and OpenAI APIs','Calling an AI model from Spring Boot','Designing the chatbot REST service','Conversation history and context management','Error handling, safety and rate limits','Connecting the chatbot to the frontend'] },
      { title: 'Module 5', name: 'Projects & Capstone', description: 'Apply the complete stack to portfolio-ready work', units: ['Student management system planning','Building the student management application','E-commerce REST API architecture','Implementing products, orders and authentication','Full-stack capstone development','Testing, deployment and project presentation'] }
    ]
  },
  python: {
    icon: 'Py', accent: 'python-accent', label: 'Python full stack', title: 'Python Full Stack Developer', duration: '22 weeks', level: 'Beginner friendly',
    description: 'Learn Python, Django, REST APIs, databases and AI-powered application development.',
    modules: [
      {
        title: 'Module 1', name: 'Python Programming', description: 'Functions, OOP, modules, files and exceptions',
        units: [
          'Python installation, environments and project setup',
          'Variables, data types and type conversion',
          'Operators, conditions and control flow',
          'Loops, ranges and comprehensions',
          'Functions, parameters and return values',
          'Lists, tuples, sets and dictionaries',
          'Strings and regular expressions',
          'Classes, objects, inheritance and polymorphism',
          'Modules, packages and dependency management',
          'Reading and writing files',
          'Exception handling and custom exceptions',
          'Testing and debugging Python programs'
        ]
      },
      {
        title: 'Module 2', name: 'Django & REST APIs', description: 'Models, views, templates, authentication and REST APIs',
        units: [
          'Django architecture and project setup',
          'Applications, settings and URL routing',
          'Models, migrations and the Django ORM',
          'Views, templates and template inheritance',
          'Forms, validation and user messages',
          'Static files and media uploads',
          'Authentication, permissions and sessions',
          'Django admin customization',
          'Django REST Framework fundamentals',
          'Serializers, viewsets and routers',
          'Token authentication and protected endpoints',
          'API testing, validation and error handling'
        ]
      },
      {
        title: 'Module 3', name: 'Database & API Integration', description: 'SQL, ORM, CRUD and external API integration',
        units: [
          'Relational database concepts and SQL basics',
          'Tables, constraints and relationships',
          'Queries, joins, grouping and aggregation',
          'Database normalization and indexes',
          'CRUD operations with the Django ORM',
          'Advanced ORM queries and optimization',
          'Pagination, filtering and search',
          'Consuming third-party REST APIs',
          'Building reusable API service layers',
          'Environment variables and secret management',
          'Transactions and data integrity',
          'Deploying a database-backed application'
        ]
      },
      {
        title: 'Module 4', name: 'AI Application Development', description: 'Build an AI chatbot using Python and Gemini/OpenAI APIs',
        units: [
          'Generative AI and language model fundamentals',
          'Prompt design and structured model outputs',
          'Configuring Gemini and OpenAI SDKs',
          'Calling AI services securely from Python',
          'Building the chatbot service layer',
          'Conversation memory and context management',
          'Connecting the chatbot to Django REST APIs',
          'Safety controls, error handling and rate limits',
          'Testing and monitoring AI responses',
          'Deploying the completed AI application'
        ]
      },
      {
        title: 'Module 5', name: 'Projects & Capstone', description: 'Django management system and AI application',
        units: [
          'Django management system planning',
          'Implementing users, roles and core workflows',
          'Building and documenting project APIs',
          'AI application architecture and development',
          'Frontend integration and responsive views',
          'Automated tests and quality checks',
          'Deployment, documentation and final presentation'
        ]
      }
    ]
  },
  testing: {
    icon: '✓', accent: 'testing-accent', label: 'Automation', title: 'Automation Testing', duration: '16 weeks', level: 'Intermediate',
    description: 'Learn modern web and API automation with practical frameworks and real testing workflows.',
    modules: [
      {
        title: 'Module 1', name: 'Selenium Automation', description: 'Locators, waits, windows, frames, alerts and actions',
        units: [
          'Automation testing fundamentals and Selenium setup',
          'WebDriver architecture and browser configuration',
          'Locating elements with ID, CSS and XPath',
          'Working with inputs, buttons and dropdowns',
          'Implicit, explicit and fluent waits',
          'Handling multiple windows and browser tabs',
          'Working with frames and nested frames',
          'Handling alerts, prompts and confirmations',
          'Mouse, keyboard and advanced user actions',
          'Screenshots, JavaScript execution and debugging',
          'Synchronizing tests for dynamic web applications'
        ]
      },
      {
        title: 'Module 2', name: 'Automation Frameworks', description: 'PyTest/TestNG, Page Object Model and reporting',
        units: [
          'Test framework structure and project organization',
          'Creating and running PyTest or TestNG test cases',
          'Assertions, annotations, fixtures and test lifecycle',
          'Parameters and data-driven testing',
          'Page Object Model design principles',
          'Reusable page components and utility classes',
          'Configuration files and environment management',
          'Parallel test execution and test suites',
          'Logging, screenshots and failure handling',
          'HTML, Allure and Extent test reports',
          'Continuous integration with GitHub Actions or Jenkins'
        ]
      },
      {
        title: 'Module 3', name: 'API Testing', description: 'REST APIs, Postman and automated service validation',
        units: [
          'HTTP methods, status codes and REST fundamentals',
          'Postman collections, environments and variables',
          'Sending path, query and header parameters',
          'Testing JSON request and response bodies',
          'Authentication with API keys, Basic Auth and tokens',
          'Writing Postman test scripts and assertions',
          'Chaining requests and managing test data',
          'Automating REST API tests in code',
          'Schema validation and negative test scenarios',
          'Running collections with Newman in CI pipelines'
        ]
      },
      {
        title: 'Module 4', name: 'AI-Assisted Testing', description: 'AI-generated test cases, test data and smarter analysis',
        units: [
          'AI opportunities and limitations in software testing',
          'Writing prompts for high-quality test scenarios',
          'Generating positive, negative and edge test cases',
          'Creating realistic and privacy-safe test data',
          'Using AI to explain failures and application logs',
          'Generating page objects and automation helpers',
          'Reviewing AI-generated tests for correctness',
          'Adding AI-assisted workflows to a test framework'
        ]
      },
      {
        title: 'Module 5', name: 'Automation Capstone Project', description: 'Build a complete maintainable automation framework',
        units: [
          'Selecting the application and defining test scope',
          'Designing the automation framework architecture',
          'Implementing reusable page objects and utilities',
          'Adding UI, API and data-driven test coverage',
          'Configuring logs, screenshots and rich reports',
          'Executing tests in a continuous integration pipeline',
          'Documenting and presenting the completed framework'
        ]
      }
    ]
  },
  ai: {
    icon: 'AI', accent: 'ai-accent', label: 'AI development', title: 'AI Application Development', duration: '18 weeks', level: 'Intermediate',
    description: 'Build practical AI applications and chatbots using Java or Python with modern tools.',
    modules: [
      {
        title: 'Module 1', name: 'Generative AI Foundations', description: 'LLMs, prompts and context',
        units: [
          'Artificial intelligence, machine learning and generative AI',
          'How large language models process and generate text',
          'Tokens, context windows and model limitations',
          'Writing clear instructions and effective prompts',
          'Zero-shot, one-shot and few-shot prompting',
          'System prompts, roles and conversation structure',
          'Controlling tone, format and structured outputs',
          'Prompt templates and reusable prompt patterns',
          'Hallucinations, grounding and response verification',
          'Responsible AI, privacy, bias and safety basics'
        ]
      },
      {
        title: 'Module 2', name: 'AI APIs & Integration', description: 'Gemini and OpenAI API integration',
        units: [
          'Creating Gemini and OpenAI developer accounts',
          'API keys, environment variables and secure configuration',
          'Understanding models, endpoints and request parameters',
          'Sending chat and text-generation requests',
          'Working with JSON and structured model responses',
          'Streaming responses in a user interface',
          'Conversation history and context management',
          'Function calling and tool-enabled assistants',
          'Handling errors, retries and rate limits',
          'Tracking tokens, usage and API costs',
          'Testing and comparing model responses'
        ]
      },
      {
        title: 'Module 3', name: 'Java AI Chatbot', description: 'Build a chatbot with Spring Boot and an AI API',
        units: [
          'Creating the Spring Boot chatbot project',
          'Configuring AI credentials and application properties',
          'Building the AI service and REST controller',
          'Sending prompts with WebClient or an AI SDK',
          'Designing request and response DTOs',
          'Maintaining user sessions and conversation history',
          'Adding prompt templates and system instructions',
          'Creating the responsive chatbot interface',
          'Connecting the frontend to the Spring Boot API',
          'Validation, exception handling and safe responses',
          'Testing and deploying the Java chatbot'
        ]
      },
      {
        title: 'Module 4', name: 'Python AI Chatbot', description: 'Build a chatbot with Python and an AI API',
        units: [
          'Creating the Python chatbot environment',
          'Configuring Gemini and OpenAI Python SDKs',
          'Building reusable prompt and model services',
          'Creating a FastAPI or Flask chatbot endpoint',
          'Validating requests and structured responses',
          'Storing and retrieving conversation history',
          'Building a simple web-based chat interface',
          'Streaming model responses to the browser',
          'Logging, error handling and safety controls',
          'Testing and deploying the Python chatbot'
        ]
      },
      {
        title: 'Module 5', name: 'AI Projects & Capstone', description: 'Resume analyzer, question generator and chatbot',
        units: [
          'Planning AI features and defining success criteria',
          'Building an AI-powered resume analyzer',
          'Extracting skills and generating resume feedback',
          'Building an interview question generator',
          'Generating questions by role and difficulty',
          'Creating a knowledge-based support chatbot',
          'Adding document context to chatbot prompts',
          'Evaluating accuracy, relevance and response quality',
          'Securing and deploying the final applications',
          'Documenting and presenting the capstone portfolio'
        ]
      }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const courseKey = courses[params.get('course')] ? params.get('course') : 'java';
const course = courses[courseKey];
const moduleList = $('#module-list');

document.title = `${course.title} — EduMall`;
$('#breadcrumb-course').textContent = course.title;
$('#detail-label').textContent = course.label;
$('#detail-title').textContent = course.title;
$('#detail-description').textContent = course.description;
$('#detail-duration').textContent = course.duration;
$('#detail-level').textContent = course.level;
const detailIcon = $('#detail-icon');
detailIcon.textContent = course.icon;
detailIcon.className = `detail-course-icon ${course.accent}`;

function closeOpenModules(except) {
  $$('.module-toggle[aria-expanded="true"]', moduleList).forEach((toggle) => {
    if (toggle === except) return;
    toggle.setAttribute('aria-expanded', 'false');
    $(`#${toggle.getAttribute('aria-controls')}`, moduleList).hidden = true;
  });
}

function renderModules() {
  if (!course.modules.length) {
    $('#module-count').hidden = true;
    $('#curriculum-empty').hidden = false;
    return;
  }

  $('#module-count').textContent = `${course.modules.length} modules`;
  course.modules.forEach((module, index) => {
    const item = document.createElement('article');
    const panelId = `module-panel-${index + 1}`;
    item.className = 'module-item';
    item.innerHTML = `
      <button class="module-toggle" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span class="module-badge">${module.title}</span>
        <span class="module-title"><strong>${module.name}</strong><small>${module.description}</small></span>
        <span class="unit-count">${module.units.length} units</span>
        <span class="module-chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="module-panel" id="${panelId}" hidden>
        <ul>${module.units.map((unit) => `<li><span aria-hidden="true">✓</span>${unit}</li>`).join('')}</ul>
      </div>`;
    const toggle = $('.module-toggle', item);
    const panel = $('.module-panel', item);
    toggle.addEventListener('click', () => {
      const willOpen = toggle.getAttribute('aria-expanded') === 'false';
      closeOpenModules(toggle);
      toggle.setAttribute('aria-expanded', String(willOpen));
      panel.hidden = !willOpen;
    });
    moduleList.append(item);
  });

  const requestedModule = Number(params.get('module'));
  if (Number.isInteger(requestedModule) && requestedModule > 0) {
    $$('.module-toggle')[requestedModule - 1]?.click();
  }
}

renderModules();

const mobileToggle = $('.mobile-toggle');
const navLinks = $('#nav-links');
mobileToggle.addEventListener('click', () => {
  const open = mobileToggle.getAttribute('aria-expanded') === 'true';
  mobileToggle.setAttribute('aria-expanded', String(!open));
  mobileToggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  navLinks.classList.toggle('open', !open);
});

$('#detail-search').addEventListener('submit', (event) => {
  event.preventDefault();
  const term = $('#search').value.trim();
  window.location.href = term ? `courses.html?q=${encodeURIComponent(term)}` : 'courses.html';
});

let toastTimer;
$$('.socials a').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  const toast = $('#toast');
  toast.textContent = 'This demo link is ready for your social profile.';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}));

$('#year').textContent = new Date().getFullYear();
