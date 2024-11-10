import pandas as pd

def preprocess_input(data: dict):
    # Map input fields to expected model feature names
    column_mapping = {
        'snoringRate': 'Snoring Rate',
        'respirationRate': 'Respiration Rate',
        'bodyTemperature': 'Body Temperature',
        'oxygenLevel': 'Blood Oxygen Levels',
        'eyeMovement': 'Eye Movement',
        'sleepDuration': 'Sleep Duration',
        'heartRate': 'Heart Rate',
        'dailySteps': 'Limb Movement',
    }

    # Rename input data based on the expected model feature names
    renamed_data = {column_mapping[key]: value for key, value in data.items()}

    # Define the correct column order
    expected_columns = ['Sleep Duration', 'Heart Rate', 'Snoring Rate', 'Respiration Rate', 'Body Temperature', 'Limb Movement', 'Blood Oxygen Levels','Eye Movement']

    # Convert renamed data to DataFrame with specified column order
    input_df = pd.DataFrame([renamed_data])[expected_columns]
    return input_df
