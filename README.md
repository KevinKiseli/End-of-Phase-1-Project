Fetching and Listing Data from JSON Placeholder API.

This script is designed to fetch data from the JSON Placeholder API and display it in an HTML table that shows the ID, Title and whether the task is completed or not. It also allows you add data when the "Add To List" button is clicked and to clear the data when when "Clear Button" is clicked. Both the "Add To List" and "Clear Button" will have an added effect.

To use the script:

I started by including my Javascript to my HTML file. I did this by first generating the HTML format using ! and ensuring I placed the script that links to the js file at the closing tags of the body. I then put the title of the page and included the CSS styling I would want the page to look like. THis is force of habit based on how I use html to style instead of CSS.

I then made element in the HTML for both the IDs 'fetchBtn' and 'clearBtn' which would operate as buttons in the page. And also added 'tableBody' which would be an ID that will show the format I want the genereted list to be showed as starting with the ID, then the Title and lastly the 'Yes' or 'No' status of completion.

It is key to ensure your HTML file has internet access as the data will be received from the JSON API Placeholder.


Usage:

The buttons will have to perform certain tasks when clicked on.

THe fetch button (fetchBtn) will get the JSON placeholder API data and display it the format stated above (ID, Title, Completion status). This will generate a HTML list of 200 different titles with what some might call gibberish (That's how they are written in the API).

The clear button (clearBtn) will simple clear the HTML list and return to the home format as if the page has been refreshed.

The buttons will also have an effect when a user moves their mouse or cursor above them. THis will also change the background color of the buttons for dramatic effect. 



Added touches:

Incase there is an error when trying to fetch the data, the console would log an error assisting with making any need corrections.

Remember:

It is very important to link your index.js and index.html, this will save you some time. Also label you elements as need to prevent any errors. Lastly, have fun with it.

Conclusion:

I, Kevin, enjoyed this and look forward to using APIs to make more complecated webpages and applications. 

Try my code out and customize it as you would want it, even if it means using different APIs. All the best. In God We Trust.
