## to-do
- [x] Refactor input and plan to different components
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