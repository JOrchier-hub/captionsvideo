import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Book, Calendar, Heart, MessageCircle, Pill, Target, Thermometer, Plus } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import GameStatus from './GameStatus';

const DashboardCard = ({ title, icon, link }) => (
  <Link 
    to={link} 
    className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg shadow-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center"
  >
    <div className="text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">
      {icon}
    </div>
    <h3 className="mt-4 text-lg font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">{title}</h3>
  </Link>
);

function Dashboard() {
  const [quickSymptom, setQuickSymptom] = useState('');
  const [quickIntensity, setQuickIntensity] = useState(5);
  const { addPoints, incrementStreak, unlockAchievement } = useGame();

  const handleQuickLog = (e) => {
    e.preventDefault();
    console.log(`Quick log: ${quickSymptom} - Intensity: ${quickIntensity}`);
    
    // Add points for logging a symptom
    addPoints(10);
    incrementStreak();
    
    // Check for first log achievement
    unlockAchievement('first-log');
    
    setQuickSymptom('');
    setQuickIntensity(5);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">Welcome to MenoPal</h1>
      <p className="text-lg text-gray-600">Your personal guide through menopause. What would you like to do today?</p>
      
      <GameStatus />
      
      <form onSubmit={handleQuickLog} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg shadow-md hover:shadow-glow transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text mb-4">Quick Symptom Log</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            value={quickSymptom}
            onChange={(e) => setQuickSymptom(e.target.value)}
            placeholder="Enter symptom"
            className="flex-grow rounded-md border-purple-200 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            required
          />
          <input
            type="number"
            value={quickIntensity}
            onChange={(e) => setQuickIntensity(Number(e.target.value))}
            min="1"
            max="10"
            className="w-20 rounded-md border-purple-200 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />
          <button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-2 rounded-md transition-all duration-300 transform hover:-translate-y-0.5">
            <Plus size={24} />
          </button>
        </div>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Symptom Tracker" icon={<Thermometer size={32} />} link="/symptom-tracker" />
        <DashboardCard title="Health Info" icon={<Book size={32} />} link="/health-info" />
        <DashboardCard title="Community" icon={<MessageCircle size={32} />} link="/community" />
        <DashboardCard title="Lifestyle Tips" icon={<Heart size={32} />} link="/lifestyle" />
        <DashboardCard title="Medication Options" icon={<Pill size={32} />} link="/medication" />
        <DashboardCard title="Menstrual Tracker" icon={<Calendar size={32} />} link="/menstrual-tracker" />
        <DashboardCard title="Health Metrics" icon={<Activity size={32} />} link="/health-metrics" />
        <DashboardCard title="Goals" icon={<Target size={32} />} link="/goals" />
      </div>
    </div>
  );
}

export default Dashboard;