let questions = [
    {
        num: 1,
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Markup Language",
            "Hypertrack Mode Language",
            "Hypertext Markup League"
        ]
    },
    {
        num: 2,
        question: "Which HTML tag is used for creating hyperlinks?",
        answer: "<a>",
        options: ["<link>", "<a>", "<h1>", "<div>"]
    },
    {
        num: 3,
        question: "Which CSS property is used to change the text color of an element?",
        answer: "color",
        options: ["font-color", "text-color", "color", "text-style"]
    },
    {
        num: 4,
        question: "What is the correct way to comment out multiple lines in JavaScript?",
        answer: "/* This is a comment */",
        options: [
            "// This is a comment",
            "<!-- This is a comment -->",
            "# This is a comment",
            "/* This is a comment */"
        ]
    },
    {
        num: 5,
        question: "Which HTML element is used to define the structure of an HTML document?",
        answer: "<html>",
        options: ["<doctype>", "<head>", "<structure>", "<html>"]
    },
    {
        num: 6,
        question: "What is the purpose of the CSS `z-index` property?",
        answer: "To control the stacking order of elements",
        options: [
            "To control the font size of text",
            "To add shadows to elements",
            "To control the spacing between elements",
            "To control the stacking order of elements"
        ]
    },
    {
        num: 7,
        question: "Which operator is used for string concatenation in JavaScript?",
        answer: "+",
        options: ["&", "+", "*", "-"]
    },
    {
        num: 8,
        question: "In CSS, which property is used to change the size of an element's border?",
        answer: "border-width",
        options: ["border-size", "border-change", "border-width", "border-style"]
    },
    {
        num: 9,
        question: "What does the `document.getElementById()` function in JavaScript return?",
        answer: "A reference to an HTML element",
        options: [
            "A reference to an HTML element",
            "A list of all HTML elements",
            "The value of an input field",
            "A list of class names"
        ]
    },
    {
        num: 10,
        question: "What is the purpose of the `<head>` element in an HTML document?",
        answer: "To contain metadata about the document",
        options: [
            "To define the main content of the document",
            "To contain metadata about the document",
            "To display a header at the top of the page",
            "To include external CSS files"
        ]
    },
    {
        num: 11,
        question: "Which CSS property is used to control the spacing between lines of text?",
        answer: "line-height",
        options: ["text-spacing", "line-height", "line-spacing", "letter-spacing"]
    },
    {
        num: 12,
        question: "What is the correct way to select an HTML element with the class `my-class` using CSS?",
        answer: ".my-class",
        options: ["#my-class", ".my-class", "my-class", "element.my-class"]
    },
    {
        num: 13,
        question: "What is the purpose of the JavaScript `querySelector()` method?",
        answer: "To select the first matching element in the DOM",
        options: [
            "To select all matching elements in the DOM",
            "To modify the HTML of an element",
            "To add event listeners to elements",
            "To select the first matching element in the DOM"
        ]
    },
    {
        num: 14,
        question: "Which HTML element is used to define an unordered list?",
        answer: "<ul>",
        options: ["<ul>", "<ol>", "<li>", "<list>"]
    },
    {
        num: 15,
        question: "What does the `console.log()` function in JavaScript do?",
        answer: "Outputs a message to the browser's console",
        options: [
            "Displays an alert message to the user",
            "Outputs a message to the browser's console",
            "Creates a new DOM element",
            "Sends an HTTP request"
        ]
    },
    {
        num: 16,
        question: "In CSS, which property is used to add space between an element's content and its border?",
        answer: "padding",
        options: ["spacing", "margin", "padding", "border-spacing"]
    },
    {
        num: 17,
        question: "Which JavaScript keyword is used to declare a variable?",
        answer: "var",
        options: ["let", "variable", "var", "const"]
    },
    {
        num: 18,
        question: "What is the purpose of the `<link>` element in HTML?",
        answer: "To link external resources, such as stylesheets",
        options: [
            "To create hyperlinks within the document",
            "To define the main content of the document",
            "To link external resources, such as stylesheets",
            "To include JavaScript code"
        ]
    },
    {
        num: 19,
        question: "Which CSS property is used to control the alignment of text within an element?",
        answer: "text-align",
        options: ["align-text", "text-align", "text-style", "text-decoration"]
    },
    {
        num: 20,
        question: "What is the purpose of the `return` statement in a JavaScript function?",
        answer: "To specify the value that the function should return",
        options: [
            "To stop the execution of the function",
            "To print a message to the console",
            "To specify the value that the function should return",
            "To define a new variable"
        ]
    },
    {
        num: 21,
        question: "Which HTML element is used to define a table row?",
        answer: "<tr>",
        options: ["<row>", "<tr>", "<table-row>", "<td>"]
    },
    {
        num: 22,
        question: "What is the purpose of the JavaScript `addEventListener()` method?",
        answer: "To attach an event handler to an element",
        options: [
            "To change the style of an element",
            "To select an element by its ID",
            "To attach an event handler to an element",
            "To create a new HTML element"
        ]
    },
    {
        num: 23,
        question: "In CSS, which property is used to control the size of an element's font?",
        answer: "font-size",
        options: ["text-size", "font-size", "font-style", "font-family"]
    },
    {
        num: 24,
        question: "What is the purpose of the JavaScript `setTimeout()` function?",
        answer: "To delay the execution of a function",
        options: [
            "To measure the time it takes to execute code",
            "To create a new asynchronous function",
            "To delay the execution of a function",
            "To stop the execution of a loop"
        ]
    },
    {
        num: 25,
        question: "Which HTML element is used to define a form?",
        answer: "<form>",
        options: ["<input>", "<form>", "<fieldset>", "<section>"]
    },
    {
        num: 26,
        question: "What does the CSS `display: inline-block;` property do?",
        answer: "It allows an element to be displayed as an inline-level block container",
        options: [
            "It hides the element from view",
            "It makes the element invisible",
            "It allows an element to be displayed as an inline-level block container",
            "It makes the element take up the full width of the parent"
        ]
    },
    {
        num: 27,
        question: "Which JavaScript function is used to convert a string to an integer?",
        answer: "parseInt()",
        options: ["convertToInt()", "stringToNumber()", "parseInteger()", "parseInt()"]
    },
    {
        num: 28,
        question: "What is the purpose of the `<img>` element in HTML?",
        answer: "To display an image on a web page",
        options: [
            "To include external JavaScript code",
            "To create hyperlinks within the document",
            "To display an image on a web page",
            "To define a list item"
        ]
    },
    {
        num: 29,
        question: "In CSS, which property is used to control the appearance of text when it overflows its container?",
        answer: "text-overflow",
        options: ["overflow", "text-wrap", "text-overflow", "overflow-text"]
    },
    {
        num: 30,
        question: "What is the purpose of the JavaScript `Array.push()` method?",
        answer: "To add elements to the end of an array",
        options: [
            "To remove elements from an array",
            "To reverse the order of elements in an array",
            "To add elements to the end of an array",
            "To sort the elements in an array"
        ]
    },
    {
        num: 31,
        question: "Which HTML element is used to create a numbered list?",
        answer: "<ol>",
        options: ["<ul>", "<ol>", "<li>", "<list>"]
    },
    {
        num: 32,
        question: "What does the `margin: auto;` CSS property do?",
        answer: "It centers an element horizontally within its container",
        options: [
            "It adds spacing between elements",
            "It aligns an element to the right",
            "It centers an element vertically within its container",
            "It centers an element horizontally within its container"
        ]
    },
    {
        num: 33,
        question: "Which JavaScript method is used to convert a number to a string with a specified number of decimal places?",
        answer: "toFixed()",
        options: ["toString()", "toPrecision()", "toFixed()", "toDecimalString()"]
    },
    {
        num: 34,
        question: "What is the purpose of the `<div>` element in HTML?",
        answer: "To create a generic container for grouping other elements",
        options: [
            "To create a hyperlink",
            "To define a list item",
            "To create a generic container for grouping other elements",
            "To display a block of text"
        ]
    },
    {
        num: 35,
        question: "In CSS, which property is used to control the appearance of the border around an element?",
        answer: "border",
        options: ["outline", "border-style", "border-color", "border"]
    },
    {
        num: 36,
        question: "What is the purpose of the JavaScript `Array.pop()` method?",
        answer: "To remove the last element from an array and return it",
        options: [
            "To add an element to the beginning of an array",
            "To remove the first element from an array and return it",
            "To remove the last element from an array and return it",
            "To reverse the order of elements in an array"
        ]
    },
    {
        num: 37,
        question: "Which HTML element is used to define a header for a section or page?",
        answer: "<header>",
        options: ["<head>", "<header>", "<top>", "<h1>"]
    },
    {
        num: 38,
        question: "What does the CSS `position: relative;` property do?",
        answer: "It positions an element relative to its normal position",
        options: [
            "It makes an element invisible",
            "It positions an element absolutely within its parent",
            "It positions an element relative to its normal position",
            "It aligns an element to the right"
        ]
    },
    {
        num: 39,
        question: "In JavaScript, what does the `===` operator do?",
        answer: "It checks if two values are equal and have the same data type",
        options: [
            "It assigns a value to a variable",
            "It checks if two values are equal, regardless of data type",
            "It checks if two values are equal and have the same data type",
            "It checks if one value is greater than another"
        ]
    },
    {
        num: 40,
        question: "Which HTML element is used to create a dropdown selection list?",
        answer: "<select>",
        options: ["<input>", "<dropdown>", "<list>", "<select>"]
    },
    {
        num: 41,
        question: "What is the purpose of the CSS `flexbox` layout?",
        answer: "To create flexible layouts with a horizontal or vertical alignment",
        options: [
            "To apply styles to a group of elements",
            "To create animations and transitions",
            "To create flexible layouts with a horizontal or vertical alignment",
            "To create rounded corners on elements"
        ]
    },
    {
        num: 42,
        question: "What does the JavaScript `Math.random()` function do?",
        answer: "It generates a random floating-point number between 0 (inclusive) and 1 (exclusive)",
        options: [
            "It generates a random integer",
            "It generates a random number between a specified range",
            "It generates a random floating-point number between 0 (inclusive) and 1 (exclusive)",
            "It generates a random boolean value"
        ]
    },
    {
        num: 43,
        question: "What is the purpose of the HTML `<iframe>` element?",
        answer: "To embed another document or webpage within the current document",
        options: [
            "To create a clickable button",
            "To define a new section of the document",
            "To format text content",
            "To embed another document or webpage within the current document"
        ]
    },
    {
        num: 44,
        question: "In CSS, which property is used to control the space between an element's content and its border?",
        answer: "padding",
        options: ["margin", "spacing", "padding", "border-spacing"]
    },
    {
        num: 45,
        question: "What does the JavaScript `Array.length` property return?",
        answer: "The number of elements in an array",
        options: [
            "The total memory consumed by the array",
            "The index of the last element in the array",
            "The number of elements in an array",
            "The sum of all elements in the array"
        ]
    },
    {
        num: 46,
        question: "Which HTML element is used to emphasize text without adding any structural meaning?",
        answer: "<span>",
        options: ["<em>", "<i>", "<strong>", "<span>"]
    },
    {
        num: 47,
        question: "What does the CSS `float` property do?",
        answer: "It specifies whether an element should float to the left, right, or none",
        options: [
            "It adds a shadow to an element",
            "It makes an element invisible",
            "It specifies whether an element should float to the left, right, or none",
            "It aligns an element to the center"
        ]
    },
    {
        num: 48,
        question: "What is the purpose of the JavaScript `Array.unshift()` method?",
        answer: "To add elements to the beginning of an array",
        options: [
            "To remove elements from the beginning of an array",
            "To add elements to the end of an array",
            "To reverse the order of elements in an array",
            "To add elements to the beginning of an array"
        ]
    },
    {
        num: 49,
        question: "Which HTML element is used to define a horizontal line?",
        answer: "<hr>",
        options: ["<hl>", "<line>", "<hr>", "<horizontal>"]
    },
    {
        num: 50,
        question: "What is the purpose of the CSS `box-sizing` property?",
        answer: "To control how the total width and height of an element are calculated",
        options: [
            "To add a border around an element",
            "To control the spacing between elements",
            "To control how the total width and height of an element are calculated",
            "To make an element take up the full width of the parent"
        ]
    }
];


