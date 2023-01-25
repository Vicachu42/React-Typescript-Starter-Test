# Victoria's notes on the assignment

## General
This was a fairly straight forward test with clear instructions and expectations. It tests for skills and techniques that are relevant for a frontend developer, like SPAs and API calls. 

While working I used the components that was already in the repo, but added a folder with a Home view and a CSS module. This was because I prefer working with components that have their own purpose, which also makes debugging easier. I also added a Bootstrap library to save time on the design.

One thing I did notice was that some of the dependencies, like React and React Router, use versions that are not up to date (as of January 2023). This meant that I needed to consult older versions of documentations as well, since some of the functionality has changed with newer versions, like with the routing. I considered updating them to the current versions, but decided against it since it could affect how the worked with other dependencies.


## What turned out well
### Routing
As mentioned above, since I took versioning into account this wasn't much of an issue. I chose to write the logic for the routing in App component and links in the Header component.

### API Calls
Simple Get and Delete. I liked json server, it was a quite handy tool.
I also managed to render all the data from the API, including the images.

### Structure
I strived to keep both the code, the file structure, and the application clean and easy to understand, and I think I managed the reasonably well.


## Could use further work
### Deleting objects from the page
Deleting from the API wasn't hard, but what was hard was reflecting the change on the page. Whenever I deleted something, the page didn't update, so the change was only displayed if you manually refreshed the whole page. I did find a solution for this, but I am well aware that it isn't the best one and that this solutions triggers warnings in the console. 

### Loading
Because of time constraints, I chose to not include loaders. I did however include conditional rendering that displays an error message on the site if the API calls fails or is delayed.

I am confident that both these issues could be solved with more time, but this is what I could do for now.