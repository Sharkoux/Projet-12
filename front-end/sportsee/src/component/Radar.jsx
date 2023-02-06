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
 * @return { ReactElement }
 */

function RadarCharts() {
  // Retrieve ID with hook useParams
  const { id } = useParams()
  // Call data Performance for user with hook useCallUserPerformance (params: ID)
  const { userPerformance } = useCallUserPerformance(id)


  //Return if not data 
  if (!userPerformance.length) {
    return
  }

  // Return RadarChart component
  return (
    <RadarChart outerRadius={85} width={260} height={250} data={userPerformance} style={{ background: '#282D30', borderRadius: 5 }}>
      <PolarGrid radialLines={false} />
      <PolarAngleAxis tick={{ angle: 0 }} dataKey="trad" style={{ fontSize: 11, fontWeight: 'bold' }} />
      <Radar dataKey="value" fillOpacity={0.6} legendType="none" style={{ fill: '#FF0101', opacity: '0.7' }} />
      <Legend />
    </RadarChart>
  )

}

export default RadarCharts