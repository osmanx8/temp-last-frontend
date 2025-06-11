import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import React, { useEffect, useState } from 'react';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

interface CountdownProps {
  targetTime: number; // The target time in milliseconds
}

const Countdown: React.FC<CountdownProps> = ({ targetTime }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FlipClockCountdown
      to={targetTime}
      showLabels={false}
      digitBlockStyle={{
        width: isMobile ? 50 : 80,
        height: isMobile ? 70 : 100,
        fontSize: isMobile ? 42 : 68,
        color: "#FFFFFF99",
        borderRadius: 10,
        background: "#1B2940",
      }}
      dividerStyle={{ color: '#293A56', height: 1 }}
      separatorStyle={{
        color: '#1B2940',
        size: isMobile ? 10 : 18,
      }}
      duration={0.5}
      renderMap={[false, false, true, true]}
    >
      Finished
    </FlipClockCountdown>
  );
};

export default Countdown;
