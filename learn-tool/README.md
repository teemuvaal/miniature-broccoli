## to-do
- [ ] Refactor input and plan to different components
- [ ] Add loading animation for plan request
- [ ] Add relevant competencies for each step with the following prompt: 
        "Practice by rebuilding existing applications with React."
        Based on the given text snippet, please identify the competencies or skills demonstrated by the individual/subject. Provide only a list of competencies in an array format.



# Use

## Requirements:
Python + flask for server, with openai, os and flask_cors
Place openai api-key to .env with OPENAI_API_KEY=''
Start Flask with python server.py
Start the React app with npm start


## Use:
Enter a skill to the prompt, the app will return 5 steps how to learn the skill


## Below the usual from Create React App:

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

