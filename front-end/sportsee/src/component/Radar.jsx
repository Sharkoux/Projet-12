import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
} from "recharts";

import useCallUserPerformance from "../hook/useCallUserPerformance";
import { useParams } from "react-router-dom";


/**
 * Generate RadarCharts with user data
 * @return { ReactDOM }
 */

 function RadarCharts() {
   // Retrieve ID with hook useParams
  const { id } = useParams()
  // Call data Performance for user with hook useCallUserPerformance (params: ID)
  const { userPerformance, error } = useCallUserPerformance(id)

 //Return if not data 
  if(!userPerformance.data) {
    return 
  }
 
 //Create Dictionary for format data
  const dict = [
    { kind: 1, trad: "Cardio", position: 5 }, 
    { kind: 2, trad: "Energie", position: 4 }, 
    { kind: 3, trad: "Endurance", position: 3 }, 
    { kind: 4, trad: "Force", position: 2 }, 
    { kind: 5, trad: "Vitesse", position: 1 }, 
    { kind: 6, trad: "Intensité", position: 0 }]

  // Format Data, add traduction and position
  const resp = userPerformance?.data?.data.map((item) => {
    const meta = dict.find(g => g.kind === Number(item.kind));
    const global = { ...item, ...meta };
    const {kind, ...rest} = global;
    return rest
  }).sort((a, b) => a.position - b.position);

  // Return RadarChart component
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