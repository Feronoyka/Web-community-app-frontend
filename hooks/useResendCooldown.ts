'use client';

import duration from 'dayjs/plugin/duration';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

dayjs.extend(duration);

const DELAYS = [15, 30, 45, 60];
const MAX_RESENDS = DELAYS.length;

export const useResendCooldown = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [resendCount, setResendCount] = useState(0);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  const isOnCooldown = timeLeft > 0;
  const isMaxReached = resendCount >= MAX_RESENDS;

  const formatted =
    timeLeft > 0 ? dayjs.duration(timeLeft, 'seconds').format('mm:ss') : null;

  useEffect(() => {
    if (timeLeft <= 0) return;

    timeRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timeRef.current) clearInterval(timeRef.current);
    };
  }, [timeLeft]);

  const startCooldown = () => {
    if (isMaxReached) return;

    const delay = DELAYS[resendCount] ?? DELAYS[DELAYS.length - 1];
    setTimeLeft(delay);
    setResendCount((prev) => prev + 1);
  };

  return { isOnCooldown, formatted, startCooldown, resendCount, isMaxReached };
};
