import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import xCoordinates from './json/x.json';
import yCoordinates from './json/y.json';

const Chart = () => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const slicedXCoordinates = xCoordinates.slice(0, 50);
    const slicedYCoordinates = yCoordinates.slice(0, 50); 
    
    const mergedCoordinates = slicedXCoordinates.map((xCoord, index) => ({
      label: xCoord.Label,
      x: parseFloat(xCoord.RandomNumber),
      y: parseFloat(slicedYCoordinates[index].RandomNumber)
    }));
    setCoordinates(mergedCoordinates);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center',alignItems:"center" }}>
      <LineChart
        width={800}
        height={600}
        data={coordinates}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20, 
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="x" stroke="#8884d8" name="X Coordinates" />
        <Line type="monotone" dataKey="y" stroke="#82ca9d" name="Y Coordinates" />
      </LineChart>
    </div>
  );
};

export default Chart;
