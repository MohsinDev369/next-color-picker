"use client";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function App() {
  const [color, setColor] = useState("#b32aa9");
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-full bg-[${color}]`}
    >
      <h1 className="font-bold text-4xl mb-4">Color Picker</h1>
      <div className="bg-white border border-white p-4 rounded-xl">

      <HexColorPicker color={color} onChange={setColor} />  
      </div>
      {/* <div className="value" style={{ borderLeftColor: color }}>
        Current color is {color}
      </div> */}
      {/* <div className={`h-12 w-12 bg-[${color}]`}></div> */}

      {/* <div className="buttons">
        <button onClick={() => setColor("#c6ad23")}>Choose gold</button>
        <button onClick={() => setColor("#556b2f")}>Choose green</button>
        <button onClick={() => setColor("#207bd7")}>Choose blue</button>
      </div> */}
    </div>
  );
}
