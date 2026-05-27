# drag-and-drop-demo
A simple demo of drag and drop, implemented using jQuery UI. Page contains 4 quadrants, drag and drop the circles from the starting quadrant to see them change shape.

## Instructions
Download or clone the contents of this repo to a folder.
Open the project folder.
Open index.html using a web browser of your choice. 

## Stack Choice
I chose to use HTML, CSS, JavaScript and jQuery for this project. I picked these as a minimal approach to the problem, avoiding the use of complex libraries to keep the solution to the problem simple, and as they are all technologies that I am familiar with. I chose to use the [draggable](https://api.jqueryui.com/draggable/#event-drag) API from jQuery UI over the draggable attribute in HTML5 as it is a much higher-level solution, reducing the amount of functionality I had to implement myself at the expense of including a dependency.

## Trade-offs
The logic around the initial positioning of the circles in the top left quadrant being handled through the JavaScript on page load was a trade-off for time, ideally I'd like to avoid running any JavaScript to set up elements in the document on page load (as it can cause elements to flicker and lead to a poor user experience). If I had more time to tackle this, I'd find a solution to distribute the circles in the initial HTML document sent on page load.

## Content Security Policy
I added a Content Security Policy to the page using a META tag in the header of the HTML document.
- Restrict default-src to self as a fallback for any directives not included in this header.
- Decided to explicitly restrict style-src 'self' to self too, to clearly show we're restricting to only stylesheets from the source.
- Added a restriction to script-src 'self', so https://code.jquery.com/ could be included as an exception to this. This is because I'm loading the scripts for jquery-3.7.1 and jquery-ui directly from jquery. I could remove this exception if I the source files for these scripts were included in the repository instead of being fetched directly.
- Restrict object-src to none. Object tags are not being used anywhere in this page and it is a common hardening recommendation to explicitly include this restriction https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/object-src