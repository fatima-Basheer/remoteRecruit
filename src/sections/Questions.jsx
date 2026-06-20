import React from "react";
import Button from "../components/Button";

function Questions() {
  const rowData = [
    {
      id: 1,
      title: "Do I have to sign a long term contract?",
      text: "Actually beard single-origin coffee, twee 90's, PBR Echo Park satorial try-hard freegan Portland enuni. Actually beard single-origin coffee, twee 90's, PBR Echo Park satorial try-hard freegan Portland enuni.",
    },
    {
      id: 2,
      title: "Do I have to sign a long term contract?",
      text: "Actually beard single-origin coffee, twee 90's, PBR Echo Park satorial try-hard freegan Portland enuni. Actually beard single-origin coffee, twee 90's, PBR Echo Park satorial try-hard freegan Portland enuni.",
    },
    {
      id: 3,
      title: "Do I have to sign a long term contract?",
      text: "Actually beard single-origin coffee, twee 90's, PBR Echo Park satorial try-hard freegan Portland enuni. Actually beard single-origin coffee, twee 90's, PBR Echo Park satorial try-hard freegan Portland enuni.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 md:px-12 lg:px-24 md:py-16 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
        Common Questions
      </h1>

      <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
        {rowData.map((row) => (
          <div
            key={row.id}
            className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
          >
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              {row.title}
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              {row.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-10">
        <Button variant="outline" className="w-full sm:w-auto">
          More Questions
        </Button>
      </div>
    </div>
  );
}

export default Questions;
