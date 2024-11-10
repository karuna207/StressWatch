from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import joblib
from model.preprocess import preprocess_input
from pydantic import BaseModel
import logging

# Initialize logging
logging.basicConfig(level=logging.INFO)

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the joblib model and scaler
try:
    model_path = "model/stress_level_model.joblib"
    scaler_path = "model/scaler.joblib"
    model = joblib.load(model_path)
    scaler = joblib.load(scaler_path)
    logging.info("Model and scaler loaded successfully.")
except Exception as e:
    logging.error(f"Error loading model or scaler: {e}")
    raise HTTPException(status_code=500, detail="Error loading model or scaler")

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

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to the prediction API!"}

# Prediction endpoint
@app.post("/predict")
async def predict(data: InputData):
    try:
        # Convert input data to a dictionary and log it
        input_data = data.dict()
        logging.info(f"Received input data: {input_data}")

        # Preprocess the input data
        processed_data = preprocess_input(input_data)
        logging.info(f"Processed data: {processed_data}")

        # Scale the input data
        input_scaled = scaler.transform(processed_data)
        logging.info(f"Scaled data: {input_scaled}")

        # Run the prediction using the loaded joblib model
        prediction = model.predict(input_scaled)

        # Get prediction result
        result = int(prediction[0])
        logging.info(f"Prediction result: {result}")

        return {"prediction": result}

    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        raise HTTPException(status_code=500, detail=f"Error during prediction: {str(e)}")

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
