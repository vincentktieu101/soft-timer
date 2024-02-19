"use client";

import React, { useEffect, useState } from "react";

import { TimerForm } from "./components/TimerForm";

export default function Home() {
  const [startTime, setStartTime] = useState<Date>();
  const [timerCurrValue, setTimer] = useState(0);
  const [timerEndValue, setTimerEndValue] = useState(0);
  const isTimeUp = timerCurrValue >= timerEndValue;
  const endTime = startTime
    ? new Date(startTime.getTime() + timerEndValue * 1000)
    : undefined;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (startTime) {
      interval = setInterval(() => {
        setTimer((timerCurrValue) => timerCurrValue + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  const startTimer = (timerCurrValue: number) => {
    setTimerEndValue(timerCurrValue);
    setStartTime(new Date());
    setTimer(59);
  };

  const formattedTimer = [
    Math.floor(timerCurrValue / 60),
    Math.floor(timerCurrValue % 60),
  ].map((myNumber) => {
    return myNumber.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  });

  const debugArray = {
    startTime: startTime?.toLocaleTimeString(),
    endTime: endTime?.toLocaleTimeString(),
    timerCurrValue,
    timerEndValue,
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center flex-col ease-in-out transition transition-75 ${
        isTimeUp && timerEndValue ? "bg-black text-white" : ""
      }`}
    >
      {startTime && endTime ? (
        <>
          <div className="text-sm">
            Start - {startTime.toLocaleTimeString()}
          </div>
          <div className="text-sm">End - {endTime.toLocaleTimeString()}</div>
          <div className="text-8xl mb-4">{formattedTimer.join(":")}</div>
          <TimerForm startTimer={startTimer} />
        </>
      ) : (
        <>
          <div className="text-8xl mb-4 font-bold">Soft Timer</div>
          <TimerForm startTimer={startTimer} />
        </>
      )}
      {JSON.stringify(debugArray, null, 2)}
    </div>
  );
}
