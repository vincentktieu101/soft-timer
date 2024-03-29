import React from "react";

export const TimerDetails = () => {
  return (
    <details className="p-2 mb-20 border-2 rounded-lg">
      <summary className="font-bold p-[-0.5rem]-">Purpose</summary>
      <div className="max-w-[500px] text-sm">
        A timer that won&apos;t set off a loud alarm like{" "}
        <a
          href="https://www.google.com/search?q=timer"
          target="_blank"
          className="text-blue-400"
        >
          Google&apos;s
        </a>
        . The screen changes color when the time is reached. This timer might be
        nice when you don&apos;t want to make noise or if your hands are busy.
      </div>
    </details>
  );
};
