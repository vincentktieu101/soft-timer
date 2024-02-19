import React, { useState } from "react";

interface FormProps {
  startTimer: (timer: number) => void;
}

export const Form = ({ startTimer }: FormProps) => {
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
    <form className="flex gap-4">
      <input
        placeholder="Set timer in minutes:"
        value={endTimerField}
        onChange={(e) => setEndTimerField(e.target.value)}
      />
      <button onClick={handleEnter}>Start</button>
    </form>
  );
};
