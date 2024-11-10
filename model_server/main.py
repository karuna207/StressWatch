from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import onnxruntime as ort
from model.preprocess import preprocess_input
from pydantic import BaseModel

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load ONNX model
onnx_model_path = "model/model_combined_cleaned.onnx"
ort_session = ort.InferenceSession(onnx_model_path)

# Define input schema
class InputData(BaseModel):
    snoringRate: float
    respirationRate: float
    bodyTemperature: float
    oxygenLevel: float
    eyeMovement: float
    sleepDuration: float
    heartRate: float
    dailySteps: int
    highestBP: int
    lowestBP: int

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to the prediction API!"}

# Prediction endpoint
@app.post("/predict")
async def predict(data: InputData): 
    try:
        # Convert input data to a dictionary 
        print(data)
        input_data = data.dict() 
        print(input_data)
        
        # Preprocess the input data
        processed_data = preprocess_input(input_data) 

        print(processed_data)
        
        # Prepare input for ONNX runtime
        inputs = {ort_session.get_inputs()[0].name: np.array(processed_data).astype(np.float32)} 

        print(inputs)
        
        # Run the prediction
        prediction = ort_session.run(None, inputs)
        
        # Get prediction result
        result = prediction[0].tolist()
        
        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error during prediction: {str(e)}")

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
