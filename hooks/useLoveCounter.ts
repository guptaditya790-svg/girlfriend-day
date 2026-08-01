"use client";

import { useEffect, useState } from "react";

export default function useLoveCounter(startDate: Date) {
  const calculateTime = () => {
    const now = new Date();
    const difference = now.getTime() - startDate.getTime();

    const totalSeconds = Math.max(0, Math.floor(difference / 1000));

    return {
      days: Math.floor(totalSeconds / (60 * 60 * 24)),
      hours: Math.floor((totalSeconds / (60 * 60)) % 24),
      minutes: Math.floor((totalSeconds / 60) % 60),
      seconds: totalSeconds % 60,
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
