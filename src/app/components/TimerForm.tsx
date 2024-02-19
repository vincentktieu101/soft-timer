import React, { useState } from "react";

interface TimerFormProps {
  startTimer: (timer: number) => void;
}

export const TimerForm = ({ startTimer }: TimerFormProps) => {
  const [endTimerField, setEndTimerField] = useState("");

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const time = parseInt(endTimerField) * 60 || -1;
    setEndTimerField("");
    if (time === -1) {
      alert("Enter valid number");
      return;
    }
    startTimer(time);
  };

  return (
    <form className="flex border-2 rounded-lg mb-4 overflow-hidden">
      <input
        className="p-4 text-black rounded-l-lg"
        placeholder="Set timer in minutes"
        value={endTimerField}
        onChange={(e) => setEndTimerField(e.target.value)}
      />
      <button
        onClick={handleEnter}
        className="bg-sky-500 hover:bg-sky-600 w-full h-full p-4 ease-in-out transition transition-75 text-white"
      >
        Set
      </button>
    </form>
  );
};
