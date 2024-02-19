"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [startTime, setStartTime] = useState<Date>();
  const [timer, setTimer] = useState(0);
  const [endTimerField, setEndTimerField] = useState("");
  const [endTimer, setEndTimer] = useState(0);
  const isTimeUp = timer >= endTimer;
  const endTime = startTime
    ? new Date(startTime.getTime() + endTimer * 1000)
    : new Date();

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const time = parseInt(endTimerField) * 60 || -1;
    setEndTimerField("");
    if (time === -1) {
      alert("Enter valid number");
      return;
    }
    setEndTimer(time);
    setStartTime(new Date());
    setTimer(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (startTime) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  const formattedTimer = [Math.floor(timer / 60), Math.floor(timer % 60)].map(
    (myNumber) => {
      return myNumber.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
  );

  const debugArray = {
    startTime: startTime?.toLocaleTimeString(),
    timer,
    endTimerField,
    endTimer,
    endTime: endTime.toLocaleTimeString(),
  }

  return (
    <div
      className={`w-full h-full ${isTimeUp && endTimer ? "bg-blue-300" : ""}`}
    >
      {startTime ? (
        <>
          <div>Start - {startTime.toLocaleTimeString()}</div>
          <div>End - {endTime.toLocaleTimeString()}</div>
          <div>{formattedTimer.join(":")}</div>
          <form className="flex gap-8">
            <input
              placeholder="Enter Time:"
              value={endTimerField}
              onChange={(e) => setEndTimerField(e.target.value)}
            />
            <button onClick={handleEnter}>Reset</button>
          </form>
        </>
      ) : (
        <form className="flex gap-8">
          <input
            placeholder="Enter Time:"
            value={endTimerField}
            onChange={(e) => setEndTimerField(e.target.value)}
          />
          <button onClick={handleEnter}>Enter</button>
        </form>
      )}
      {JSON.stringify(debugArray, null, 2)}
    </div>
  );
}
