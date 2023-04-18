import React, { useState } from 'react';
import './styles/App.css';
import data from './data.json';
import ActivityContainer from './components/ActivityContainer';
import UserContainer from './components/UserContainer';
import Frames from './Frames';

const App = () => {
  const activityData = data;
  const [ timeframe, setTimeframe ] = useState(Frames.DAILY);

  const handleFrameChange = (frame) => {
    setTimeframe(frame);
  }

  return (
    <main className='content'>
      <UserContainer 
        timeframe={timeframe} 
        onFrameChange={handleFrameChange}
      />
      {
        activityData.map(act => 
          <ActivityContainer 
            key={act.title}
            activity={act}
            timeframe={timeframe}
        />)
      }
    </main>
  );
}

export default App;
