# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX? 

Your answer: JSX stands for JavaScript XML and I believe XML stands for Extensible Markdown Language. It was created to combine the languages HTML and JavaScript to be used together. One syntax difference between HTML and JSX is the use of JSX fragments <> </> in order to call on multiple components. With HTML, you can use however many components without needing fragment tags. 

Researched answer: JSX stands for JavaScript Extensible Markdown Language or JavaScript Syntax Extension and provides syntactical sugar when creating apps in React. Syntactical sugar is syntax that makes code simpler to read and understand. When using JSX with React, we see the significant relationship between rendering logic and displaying the User Interface(UI) of the data. A syntax difference between HTML and JSX is that JSX refers to HTML's 'class' attribute as 'className' since 'class' is preserved by JavaScript.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package manager for all dependencies files. When running the command yarn in my terminal, three files/folders get downloaded to my code editor. A node-modules folder, package.json, and yarn.lock files.


Researched answer: Yarn is the main packaging manager for JavaScript. It was created in 2016 by FaceBook in order to enhance consistency, security, and performance when working with large code projects. When running the command yarn on my terminal it will run 'yarn install', which downloads all dependencies needed for a project within package.json. The package.json file is located within the node nodules folder, which every application has to form the foundation of an app. 

3. What is a React component?

Your answer: A React component is an element within an application that belongs to its own file. Having separate components helps keep code organized between logical and display components. Usually the parent component contains majority of the logic and invokes the functionality of its child components using component calls. The child components are typically UI focused. It's common practice to create a components folder within the src folder and hold the components' files within it.

Researched answer: A React component is a self-sufficient block of code than can be used over and over again. They work just like functions in Javascript, but are contained within their own file and return code in HTML. These components are written in PascalCase, so the first letter has to be capitalized unlike JavaScript functions in camelCase. There are two types of React components: a Class component and a Function component. Class components require 'extends React.component' right after the class name as well as the render() method to return HTML. Function components require less code, return HTML without the render() method and behave similiarly to Class components. To invoke the component, we use a component call syntax that is the class name in a self closing tag. For example, if we had our parent component named App.js with a component called Profile.js, we render the Profile component within the return of App.js as such: <Profile />. 


4. What is the difference between state values and props in React?

Your answer: The difference between state values and props in React is that state values are used when data needs to be stored and updated in our application. Props is short for properties and used when needing to create a pipeline between components to access data within objects. 

Researched answer: While state values and props in React are both JavaScript objects, props work like function parameters and pass data to components and state values work similar to when variables are declared within a function, but contained within the component. If a component will need to modify an attribute, then the attribute needs to be part of the state. If not, then it will be prop since components can't change its props.

5. What is the DOM?

Your answer: The DOM stands for Document Object Model and represents what we see on a website.

Researched answer: The Document Object Model is an interface without a specific language that enables programs to dynamically access and modify the code of a program. It acts as a visual representation of the structure and content of website. It contains nodes and objects to make it easier for programs and developers to interact with it.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: A div tag acts as a container for code. Its syntax is an opening and closing tag <div></div>. There can be div tags nested within a div to represent a container within a container. I've never used a span tag, but my educated guess would be that unlike div tags used to separate and contain code, span tags are used for a broader scope of code with multiple code blocks.

Researched answer: The difference between a div tag and a span tag are that div tags are used for organizing blocks of code and to style document elements, but a span tag styles and organizes inline elements. For example, its best practice to use div when you want to style an entire paragraph, but use span if you just want to style one part/line of the paragraph using CSS.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Also known as OOP, it was created for working with complex and large programming systems so that small changes in a program wouldn't create issues for the whole program. An example of an object-oriented language is Ruby.

2. Ruby: Ruby is a language that follows object-oriented programming and commonly has the mantra 'everything is an object' because all data types can be defined by a class. Mac computers include Ruby pre-installed and just needs 'irb' typed into the terminal to use it.

3. Implicit return: Using the keyword return is not required for every method in Ruby because having an implicit return allows the program to take the last line in a method and automatically return it without any keyword.

4. Ruby blocks: An anonymous function that gets passed to a method with the keywords 'do' and 'end. Ruby blocks are used to change a method outcome and give extra information needed.

5. Ruby hashes: Similiar to arrays, hashes are a collection of unique keys and values. Instead of the values befing referenced by their index, they are referenced by their unique keys. Ruby hashes can also be iterated over like an array with for loops or high order functions.
