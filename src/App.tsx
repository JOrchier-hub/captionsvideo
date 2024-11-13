import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { GameProvider } from './contexts/GameContext';
import Dashboard from './components/Dashboard';
import SymptomTracker from './components/SymptomTracker';
import HealthInfo from './components/HealthInfo';
import ArticleView from './components/ArticleView';
import Community from './components/Community';
import MenstrualTracker from './components/MenstrualTracker';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <GameProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
          <nav className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold hover:text-purple-100 transition-colors">MenoPal</Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-purple-200 transition-colors">Dashboard</Link>
                <Link to="/symptom-tracker" className="hover:text-purple-200 transition-colors">Symptom Tracker</Link>
                <Link to="/menstrual-tracker" className="hover:text-purple-200 transition-colors">Menstrual Tracker</Link>
                <Link to="/health-info" className="hover:text-purple-200 transition-colors">Health Info</Link>
                <Link to="/community" className="hover:text-purple-200 transition-colors">Community</Link>
              </div>
              <button
                className="md:hidden hover:text-purple-200 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Link to="/" className="block p-4 hover:bg-white/10 transition-colors">Dashboard</Link>
              <Link to="/symptom-tracker" className="block p-4 hover:bg-white/10 transition-colors">Symptom Tracker</Link>
              <Link to="/menstrual-tracker" className="block p-4 hover:bg-white/10 transition-colors">Menstrual Tracker</Link>
              <Link to="/health-info" className="block p-4 hover:bg-white/10 transition-colors">Health Info</Link>
              <Link to="/community" className="block p-4 hover:bg-white/10 transition-colors">Community</Link>
            </div>
          )}

          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/symptom-tracker" element={<SymptomTracker />} />
              <Route path="/menstrual-tracker" element={<MenstrualTracker />} />
              <Route path="/health-info" element={<HealthInfo />} />
              <Route path="/health-info/article/:id" element={<ArticleView />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </main>

          <footer className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white p-6 mt-8">
            <div className="container mx-auto text-center">
              <p>&copy; 2024 MenoPal. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;