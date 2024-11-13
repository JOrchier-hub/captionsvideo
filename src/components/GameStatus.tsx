import React from 'react';
import { Trophy, Star, Flame } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

export default function GameStatus() {
  const { points, streak, level, achievements } = useGame();
  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const progress = (points % 1000) / 10; // Progress to next level (0-100)

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Star className="text-yellow-400" size={24} />
          <span className="text-lg font-semibold text-purple-800">{points} points</span>
        </div>
        <div className="flex items-center space-x-2">
          <Flame className="text-orange-500" size={24} />
          <span className="text-lg font-semibold text-purple-800">{streak} day streak</span>
        </div>
        <div className="flex items-center space-x-2">
          <Trophy className="text-purple-600" size={24} />
          <span className="text-lg font-semibold text-purple-800">Level {level}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-purple-600 mb-1">
          <span>Progress to Level {level + 1}</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-purple-100 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {unlockedAchievements.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-purple-800 mb-2">Recent Achievements</h3>
          <div className="flex flex-wrap gap-2">
            {unlockedAchievements.slice(-3).map(achievement => (
              <div
                key={achievement.id}
                className="flex items-center space-x-1 bg-purple-100 px-2 py-1 rounded-full text-sm"
              >
                <span>{achievement.icon}</span>
                <span className="text-purple-800">{achievement.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}