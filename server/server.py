from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import openai
import os

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")


## Here is endpoint to call OpenAI API. key needs to be in .env file
@app.route('/api/completion', methods=['POST'])
@cross_origin()
def get_completion():
    data = request.get_json()

    completion = openai.Completion.create(
      engine="text-davinci-003",
      prompt=data['prompt'],
      max_tokens=1024
    )
## Parse the response to a json that FE can read
    return jsonify(completion['choices'][0]['text'].strip())


if __name__ == '__main__':
    app.run(port=5000, debug=True)
