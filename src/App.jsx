// --- App.js ---
import React from 'react';
import './App.css';
import HomePageHeader from './HomePageHeader';
import HomeHeroSection from './HomeHeroSection';
import PropertyList from './PropertyList';
import RecommendationsSection from './RecommendationsSection';
import StatsCounter from './StatsCounter';

function App() {
  return (
    <div className="App">
      <HomePageHeader />
      <HomeHeroSection />
      <PropertyList />
      <RecommendationsSection />
      <StatsCounter />
    </div>
  );
}

export default App;