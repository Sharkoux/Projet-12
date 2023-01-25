import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import styled from "styled-components";
import { PropTypes } from "prop-types";



export default function RadarCharts({ datas }) {
  console.log(datas)
  const formatData = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]
    
  const formatXAxis = (tickItem) => {
    return formatData[tickItem -1]
  }

  return (
    <RadarChart outerRadius={90} width={260} height={250} data={datas.data} style={{background: '#282D30',  borderRadius: 5 }}>
    <PolarGrid radialLines={false}  />
    <PolarAngleAxis dataKey="kind" tickFormatter={formatXAxis} style={{fontSize: 11, fontWeight: 'bold'}}  />
    <Radar dataKey="kind" fillOpacity={0.6} legendType="none" />
    <Radar dataKey="value" fillOpacity={0.6} legendType="none"  style={{fill: '#FF0101', opacity: '0.7'}} />
    <Legend />
  </RadarChart>
  )
}
