import { useState, useEffect } from "react";
import { useTimeUtils } from "./useTimeUtils";

interface UseExamTimerProps {
  duration: number; // en minutos
  onTimeUp: () => void;
}

export const useExamTimer = ({ duration, onTimeUp }: UseExamTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(duration * 60); // en segundos
  const [isPaused, setIsPaused] = useState(false);
  const { formatTime } = useTimeUtils();

  useEffect(() => {
    if (!isPaused && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPaused, timeRemaining, onTimeUp]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);
  const togglePause = () => setIsPaused(!isPaused);

  const getTimeSpent = () => duration * 60 - timeRemaining;

  return {
    timeRemaining,
    isPaused,
    pause,
    resume,
    togglePause,
    formatTime,
    getTimeSpent,
  };
}; 