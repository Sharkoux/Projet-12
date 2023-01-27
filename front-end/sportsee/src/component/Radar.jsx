import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
} from "recharts";
import styled from "styled-components";
import { PropTypes } from "prop-types";



 function RadarCharts({ datas }) {
  console.log(datas)
  if(!datas.data) {
    return 
  }
  
  const dict = [
    { kind: 1, trad: "Cardio", position: 5 }, 
    { kind: 2, trad: "Energie", position: 4 }, 
    { kind: 3, trad: "Endurance", position: 3 }, 
    { kind: 4, trad: "Force", position: 2 }, 
    { kind: 5, trad: "Vitesse", position: 1 }, 
    { kind: 6, trad: "Intensité", position: 0 }]

  const resp = datas.data.map((item) => {
    const meta = dict.find(g => g.kind === Number(item.kind));
    const global = { ...item, ...meta };
    const {kind, ...rest} = global;
    return rest
  }).sort((a, b) => a.position - b.position);

  console.log(resp)
  return (
    <RadarChart outerRadius={85} width={260} height={250} data={resp} style={{background: '#282D30',  borderRadius: 5 }}>
    <PolarGrid radialLines={false}  />
    <PolarAngleAxis tick={{angle: 0}} dataKey="trad"  style={{fontSize: 11, fontWeight: 'bold'}}  />
    <Radar dataKey="value" fillOpacity={0.6} legendType="none"  style={{fill: '#FF0101', opacity: '0.7'}} />
    <Legend />
    </RadarChart>
  )
  
}

export default RadarCharts