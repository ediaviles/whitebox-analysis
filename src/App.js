import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { renderLineChart } from './chart';

function App() {
  const [serverPerformances, setServerPerformances] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/serverPerformance")
      .then(response => {
        console.log(response)
        setServerPerformances(response.data);
      })
      .catch(error => console.error("error"));
  }, []);

  const createData = (rawData) => {
    let formattedData = {
      max: [],
      min: [],
      avg: []
    }
    for (let i = 0; i < rawData.length; i++) {
      let currentInfo = rawData[i]
      formattedData.min.push({"x" : i + 1, "y": currentInfo[0]})
      formattedData.max.push({"x" : i + 1, "y": currentInfo[1]})
      formattedData.avg.push({"x" : i + 1, "y": currentInfo[2]})
    }
    console.log(formattedData)
    return formattedData
  }

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {serverPerformances.map(serverPerformance => (
          <li key={serverPerformance._id}>
            <h3>Server {serverPerformance.serverId}</h3>
            <div>
              {renderLineChart(createData(serverPerformance.performance))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
