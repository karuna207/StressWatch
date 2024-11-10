import React, { useContext, useState } from 'react'; 
import axios from 'axios'; // import axios if not already
import { Context } from "../context/context.jsx"; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormData = () => {
  // Initialize state with default values for each input field 
  const { backendUrl, navigate } = useContext(Context);
  const [formData, setformData] = useState({
    snoringRate: '',
    respirationRate: '',
    bodyTemperature: '',
    oxygenLevel: '',
    eyeMovement: '',
    sleepDuration: '',
    heartRate: '',
    dailySteps: '',
  });

  // Handle change for each input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();   
    console.log(formData);

    const formattedData = {
      snoringRate: parseFloat(formData.snoringRate),
      respirationRate: parseFloat(formData.respirationRate),
      bodyTemperature: parseFloat(formData.bodyTemperature),
      oxygenLevel: parseFloat(formData.oxygenLevel),
      eyeMovement: parseFloat(formData.eyeMovement),
      sleepDuration: parseFloat(formData.sleepDuration),
      heartRate: parseFloat(formData.heartRate),
      dailySteps: parseInt(formData.dailySteps, 10),
  }; 
  console.log(formattedData)


    try {
      const response = await axios.post(backendUrl+'/predict', formattedData); 


      console.log("hi")

      if (response.status === 200) {
        toast.success('Form submitted successfully!');  
        console.log('Response from model server:', response.data.prediction); 
        console.log(formData);
        setformData({ 
          snoringRate: '',
          respirationRate: '',
          bodyTemperature: '',
          oxygenLevel: '',
          eyeMovement: '',
          sleepDuration: '',
          heartRate: '',
          dailySteps: '',

        }); // Clear the form 
        console.log('Form submitted:', formData);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error('Error submitting form. Please check console for details.');
    }
  };

  return (
    <div className="flex justify-center pt-20">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Snoring Rate */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="snoringRate">
              Snoring Rate
            </label>
            <input
              name="snoringRate"
              value={formData.snoringRate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="snoringRate"
              type="number"
              placeholder="Snoring Rate" 
              required
            />
          </div>

          {/* Respiration Rate */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="respirationRate">
              Respiration Rate
            </label>
            <input
              name="respirationRate"
              value={formData.respirationRate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="respirationRate"
              type="number"
              placeholder="Respiration Rate" 
              required
            />
          </div>

          {/* Body Temperature */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bodyTemperature">
              Body Temperature
            </label>
            <input
              name="bodyTemperature"
              value={formData.bodyTemperature}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bodyTemperature"
              type="number"
              placeholder="Body Temperature" 
              required
            />
          </div>

          {/* Body Oxygen Level */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oxygenLevel">
              Body Oxygen Level
            </label>
            <input
              name="oxygenLevel"
              value={formData.oxygenLevel}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="oxygenLevel"
              type="number"
              placeholder="Body Oxygen Level" 
              required
            />
          </div>

          {/* Eye Movement */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eyeMovement">
              Eye Movement
            </label>
            <input
              name="eyeMovement"
              value={formData.eyeMovement}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eyeMovement"
              type="number"
              placeholder="Eye Movement" 
              required
            />
          </div>

          {/* Sleep Duration */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sleepDuration">
              Sleep Duration
            </label>
            <input
              name="sleepDuration"
              value={formData.sleepDuration}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sleepDuration"
              type="number"
              placeholder="Sleep Duration" 
              required
            />
          </div>

          {/* Heart Rate */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heartRate">
              Heart Rate
            </label>
            <input
              name="heartRate"
              value={formData.heartRate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="heartRate"
              type="number"
              placeholder="Heart Rate" 
              required
            />
          </div>

          {/* Daily Steps */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dailySteps">
              Daily Steps
            </label>
            <input
              name="dailySteps"
              value={formData.dailySteps}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dailySteps"
              type="number"
              placeholder="Daily Steps" 
              required
            />
          </div>

         
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  ); 
};

export default FormData;
