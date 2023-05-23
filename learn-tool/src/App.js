import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return <h1 className="text-center my-4">What do you want to learn?</h1>
}

function App() {
  const [input, setInput] = useState('');
  const [plan, setPlan] = useState([]);  // New state variable for the learning plan
  const handleSubmit = async event => {
    event.preventDefault();

    const apiUrl = 'http://localhost:5000/api/completion';
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
    
    try {
      const response = await axios.post(apiUrl, data);
      
    // Parsing the response string into JSON and then setting the plan state
    const parsedResponse = JSON.parse(response.data.trim());
    console.log(response.data);
    setPlan(parsedResponse.steps); 
    } catch (error) {
      console.error('Error making API request: ', error);
    }

    setInput('');
  }

  return (
    <div className="container">
      <Header />
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

      {/* Here we render the learning plan */}
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
    </div>
  );
}

export default App;
