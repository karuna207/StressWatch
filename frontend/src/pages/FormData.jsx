import React, { useState } from 'react';

const FormData = () => {
  // Initialize state with default values for each input field
  const [formData, setFormData] = useState({
    snoringRate: '',
    respirationRate: '',
    bodyTemperature: '',
    oxygenLevel: '',
    eyeMovement: '',
    sleepDuration: '',
    heartRate: '',
    dailySteps: '',
    highestBP: '',
    lowestBP: '',
  });

  // Handle change for each input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center pt-20">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/** Snoring Rate */}
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
            />
          </div>

          {/** Respiration Rate */}
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
            />
          </div>

          {/** Body Temperature */}
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
            />
          </div>

          {/** Body Oxygen Level */}
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
            />
          </div>

          {/** Eye Movement */}
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
            />
          </div>

          {/** Sleep Duration */}
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
            />
          </div>

          {/** Heart Rate */}
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
            />
          </div>

          {/** Daily Steps */}
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
            />
          </div>

          {/** Highest BP */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="highestBP">
              Highest BP
            </label>
            <input
              name="highestBP"
              value={formData.highestBP}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="highestBP"
              type="number"
              placeholder="Highest BP"
            />
          </div>

          {/** Lowest BP */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lowestBP">
              Lowest BP
            </label>
            <input
              name="lowestBP"
              value={formData.lowestBP}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lowestBP"
              type="number"
              placeholder="Lowest BP"
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
