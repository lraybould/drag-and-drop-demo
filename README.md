# drag-and-drop-demo
A simple demo of drag and drop, implemented using jQuery UI. Page contains 4 quadrants, drag and drop the circles from the starting quadrant to see them change shape.

## Instructions
Download or clone the contents of this repo to a folder.
Open the project folder.
Open index.html using a web browser of your choice. 

## Stack Choice
I chose to use HTML, CSS, JavaScript and jQuery for this project. I picked these as a minimal approach to the problem, avoiding the use of complex libraries to keep the solution to the problem simple, and as they are all technologies that I am familiar with. I chose to use the (draggable)[https://api.jqueryui.com/draggable/#event-drag] API from jQuery UI over the draggable attribute in HTML5 as it is a much higher-level solution, reducing the amount of functionality I had to implement myself at the expense of including a dependency.

## Trade-offs
The logic around the initial positioning of the circles in the top left quadrant being handled through the JavaScript on page load was a trade-off for time, ideally I'd like to avoid running any JavaScript to set up elements in the document on page load (as it can cause elements to flicker and lead to a poor user experience). If I had more time to tackle this, I'd find a solution to distribute the circles in the initial HTML document sent on page load.