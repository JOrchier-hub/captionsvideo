import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const symptoms = ['Hot Flashes', 'Mood Swings', 'Sleep Disturbances', 'Fatigue', 'Joint Pain'];

function SymptomTracker() {
  const [selectedSymptom, setSelectedSymptom] = useState('Hot Flashes');
  const [intensity, setIntensity] = useState(5);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock data for the chart
  const data = [
    { date: '2024-03-01', intensity: 3 },
    { date: '2024-03-02', intensity: 5 },
    { date: '2024-03-03', intensity: 2 },
    { date: '2024-03-04', intensity: 4 },
    { date: '2024-03-05', intensity: 1 },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Logged ${selectedSymptom} with intensity ${intensity} on ${date}`);
      // Here you would typically save the symptom data
      setIsLoading(false);
    } catch (err) {
      setError('Failed to log symptom. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-purple-800">Symptom Tracker</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="symptom" className="block text-sm font-medium text-gray-700">Symptom</label>
          <select
            id="symptom"
            value={selectedSymptom}
            onChange={(e) => setSelectedSymptom(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          >
            {symptoms.map((symptom) => (
              <option key={symptom} value={symptom}>{symptom}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="intensity" className="block text-sm font-medium text-gray-700">Intensity (1-10)</label>
          <input
            type="number"
            id="intensity"
            min="1"
            max="10"
            value={intensity}
            onChange={(e) => setIntensity(parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button 
          type="submit" 
          className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-300"
          disabled={isLoading}
        >
          {isLoading ? 'Logging...' : 'Log Symptom'}
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Symptom Intensity Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="intensity" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SymptomTracker;