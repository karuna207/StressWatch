# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import onnxruntime as ort
from model.preprocess import preprocess_input
from pydantic import BaseModel

app = FastAPI()

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the ONNX model
onnx_model_path = "model/model_combined_cleaned.onnx"  # Ensure this path is correct
ort_session = ort.InferenceSession(onnx_model_path)

class InputData(BaseModel):
    input: list  # Adjust the type according to your input structure

@app.post("/predict")
async def predict(data: InputData):
    try:
        # Preprocess the input data
        processed_data = preprocess_input(data.input)
        
        # Convert input to the format expected by ONNX (usually np.float32)
        inputs = {ort_session.get_inputs()[0].name: processed_data.astype(np.float32)}

        # Make prediction
        prediction = ort_session.run(None, inputs)
        
        # Convert the output to a list for JSON serialization
        result = prediction[0].tolist()
        
        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
