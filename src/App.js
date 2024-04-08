import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import PerformanceData from './components/PerformanceData';

function App() {
  return (
      <div className="App">
        <h1>Оптимизированная галерея изображений</h1>
        <ImageGallery />
          <PerformanceData />
      </div>
  );
}

export default App;
