# Study Tip API

This project is a small webpage connected to a serverless API. When the button is pressed, the API returns one study tip as JSON and the page displays it.

## Project files

- `index.html` is the webpage.
- `style.css` controls its appearance.
- `client.js` sends a request to the API and displays the response.
- `api/tip.js` contains the serverless function.

## Deploy with Vercel

Import the GitHub repository as a new Vercel project and set the root directory to `task2`. Choose **Other** as the framework and leave the build command empty. Deploy the project.

After deployment, open the site and press **Get a study tip**. To view the API response directly, open the site URL followed by `/api/tip`.

## Cloud computing concept

The API function runs when it receives a request and returns a response. It does not save data between requests. Vercel manages the server environment used to run the function.
