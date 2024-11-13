import React, { createContext, useContext, useState, useEffect } from 'react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  unlocked: boolean;
  icon: string;
}

interface GameContextType {
  points: number;
  streak: number;
  level: number;
  achievements: Achievement[];
  addPoints: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  unlockAchievement: (id: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-log',
      title: 'First Steps',
      description: 'Log your first symptom',
      points: 50,
      unlocked: false,
      icon: '🌟'
    },
    {
      id: 'week-streak',
      title: 'Consistency Queen',
      description: 'Maintain a 7-day logging streak',
      points: 100,
      unlocked: false,
      icon: '👑'
    },
    {
      id: 'tracker-master',
      title: 'Tracking Master',
      description: 'Log 30 symptoms',
      points: 200,
      unlocked: false,
      icon: '📊'
    },
  ]);

  useEffect(() => {
    const newLevel = Math.floor(points / 1000) + 1;
    if (newLevel !== level) {
      setLevel(newLevel);
    }
  }, [points]);

  const addPoints = (amount: number) => {
    setPoints(prev => prev + amount);
  };

  const incrementStreak = () => {
    setStreak(prev => prev + 1);
  };

  const resetStreak = () => {
    setStreak(0);
  };

  const unlockAchievement = (id: string) => {
    setAchievements(prev => prev.map(achievement => {
      if (achievement.id === id && !achievement.unlocked) {
        addPoints(achievement.points);
        return { ...achievement, unlocked: true };
      }
      return achievement;
    }));
  };

  return (
    <GameContext.Provider value={{
      points,
      streak,
      level,
      achievements,
      addPoints,
      incrementStreak,
      resetStreak,
      unlockAchievement,
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}