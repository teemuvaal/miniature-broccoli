import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// Handles the header for the site. For now, just text
const Header = () => {
  return <h1 className="text-center my-4">What do you want to learn? Tell me.</h1>;
}

// Handles the user input field. Input, setInput & handleSubmit are passed props from App
const InputField = ({input, setInput, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      className="form-control"
      value={input} 
      onChange={event => setInput(event.target.value)} 
      placeholder="Type here..."
    />
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
  </form>
  )

}
// Handles displaying the plan. Plan is passed as prop from App
const LearningPlan = ({plan}) => {
  return (
    <div className="row">
    {plan && plan.map((step, index) => (
      <div key={index} className="col-4">
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{step.stepName}</h5>
            <p className="card-text">{step.content}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

const App = () => {  
//  const [loading, setLoading] = useState(false); // To set up loading animation, need to fix later
  const [input, setInput] = useState(''); // for user input
  const [plan, setPlan] = useState([]); // for generating the plan
  const handleSubmit = async event => {
    event.preventDefault();
    const apiUrl = 'http://localhost:5000/api/completion';
    // Prompt that can be modified accordingly and improved. Format needs to be exactly this.
    const data = { prompt: `Create a 5-step learning plan to learn ${input}. Give the plan in an array of objects format with step name and content. Do not include anything but the array of objects itself. Format should be following: {
      "steps": [
        {
          "stepName": "Step 1",
          "content": "..."
        },
        {
          "stepName": "Step 2",
          "content": "..."
        },
        // and so on...
      ]
    }
    `
    };
    
//    setLoading(true);

    try {
      const response = await axios.post(apiUrl, data);
      
    // Parsing the response string into JSON and then setting the plan state
    const parsedResponse = JSON.parse(response.data.trim());
    console.log(response.data);
    setPlan(parsedResponse.steps);
//    setLoading(false);  
    } catch (error) {
      console.error('Error making API request: ', error);
//      setLoading(false);
    }

    setInput('');
  }
  return (
    <div className="container">
      <Header />
      <InputField setInput={setInput} handleSubmit={handleSubmit} />
      <LearningPlan plan={plan} />
      {/* Here we render the learning plan */}
    </div>
  );
}

export default App;
