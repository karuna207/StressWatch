# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import tensorflow as tf
from model.preprocess import preprocess_input
from pydantic import BaseModel

app = FastAPI()

# Allow CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust as needed for your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
model = tf.keras.models.load_model("model/your_model.h5")

class InputData(BaseModel):
    input: list  # Adjust the type according to your input structure

@app.post("/predict")
async def predict(data: InputData):
    try:
        # Preprocess the input data
        processed_data = preprocess_input(data.input)
        
        # Make prediction
        prediction = model.predict(processed_data)
        
        # Assuming the model output needs further processing
        result = prediction.tolist()  # Convert numpy array to list for JSON response
        
        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)  # Change port as needed
