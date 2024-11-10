import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import joblib
import os

# Load scaler for consistent scaling (save your scaler as 'scaler.joblib' after fitting in training)

def preprocess_input(data: dict):
    # Expected columns based on the model input
    expected_columns = [
        'Sleep Duration', 'Heart Rate', 'Snoring Rate', 
        'Respiration Rate', 'Body Temperature', 'Limb Movement', 
        'Blood Oxygen Levels', 'Eye Movement'
    ]
    
    # Convert input data to DataFrame to handle missing or extra fields
    input_df = pd.DataFrame([data]) 
    return input_df
    
    # # Select expected columns and fill any missing values with column means or default
    # for col in expected_columns:
    #     if col not in input_df.columns:
    #         input_df[col] = np.nan
    
    # # Impute missing values (fill with the column mean, or a default value if column is fully missing)
    # for col in input_df.columns:
    #     if input_df[col].isnull().all():  # If the entire column is NaN
    #         input_df[col] = 0  # You can change 0 to any default value you prefer
    #     else:
    #         input_df[col].fillna(input_df[col].mean(), inplace=True)
    
    # # Ensure only required columns are used
    # input_df = input_df[expected_columns]
    
    # Scale the input features to match the training data
    # If scaling is needed, use your saved scaler (if you had one during training)
    # return scaler.transform(input_df)  # Uncomment this if you have a scaler
    
    # return input_df  # If no scaling is needed, return the processed DataFrame directly
