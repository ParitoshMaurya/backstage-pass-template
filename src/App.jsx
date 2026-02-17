import { useState, useEffect } from 'react'
import Header from './components/Header'
import ChallengeHeader from './components/ChallengeHeader'
import DaySidebar from './components/DaySidebar'
import FeedList from './components/FeedList'
import './App.css'

function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const [isDark, setIsDark] = useState(() => {
    // Check system preference on initial load
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDark(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  return (
    <div className="app">
      <Header onThemeToggle={toggleTheme} isDark={isDark} />
      <ChallengeHeader currentDay={currentDay} totalDays={9} onThemeToggle={toggleTheme} isDark={isDark} />
      <div className="app-layout">
        <DaySidebar currentDay={currentDay} onDayChange={handleDayChange} />
        <main className="main-content">
          <FeedList />
        </main>
      </div>
    </div>
  )
}

export default App
