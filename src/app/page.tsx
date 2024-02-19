"use client";

import React, { useEffect, useState } from "react";

import { Form } from "./components/Form";

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
    setTimer(0);
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
      className={`w-full h-full ${
        isTimeUp && timerEndValue ? "bg-blue-300" : ""
      }`}
    >
      {startTime && endTime ? (
        <>
          <div>Start - {startTime.toLocaleTimeString()}</div>
          <div>End - {endTime.toLocaleTimeString()}</div>
          <div>{formattedTimer.join(":")}</div>
          <Form startTimer={startTimer} />
        </>
      ) : (
        <Form startTimer={startTimer} />
      )}
      {JSON.stringify(debugArray, null, 2)}
    </div>
  );
}
